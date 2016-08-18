/************************************/
/*          Grid Pivot View          */
/************************************/
hg.Grid.PivotView = hg.View.extend({
	vnm: 'PivotView',
	subcnt: 0,
	seq: 0,
	// view constructor
	init: function(options){
		debug('Init PivotView');
		var self = this;
		
		this.model = new hg.Grid.Model(options);
		this.service = new hg.Service(this.model.get('ini'));
		
		var original = this.getTransPivotOpt(options);
		
		this.model = new hg.Grid.Model(this.model.data);
		this.cols = new hg.Cols(this.get('cols'));
		
		this.events = this.model.get('events');
		this.cid = hg.generateCid('v_Grid');
		this.model.bind('change', this.update, this);	// Model Update 감지 이벤트 설정
		//this.cols = this.model.cols;
		this.cols.flg = true;

		this.col = new hg.Grid.ColView(this);

		// model의 속성값에 따라 추가적으로 view객체 생성
		this.render = new hg.Grid.RenderView(this);
		
		this.scroll = {		//선언위치 상관없음.
			'x':new hg.Grid.ScrollView(this, "x"),
			'y':new hg.Grid.ScrollView(this, "y")
		};

		// resize의 속성값이 true인 경우에만 ResizeView생성
		if (this.model.get('ini.resize')) this.resize = new hg.Grid.ResizeView(this);

		// sort의 속성값이 true인 경우에만 SortView생성
		if (this.model.get('sort.sortable')) this.sort = new hg.Grid.SortView(this);		

		var selectMode = this.get('ini.selectMode');
		if (selectMode) this.selection = new hg.Grid.SelectionView(this);

		if (this.model.get('rows.merge')) this.merge = new hg.Grid.MergeView(this);

		// model의 속성값에 따라 추가적으로 view객체 생성
		this.data = new hg.Grid.DataView(this);
		this.model.set('ini.width', this.model.get('ini.width'));
		this.model.set('ini.height', this.model.get('ini.height'));
		
		//pivot에서 생성한 데이터가 있을 경우      
		if(original.length > 0){
			if (this.page) this.page.update(original.length);

			this.data.set('original', original);

			if (this.get('group.visible')){
				if(this.get("group.groupingField") ){
					this.grouping.registGroupingColumn(this.get("group.groupingField"));
				}
			}

			//if (this.get('edit.editable')) this.edit = new hg.Grid.EditView(this);

			this.fix = new hg.Grid.FixView(this);
			hg.addClass(hg.$('.loader2', self.el), 'Hidden');
			
			if(this.events){
				this.events.success.apply(this);
			}
		}

		if(hg.Grid.ImportView !=undefined) this.import = new hg.Grid.ImportView(this);

		if (this.model.get('search.visible')) {
			if(hg.Grid.SearchView !=undefined) {
				this.search = new hg.Grid.SearchView(this);
				var temp = this;
				hg.$('.grid_title .search', this.el).addEventListener('click', function(){
					temp.search.searchDialog(temp, this);
				});
			}
		}
		
		if(this.model._events['mouseup@.hgrid']== undefined){
			this.model.bind("mouseup@.hgrid", this._grid_click, this);
		}
		document.addEventListener("keydown", function(e){
			self._keydown(e,self);		//키보드이벤트랑 그리드객체 넘기기
		}, false);
		
		// 브라우저정보 취득
		if (hg.browserName == '') {
			if (hg.appName.charAt(0) == 'M') {
				var tempVersion = hg.appVersion.split('MSIE ')[1];
				tempVersion = tempVersion.split('.')[0];
				
				hg.browserName = 'IE'+tempVersion;
			}
			
			if (hg.browserName == 'IE9') {
				hg.util.unselectable(document.body);
			}
		}
		
		// Page이벤트 설정
		document.body.addEventListener('mousemove', this._mousemovePage );
		
		document.body.addEventListener('mouseup', this._mouseupPage );
	},
	getTransPivotOpt: function(options){
		
		var pData = this.service.send2();
		var aa = 0;
		
		var pvtCols, pvtColsNF, pvtRows, pvtRowsNF;
		
		if(options.pivot.cols != undefined && options.pivot.cols.length > 0){
			pvtCols = JSON.parse(JSON.stringify(options.pivot.cols));
			pvtColsNF = false;
		}else{
			pvtCols = [{name:'Total', id:'pivotTotal', width:'90px'}];
			pvtColsNF = true;
		}
		
		if(options.pivot.rows != undefined && options.pivot.rows.length > 0){
			pvtRows = JSON.parse(JSON.stringify(options.pivot.rows));
			pvtRowsNF = false;
		}else{
			pvtRows = [{name:'Total', id:'pivotTotal', width:'90px'}];
			pvtRowsNF = true;
		}
		
		//var pvtCols = JSON.parse(JSON.stringify(options.pivot.cols));
		//var pvtRows = JSON.parse(JSON.stringify(options.pivot.rows));
		var pvtVal = JSON.parse(JSON.stringify(options.pivot.vals));
		var pvtCArr = [];
		var pvtCObj = {};
		var pvtRArr = [];
		var pvtCArrCn = [];
		var pvtRArrCn = [];
		
		var pvtCRArr = JSON.parse(JSON.stringify(pvtCols));
		for(var pr = 0; pr < pvtCRArr.length; pr++){
			pvtCRArr[pr].align = 'right';
			if(pr%2 == 0){
				pvtCRArr[pr].style = {header:{backgroundColor: 'linear-gradient(to bottom, #f5ebcd 0%, #f7f1d7 100%)'}};				
			}else{
				pvtCRArr[pr].style = {header:{backgroundColor: 'linear-gradient(to bottom, #c8f5c1 0%, #d0f7ce 100%)'}};
			}
		}
		pvtCRArr[pvtCRArr.length-1].sub = JSON.parse(JSON.stringify(pvtRows));
		
		for(var cr = pvtCRArr.length-1; cr > 0 ; cr--){
			pvtCRArr[cr-1].sub = [pvtCRArr[cr]];
		}
		var pCols = [pvtCRArr[0]];
		
		var pColsIds = [];
		
		//데이터 건수 만큼 반복 하면서 cols정보 생성
		for(var i = 0; i < pData.length; i++){
			
			if(!pvtColsNF){
				var pColStr = ''; 
			
				for(var c = 0; c < pvtCols.length; c++){
					pColStr += '_Pivot_'+pData[i][pvtCols[c].id];
				}
				pColStr = pColStr.substring(7);
				
				//cols 정보 생성
				var pCol = {};
				if(pvtCArr.indexOf(pColStr) == -1){
					pvtCArr.push(pColStr);
					var pColStrArr = pColStr.split('_Pivot_');
					var pivotCn = "";
					
					//조건식 생성
					var pColO = pCols.filter(function(x){return x.name == pColStrArr[0];});
					var idStr = '';
					for(var pcs = 0; pcs < pColStrArr.length; pcs++){
						pivotCn += " && pData[i]['"+pvtCols[pcs].id+"'] == '"+pColStrArr[pcs]+"'";
						
						if(pcs == 0){
							if(pColO.length != 1){
								pCol = {};
								idStr += pvtCols[pcs].id + '_Pivot_' + (pCols.length-1+'');
								pCol.id = idStr;							
								pCol.name = pColStrArr[pcs];
								pCol.width = pvtCols[pvtCols.length-1].width;
								pCol.style = {header:{backgroundColor: 'linear-gradient(to bottom, #f5ebcd 0%, #f7f1d7 100%)'}};
								pCols.push(pCol);
								pColO = pCol;
							}else{
								idStr += pColO[0].id;
								pColO = pColO[0];
							}
						}else{
							//var pColO = pCols.filter(function(x){return x.sub.val == pColStrArr[pcs];});
							 
							if(pColO.sub == undefined){
								pColO.sub = [];
							}
													
							pColO = pColO.sub;
							var pClength = pColO.filter(function(x){return x.name == pColStrArr[pcs];}).length;
							
							if(pClength != 1){
								pCol = {};
								idStr += pvtCols[pcs].id + '_Pivot_' + (pColO.length+'');
								pCol.id = idStr;					
								pCol.name = pColStrArr[pcs];
								pCol.width = pvtCols[pcs].width;
								if(pcs%2 == 0){
									pCol.style = {header:{backgroundColor: 'linear-gradient(to bottom, #f5ebcd 0%, #f7f1d7 100%)'}};				
								}else{
									pCol.style = {header:{backgroundColor: 'linear-gradient(to bottom, #c8f5c1 0%, #d0f7ce 100%)'}};
								}
								pColO.push(pCol);
								pColO = pCol;
							}else{							
								pColO = pColO.filter(function(x){return x.name == pColStrArr[pcs];})[0];
								idStr += pColO.id;
							}
							
						}
						
					}
					pColsIds.push(idStr);
					pvtCObj[pColStr] = idStr;				
					pvtCArrCn.push(pivotCn.substring(4));
				}
			}
			
			
			if(!pvtRowsNF){
				var pRowStr = '';			
				for(var r = 0; r < pvtRows.length; r++){
					pRowStr += '_Pivot_'+pData[i][pvtRows[r].id];
				}
				pRowStr = pRowStr.substring(7);
				
				if(pvtRArr.indexOf(pRowStr) == -1){
					pvtRArr.push(pRowStr);
					
					var pRowStrArr = pRowStr.split('_Pivot_');
					var pivotCn = "";
					for(var c = 0; c < pRowStrArr.length; c++){
						pivotCn += " && pData[i]['"+pvtRows[c].id+"'] == '"+pRowStrArr[c]+"'";
						
					}
					pvtRArrCn.push(pivotCn.substring(4));
				}
			}			
		}
		if(pvtRowsNF){
			pvtRArr.push('total');
			pvtRArrCn.push(true);
		}
		switch (pvtVal.aggregator) {
			case 'sum' :
				pCols.push({name:'합계', id:'sum', width:'100px'});
				break;
			case 'avg':
				pCols.push({name:'평균', id:'avg', width:'100px'});
				break;
			case 'count':
				pCols.push({name:'개수', id:'count', width:'100px'});
				break;
			case 'min':									
				pCols.push({name:'최소값', id:'min', width:'100px'});
				break;
			case 'max':
				pCols.push({name:'최대값', id:'max', width:'100px'});
				break;
		}
		
		
		var original = new Array(pvtRArr.length);
		
		for(var r = 0; r < pvtRArr.length; r++){
			var pDataObj = {};
			for(var c = 0; c < pColsIds.length; c++){				
				pDataObj[pColsIds[c]] = '';
			}		
			
			for(var pr = 0; pr < pvtRows.length; pr++){
				pDataObj[pvtRows[pr].id] = pvtRArr[r].split('_Pivot_')[pr].replace('Pivot_','');
			}
			
			pDataObj[pvtVal.aggregator] = "";
			original[r]={row:pDataObj, idx:r, pc:pvtRArr[r]};
		}
		
		//데이터 생성
		for(var i = 0; i < pData.length; i++){			
			for(var pr = 0; pr < pvtRArrCn.length; pr++){
				if(eval(pvtRArrCn[pr])){					
					for(var pc = 0; pc < pvtCArrCn.length; pc++){
						if(eval(pvtCArrCn[pc])){
							
							switch (pvtVal.aggregator) {
								case 'sum' :
									var nowVal = Number(original.filter(function(x){return x.pc == pvtRArr[pr];})[0].row[pvtCObj[pvtCArr[pc]]]);
									original.filter(function(x){return x.pc == pvtRArr[pr];})[0].row[pvtCObj[pvtCArr[pc]]] = nowVal + Number(pData[i][pvtVal.id]);
									break;
								case 'avg':
									var nowVal = Number(original.filter(function(x){return x.pc == pvtRArr[pr];})[0].row[pvtCObj[pvtCArr[pc]]]);
									var nowCtn = Number(original.filter(function(x){return x.pc == pvtRArr[pr];})[0].row[pvtCObj[pvtCArr[pc]]+'_cnt'] || 0);
									original.filter(function(x){return x.pc == pvtRArr[pr];})[0].row[pvtCObj[pvtCArr[pc]]] = nowVal + Number(pData[i][pvtVal.id]);
									original.filter(function(x){return x.pc == pvtRArr[pr];})[0].row[pvtCObj[pvtCArr[pc]]+'_cnt'] = nowCtn + 1;
									break;
								case 'count':
									var nowVal = Number(original.filter(function(x){return x.pc == pvtRArr[pr];})[0].row[pvtCObj[pvtCArr[pc]]]);
									original.filter(function(x){return x.pc == pvtRArr[pr];})[0].row[pvtCObj[pvtCArr[pc]]] = nowVal + 1;
									break;
								case 'min':									
									var nowVal = Number(original.filter(function(x){return x.pc == pvtRArr[pr];})[0].row[pvtCObj[pvtCArr[pc]]]);
									
									if(original.filter(function(x){return x.pc == pvtRArr[pr];})[0].row[pvtCObj[pvtCArr[pc]]] === ""){
										nowVal = Number(pData[i][pvtVal.id]);
										original.filter(function(x){return x.pc == pvtRArr[pr];})[0].row[pvtCObj[pvtCArr[pc]]] = nowVal;
										break;
									}
									
									if(nowVal > Number(pData[i][pvtVal.id])){
										nowVal = Number(pData[i][pvtVal.id]);
										original.filter(function(x){return x.pc == pvtRArr[pr];})[0].row[pvtCObj[pvtCArr[pc]]] = nowVal;
									}									
									
									break;
								case 'max':
									var nowVal = Number(original.filter(function(x){return x.pc == pvtRArr[pr];})[0].row[pvtCObj[pvtCArr[pc]]]);
									if(nowVal < Number(pData[i][pvtVal.id])){
										nowVal = Number(pData[i][pvtVal.id]);
										original.filter(function(x){return x.pc == pvtRArr[pr];})[0].row[pvtCObj[pvtCArr[pc]]] = nowVal;
									}
									
									break;
							}
							
							break;
						}
					}
					
					switch (pvtVal.aggregator) {
						case 'sum' :
							var nowVal = Number(original.filter(function(x){return x.pc == pvtRArr[pr];})[0].row[pvtVal.aggregator]);
							original.filter(function(x){return x.pc == pvtRArr[pr];})[0].row['sum'] = nowVal + Number(pData[i][pvtVal.id]);
							break;
						case 'avg':
							var nowVal = Number(original.filter(function(x){return x.pc == pvtRArr[pr];})[0].row[pvtVal.aggregator]);
							var nowCtn = Number(original.filter(function(x){return x.pc == pvtRArr[pr];})[0].row[pvtVal.aggregator+'_cnt'] || 0);
							original.filter(function(x){return x.pc == pvtRArr[pr];})[0].row[pvtVal.aggregator] = nowVal + Number(pData[i][pvtVal.id]);
							original.filter(function(x){return x.pc == pvtRArr[pr];})[0].row[pvtVal.aggregator+'_cnt'] = nowCtn + 1;
							break;
						case 'count':
							var nowVal = Number(original.filter(function(x){return x.pc == pvtRArr[pr];})[0].row[pvtVal.aggregator]);
							original.filter(function(x){return x.pc == pvtRArr[pr];})[0].row[pvtVal.aggregator] = nowVal + 1;
							break;
						case 'min':
							var nowVal = Number(original.filter(function(x){return x.pc == pvtRArr[pr];})[0].row[pvtVal.aggregator]);
							
							if(original.filter(function(x){return x.pc == pvtRArr[pr];})[0].row[pvtVal.aggregator] === ""){
								nowVal = Number(pData[i][pvtVal.id]);
								original.filter(function(x){return x.pc == pvtRArr[pr];})[0].row[pvtVal.aggregator] = nowVal;
								break;
							}
							
							if(nowVal > Number(pData[i][pvtVal.id])){
								nowVal = Number(pData[i][pvtVal.id]);
								original.filter(function(x){return x.pc == pvtRArr[pr];})[0].row[pvtVal.aggregator] = nowVal;
							}
							break;
						case 'max':
							var nowVal = Number(original.filter(function(x){return x.pc == pvtRArr[pr];})[0].row[pvtVal.aggregator]);
							if(nowVal < Number(pData[i][pvtVal.id])){
								nowVal = Number(pData[i][pvtVal.id]);
								original.filter(function(x){return x.pc == pvtRArr[pr];})[0].row[pvtVal.aggregator] = nowVal;
							}							
							break;
					}

					break;
				}
			}
			
		}
		
		if(pvtVal.aggregator == "avg"){
			for(var i = 0; i < original.length; i++){
				for(var j = 0; j < pColsIds.length; j++){
					if(Number(original[i].row[pColsIds[j]]) > 0){
						original[i].row[pColsIds[j]] = Math.round((original[i].row[pColsIds[j]] / original[i].row[pColsIds[j]+'_cnt']) * 1000) / 1000;
						delete original[i].row[pColsIds[j]+'_cnt'];
					}
				}
				
				if(Number(original[i].row[pvtVal.aggregator]) > 0){
					original[i].row[pvtVal.aggregator] = Math.round((original[i].row[pvtVal.aggregator] / original[i].row[pvtVal.aggregator+'_cnt']) * 1000) / 1000;
					delete original[i].row[pvtVal.aggregator+'_cnt'];
				}
			}
		}
		
		//표측 정보로 정렬
		var sortingValue = [];
		var resultFunction = [];
		for(var pr = 0; pr < pvtRows.length; pr++){
			sortingValue.push({id:pvtRows[pr].id,sortby:'asc'});
		}
		for(var j = 0; j < sortingValue.length; j++){
			var sortid = sortingValue[j].id;
			var sortby = sortingValue[j].sortby;
			resultFunction.push(hg.util.sort_by(sortid, sortby === 'asc' ? true : false, function(a) {
					return hg.util.typeChanger(a);
				})
			);
		}
		original.sort(hg.util.chainSortBy(resultFunction));
		
		//if(this.model.data.ini.footer == true){
		//	this._addPivotFooter(pCols.slice(1), pvtVal.aggregator);
		//}
		
		this.model.data['cols'] = pCols;		
		this.model.data['fix'] = {row: 0,col: pvtRows.length};
		this.model.data.ini.refresh = false;
		return original;
	},
	_addPivotFooter: function(cols,type){
		for(var i = 0; i < cols.length; i++){
			if(cols[i].sub != undefined){
				this._addPivotFooter(cols[i].sub, type);
			}else{
				cols[i].footer = {
					fildNm: cols[i].id,
					oper: type,
					style: {
						textAlign: "right",
						fontWeight: 'bold',
						comma: true
					}
				};
			}
		}
		
	}
},hg.Grid.View);
