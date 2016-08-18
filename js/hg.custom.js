var Document, Datasets;

/**********************/
/*     Grid Start     */
/**********************/
hg.hgrid = function(options) {
	if(options.pivot == undefined){
		v = new hg.Grid.View(options);
	}else{
		v = new hg.Grid.PivotView(options);
	}
	
	if (options.ini && options.ini.id) hg.grid[options.ini.id] = v;
	return v;
};

function debug(str) {
}

/* 시연 함수 구현 */

function title1TitleToggle(){
	if(hg.hasClass(hg.$('.grid_title'), 'hdn')){
		hg.removeClass(hg.$('.grid_title'), 'hdn');
	}else{
		hg.addClass(hg.$('.grid_title'), 'hdn');
	}
	
}



/** Header 설정 **/

function header1Visible(){
	grid.showCol('USER_GRA');
}

function header1VisibleNone(){
	grid.hideCol('USER_GRA');
}


function columnControlAdd1(){
	grid.addCol({
		id:'columnControlAdd1'+Math.floor(Math.random() * 10000),
		name:'NEW_COL'
	}, 'USER_PON');
	grid.scroll.x.update();
}

function columnControlAdd2(){
	grid.addCol({
		id:'columnControlAdd2'+Math.floor(Math.random() * 10000),
		name:'NEW_COL'
	});
	grid.scroll.x.update();
}

function columnControlDel1(){
	if (grid.cols.get('id','USER_EMAIL').length == 0) return;
	grid.delCol('USER_EMAIL');
}


function body1SingleCell() {
	grid.selection.clear();
	alert('Single Cell : 단일 셀 선택 모드 입니다.');
	grid.selection._setSelectMode('singleCell');
}

function body1MultiCell() {
	grid.selection.clear();
	alert('Multi Cell : 다중 셀 선택 모드 입니다.');
	
	grid.selection._setSelectMode('multiCell');
}

function body1SingleRow() {
	grid.selection.clear();
	alert('Single Row : 단일 로우 선택 모드입니다.');
	grid.selection._setSelectMode('singleRow');
}

function body1MultiRow() {
	grid.selection.clear();
	alert('Multi Row : 다중 로우 선택 모드 입니다.');
	grid.selection._setSelectMode('multiRow');
}

function body2Add() {
	grid.addRow(2);
}

function body2AddLast() {
	grid.addRow();
	grid.setFocus(grid.getAllData().length-1,0);
}

function body2Del() {
	grid.delRow(4);
}

function body2Visible() {
	grid.showRow(2);
}

function body2VisibleNone() {
	grid.hideRow(2);
}

function body2Copy() {
	grid.copyRow(2, 5);
}



/** Footer 설정 **/

function footer1FooterToggle() {
	if (hg.hasClass(hg.$('.foot'), 'hdn')) hg.removeClass(hg.$('.foot'), 'hdn');
	else hg.addClass(hg.$('.foot'), 'hdn');
}

function footer1FooterCustomFuntionDatalength(data) {
	return "현재 데이터 갯수 : " + data.length;
}

/** Paging 설정 **/

function page1PagingToggle() {
	if (hg.hasClass(hg.$('.grid_page'), 'hdn')) hg.removeClass(hg.$('.grid_page'), 'hdn');
	else hg.addClass(hg.$('.grid_page'), 'hdn');
}

/* 시연 함수 구현 */

function fnSum(data, arr){
	var random = Math.floor(Math.random() * 999);
	
	var data = {
		id:'sum'+random,
		name:'합계',
		width: '100px'
	};
	var arr = ['pr_sale', 'pr_buy'];
	grid.sumRow(data, arr);
}

function fnAvg(data, arr){
	var random = Math.floor(Math.random() * 999);
	var data = {
		id:'avg'+random,
		name:'평균',
		width: '100px'
	};
	var arr = ['pr_sale', 'pr_buy'];
	grid.avgRow(data, arr);
}


/** Panel 설정 **/

function PanelToggle(){
	if(hg.hasClass(hg.$('.grid_panel'), 'hdn')){
		hg.removeClass(hg.$('.grid_panel'), 'hdn');
	}else{
		hg.addClass(hg.$('.grid_panel'), 'hdn');
	}
}

function PanelText(){
	grid.setPanelText('직원 목록 테이블입니다.');
}


function data1click(val){
	grid.get('edit').begin = val;
}

// 메뉴 순서대로 넣어야함
var JSONData = [
	/*
	{nm:'시연', link:'', menu:'', lv:1},
	{nm:'부가 설정', link:'3-2titleOptions', menu:'titleOptions', lv:2, color:''},
	{nm:'멀티헤더', link:'4-2multiheader', menu:'multiheader', lv:2, color:''},
	{nm:'로우 제어', link:'6-2rowControl', menu:'rowControl', lv:2, color:''},
	{nm:'데이터 병합', link:'6-4dataMerge', menu:'dataMerge', lv:2, color:''},
	{nm:'데이터 표시 및 편집 유형', link:'7-1rowBasic', menu:'rowBasic2', lv:2, color:''},
	{nm:'Cascading ComboBox', link:'7-1-3cascading', menu:'cascading', lv:2, color:''},
	{nm:'정렬', link:'7-2sort', menu:'sort', lv:2, color:''},
	{nm:'필터링', link:'7-3filtering', menu:'filtering', lv:2, color:''},
	{nm:'틀고정', link:'7-4fix', menu:'fix', lv:2, color:''},
	{nm:'그룹핑', link:'8-2grouping', menu:'grouping', lv:2, color:''},
	{nm:'텍스트 추가 및 합계/평균', link:'9-3sum', menu:'sum', lv:2, color:''},
	{nm:'그리드 테마(12종)', link:'12-6theme', menu:'theme', lv:2, color:''},
	{nm:'검색', link:'11-3search', menu:'search', lv:2, color:''},
	{nm:'트리 구조 그리드', link:'11-5tree', menu:'tree', lv:2, color:''},
	{nm:'엑셀 복사 및 붙여넣기', link:'13-2excelCopyPaste', menu:'excelCopyPaste', lv:2, color:''},
	{nm:'엑셀 업로드 및 다운로드', link:'13-13excelUpDownload', menu:'excelUpDownload', lv:2, color:''},
	{nm:'차트 연계', link:'13-3chart', menu:'chart', lv:2, color:''},
	{nm:'그리드 입력 Form 자동 생성', link:'13-5form', menu:'form', lv:2, color:''},
	{nm:'Grid간 연계', link:'13-6connect', menu:'connect', lv:2, color:''},
	{nm:'Master Detail 그리드 설정', link:'13-7masterDetail', menu:'masterDetail', lv:2, color:''},
	//{nm:'서버 정렬', link:'13-9sorting', menu:'sorting', lv:2, color:''},
	//{nm:'서버 필터', link:'13-10filter', menu:'filter', lv:2, color:''},
	//{nm:'서버 페이징', link:'13-11paging', menu:'paging', lv:2, color:''},
	{nm:'스토리지/쿠키', link:'11-6storage', menu:'storage', lv:2, color:''},
	{nm:'대용량 데이터 처리', link:'13-8bulk', menu:'bulk', lv:2, color:''},
	*/

	{nm:'HOPPEN Grid 소개', link:'', menu:'', lv:1},
	{nm:'표시 형태', link:'1-1grid', menu:'gridbasic', lv:2, color:''},
	{nm:'코딩 방식', link:'1-2coding', menu:'coding', lv:2},
	{nm:'기본설정', link:'', menu:'', lv:1},
	{nm:'기본 설정', link:'2-1basic', menu:'basic', lv:2},
	{nm:'체크박스 표시', link:'2-2checkbox', menu:'checkbox', lv:2},
	{nm:'컬럼 너비 조정', link:'2-3colWidth', menu:'colWidth', lv:2, color:''},
	{nm:'새로고침 버튼', link:'2-4refresh', menu:'refresh', lv:2},
	{nm:'데이터가 없을 때 출력할 메시지', link:'2-5noMsg', menu:'noMsg', lv:2},
	{nm:'타이틀(Title)', link:'', menu:'', lv:1},
	{nm:'기본 설정', link:'3-1titleBasic', menu:'titleBasic', lv:2},
	{nm:'부가 설정', link:'3-2titleOptions', menu:'titleOptions', lv:2, color:''},
	{nm:'커스텀 버튼 설정', link:'3-3titleCustom', menu:'titleCustom', lv:2, color:''},
	{nm:'타이틀 스타일', link:'3-4titleStyle', menu:'titleStyle', lv:2},
	{nm:'헤더(Header)', link:'', menu:'header', lv:1},
	{nm:'기본 설정', link:'4-1headerBasic', menu:'headerBasic', lv:2},
	{nm:'멀티헤더', link:'4-2multiheader', menu:'multiheader', lv:2, color:''},
	{nm:'헤더 스타일', link:'4-3headerStyle', menu:'headerStyle', lv:2},
	{nm:'컬럼(Column)', link:'', menu:'', lv:1},
	{nm:'컬럼 제어', link:'5-2columnControl', menu:'columnControl', lv:2, color:''},
	{nm:'로우(Rows)', link:'', menu:'', lv:1},
	{nm:'기본 설정', link:'6-1rowBasic', menu:'rowBasic', lv:2},
	{nm:'로우 제어', link:'6-2rowControl', menu:'rowControl', lv:2, color:''},
	{nm:'데이터 병합', link:'6-4dataMerge', menu:'dataMerge', lv:2, color:''},
	{nm:'자동 순번', link:'6-5rownum', menu:'rownum', lv:2},
	{nm:'로우 스타일', link:'6-6rowStyle', menu:'rowStyle', lv:2},
	{nm:'Data', link:'', menu:'', lv:1},
	{nm:'편집 : 데이터 편집', link:'7-1-2editmode', menu:'editmode', lv:2, color:''},
	//{nm:'편집 : Readonly 설정', link:'7-1-1readonly', menu:'readonly', lv:3},
	//{nm:'편집 : 편집 모드', link:'7-1-2editmode', menu:'editmode', lv:3},
	{nm:'편집 : Readonly 설정', link:'7-1-1readonly', menu:'readonly', lv:2},
	{nm:'데이터 표시 및 편집 유형', link:'7-1rowBasic', menu:'rowBasic2', lv:2, color:''},
	{nm:'Cascading ComboBox', link:'7-1-3cascading', menu:'cascading', lv:2, color:''},
	{nm:'정렬', link:'7-2sort', menu:'sort', lv:2, color:''},
	{nm:'필터링', link:'7-3filtering', menu:'filtering', lv:2, color:''},
	{nm:'틀고정', link:'7-4fix', menu:'fix', lv:2, color:''},
	{nm:'패널(Panel)', link:'', menu:'', lv:1},
	{nm:'패널 설정', link:'8-1panel', menu:'panel', lv:2},
	{nm:'그룹핑', link:'8-2grouping', menu:'grouping', lv:2, color:''},
	{nm:'푸터(Footer)', link:'', menu:'', lv:1},
	{nm:'기본 설정', link:'9-1footerBasic', menu:'footerBasic', lv:2},
	{nm:'텍스트 추가 및 합계/평균', link:'9-3sum', menu:'sum', lv:2, color:''},
	{nm:'푸터 스타일', link:'9-4footerStyle', menu:'footerStyle', lv:2},
	{nm:'페이징(Paging)', link:'', menu:'', lv:1},
	{nm:'기본 설정', link:'10-1pagingBasic', menu:'pagingBasic', lv:2},
	{nm:'표시 목록 개수', link:'10-2listNum', menu:'istNum', lv:2},
	{nm:'페이지 이동', link:'10-3pageMove', menu:'pageMove', lv:2},
	{nm:'페이징 스타일', link:'10-4pagingStyle', menu:'pagingStyle', lv:2},
	{nm:'Style', link:'', menu:'', lv:1},
	{nm:'그리드 테마(12종)', link:'12-6theme', menu:'theme', lv:2, color:''},
	{nm:'부가 기능', link:'', menu:'', lv:1},
	{nm:'툴팁', link:'11-1tooltip', menu:'tooltip', lv:2, color:''},
	{nm:'컨텍스트 메뉴', link:'11-2context', menu:'context', lv:2, color:''},
	{nm:'검색', link:'11-3search', menu:'search', lv:2, color:''},
	{nm:'행별 합계/평균', link:'11-4rowSumAvg', menu:'rowSumAvg', lv:2, color:''},
	{nm:'트리 구조 그리드', link:'11-5tree', menu:'tree', lv:2, color:''},
	{nm:'스토리지/쿠키', link:'11-6storage', menu:'storage', lv:2, color:''},
	{nm:'특화 기능', link:'', menu:'', lv:1},
	//{nm:'엑셀 업로드', link:'13-1excelUpload', menu:'excelUpload', lv:2},
	{nm:'엑셀 복사 및 붙여넣기', link:'13-2excelCopyPaste', menu:'excelCopyPaste', lv:2, color:''},
	//{nm:'엑셀 업로드 및 다운로드', link:'13-13excelUpDownload', menu:'excelUpDownload', lv:2, color:''},
	{nm:'챠트 연계', link:'13-3chart', menu:'chart', lv:2, color:''},
	{nm:'피벗', link:'13-4pivot', menu:'pivot', lv:2, color:''},
	{nm:'그리드 입력 Form 자동 생성', link:'13-5form', menu:'form', lv:2, color:''},
	{nm:'Grid간 연계', link:'13-6connect', menu:'connect', lv:2, color:''},
	{nm:'Master Detail 그리드 설정', link:'13-7masterDetail', menu:'masterDetail', lv:2, color:''},
	// {nm:'Lazy loading', link:'13-12lazy', menu:'lazy', lv:2, color:''},
	{nm:'서버 정렬', link:'13-9sorting', menu:'sorting', lv:2, color:''},
//	{nm:'서버 필터', link:'13-10filter', menu:'filter', lv:2, color:''},
	{nm:'서버 페이징', link:'13-11paging', menu:'paging', lv:2, color:''},
	{nm:'대용량 데이터 처리', link:'13-8bulk', menu:'bulk', lv:2, color:''}
];

// 1. 스크롤 이동
function createMenu(JSONData){
	var request = new Request();
	var selectmenu = request.getParameter('menu');
	var main = hg.$('.nav_menu');
	var compare_lv = 1;				// 비교 레벨
	var target = '';

	for (var i=0; i<JSONData.length; i++) {
		var nm = JSONData[i].nm;
		var link = JSONData[i].link;
		var menu = JSONData[i].menu;
		var lv = JSONData[i].lv;
		
		var li = document.createElement('li');
		var a = document.createElement('a');
						
		if (link) {
			a.href = 'hg.'+link+'.html' + '?menu=' + menu;
			a.id = menu;
		}
		else a.href = '#';
		
		a.title = nm;
		a.innerHTML = nm;

		if(selectmenu === a.id){
			a.className = 'active';
			//document.getElementsByTagName('nav').scrollTo(0,200);
		}
		
		li.appendChild(a);
		
		// 1레벨 메뉴
		if (lv == 1) {
			main.appendChild(li);
			target = li;
			compare_lv = lv;
		}
		// 2레벨 메뉴 처음 생성
		else if (compare_lv < lv) {
			var ul = document.createElement('ul');
			ul.appendChild(li);
			target.appendChild(ul);
			compare_lv = lv;
			target = ul;
		}
		else {
			target.appendChild(li);
			// target = li;
		}
		
		// 폰트 색상 처리
		if (JSONData[i].color == '') {
			// if (!hg.hasClass(a, 'active')) a.style.color = '#ff5e00';
		}
	}
	
	// 스크롤 위치 조정
	var select = hg.$('#'+selectmenu, main);
	var scroll = request.getScroll(select);

	main.parentNode.scrollTop = scroll;
}

// 2. 메뉴 접힘
/*
function createMenu(JSONData){
	var request = new Request();
	var selectmenu = request.getParameter('menu');
	var main = hg.$('.nav_menu');
	var compare_lv = 1;				// 비교 레벨
	var target = '';
	
	for (var i=0; i<JSONData.length; i++) {
		var nm = JSONData[i].nm;
		var link = JSONData[i].link;
		var menu = JSONData[i].menu;
		var lv = JSONData[i].lv;
		
		var li = document.createElement('li');
		var a = document.createElement('a');
						
		if (link) {
			a.href = 'hg.'+link+'.html' + '?menu=' + menu;
			a.id = menu;
		}
		else a.href = '#';
		
		a.title = nm;
		a.innerHTML = nm;

		if(selectmenu === a.id){
			a.className = 'active';
			//document.getElementsByTagName('nav').scrollTo(0,200);
		}
		
		li.appendChild(a);
		
		// 1레벨 메뉴
		if (lv == 1) {
			main.appendChild(li);
			target = li;
			compare_lv = lv;
		}
		// 2레벨 메뉴 처음 생성
		else if (compare_lv < lv) {
			var ul = document.createElement('ul');
			hg.addClass(ul, 'hdn');
			ul.appendChild(li);
			target.appendChild(ul);
			compare_lv = lv;
			target = ul;
		}
		else {
			target.appendChild(li);
			// target = li;
		}
		
		// 폰트 색상 처리
		if (JSONData[i].color == '') {
			if (!hg.hasClass(a, 'active')) a.style.color = '#ff5e00';
		}
	}
	
	// selectmenu를 포함한 메뉴 펼침
	var select = hg.$('#'+selectmenu, main);
	hg.removeClass(select.parentNode.parentNode, 'hdn');
	//document.getElementsByTagName('nav').scrollTo(0,200);
}
*/

var Request = function()
{
    this.getParameter = function( name )
    {
        var rtnval = '';
        var nowAddress = unescape(location.href);
        var parameters = (nowAddress.slice(nowAddress.indexOf('?')+1,nowAddress.length)).split('&');
        for(var i = 0 ; i < parameters.length ; i++)
        {
            var varName = parameters[i].split('=')[0];
            if(varName.toUpperCase() == name.toUpperCase())
            {
                rtnval = parameters[i].split('=')[1];
                break;
            }
        }
        return rtnval.replace('#', '');
        //document.write( rtnval );
    },
    this.getScroll = function( menu )
    {
        // 스크롤 위치 조정
		var wrap = hg.$('.nav_menu').parentNode;
		var wrapTop = hg.size(wrap).top;
		var wrapHeight = hg.size(wrap).height;
		var wrapScrollTop = wrap.scrollTop;
		var liTop = hg.size(menu).top;
		var realTop = liTop + wrapScrollTop - wrapTop;
		
        return (realTop - wrapHeight) + (parseInt(wrapHeight/2));
    }
}

// 속성/메소드/이벤트/예제소스 메뉴 선택
var preMenu = '';
function selectMenu(li) {
	var menu = li.className;
	// location.href = location.href.concat(menu);
	
	var wrap = hg.$('section#conf');
	if (menu == 'grid') {
		wrap.scrollTop = 0;
	}
	else if (menu == 'prop') {
		var desc = hg.size(hg.$('.ucore')).height;
		var grid = hg.size(hg.$('.grid_area')).height;

		wrap.scrollTop = desc + grid + 40;
	}
	else if (menu == 'method') {
		var desc = hg.size(hg.$('.ucore')).height;
		var grid = hg.size(hg.$('.grid_area')).height;
		var prop = hg.$$('.prop');
		var props = 0;
		for (var i=0; i<prop.length; i++) {
			props += hg.size(prop[i]).height;
		}
		wrap.scrollTop = desc + grid + props - 40;
	}
	else if (menu == 'source') {
		var desc = hg.size(hg.$('.ucore')).height;
		var grid = hg.size(hg.$('.grid_area')).height;
		var prop = hg.$$('.prop');
		var props = 0;
		for (var i=0; i<prop.length; i++) {
			props += hg.size(prop[i]).height;
		}
		var method = hg.$$('.method');
		var methods = 0;
		for (var i=0; i<method.length; i++) {
			methods += hg.size(method[i]).height;
		}
		wrap.scrollTop = desc + grid + props + methods - 40;
	}
	
	if (preMenu) hg.removeClass(preMenu, 'active'); 
	hg.addClass(li, 'active');
	preMenu = li;
}

$(document).ready(function(){
//	createMenu(JSONData);
//	$('.cont_title ul li').click(function(){
//		selectMenu(this);
//	});
	// $('.cont_title h3').click(function(){
		// //$('.cont_title').hide();
		// $('.ucore_tip2').toggle();
	// });
	
	
//	$('.cont_title')[0].style.width = hg.size($('.ucore_tip2')[0]).width + 'px';
	
	// 좌측 메뉴 해상도에 따른 min-Height 설정
//	hg.$('nav').style.minHeight = window.screen.height - 180 + 'px';
});

/* Grid 팀 내부 시연 함수 참고용
function link(pid) {
	location.href = './hg.' + pid + '.html';	
}



function fnClear_DebugData() {
	hg.$('#debug').innerHTML = '';
	hg.addClass(hg.$('.debug'), 'Hidden');
}

// 그룹데이터 생성 샘플
function group() {
	fnClear_DebugData();
	
	// Group 대상 컬럼
	var grp = ['USER_BEL', 'USER_DEP'];
	
	var final = grid.data.get('final');
	//debug(JSON.stringify(final));
	
	var key = [];
	//var cnt = 0;
	
	for (var i=0; i<final.length; i++) {
		var row = final[i].row;
		
		//debug(JSON.stringify(row));
		var arr = [];
		for (var k=0; k<grp.length; k++) arr.push(row[grp[k]]);
		arr = arr.join(',');
		//debug(arr);
		if (key.indexOf(arr) < 0) key.push(arr);
	}
	debug(key + ':' + key.length);
	
	
	
	grid.data.set('final', final);
}

// Dialog 설정 샘플
function dialog() {
	// Contents 영역에 들어갈 HTML설정
	// TODO : 반드시 한번만 추가되도록 처리해야함
	var div = document.createElement('div');
	div.className = 'filter_wrap';
	div.innerHTML = '<div class="dialog_search"><label for="filter_input01" class="Hidden">인풋박스제목</label><input class="com_input" type="search" id="filter_input01" style="width:250px;" /> <a href="#" class="filter_search_ico"><i class="fa">&#xf002;</i></a></div>'
	              + '<div class="dialog_chk" style="height:100px;"><div class="com_checkbox active"><label class="com_checkbox_label" for="filter_chk01">제목1</label><input class="com_checkbox_box" type="checkbox" id="filter_chk01" /></div>'
	              + '<div class="com_checkbox"><label class="com_checkbox_label" for="filter_chk02">제목2</label><input class="com_checkbox_box" type="checkbox" id="filter_chk02" /></div>'
	              + '<div class="com_checkbox"><label class="com_checkbox_label" for="filter_chk02">제목3</label><input class="com_checkbox_box" type="checkbox" id="filter_chk03" /></div>'
	              + '<div class="com_checkbox"><label class="com_checkbox_label" for="filter_chk02">제목4</label><input class="com_checkbox_box" type="checkbox" id="filter_chk04" /></div>'
	              + '<div class="com_checkbox"><label class="com_checkbox_label" for="filter_chk02">제목5</label><input class="com_checkbox_box" type="checkbox" id="filter_chk05" /></div>'
	              + '<div class="com_checkbox"><label class="com_checkbox_label" for="filter_chk02">제목6</label><input class="com_checkbox_box" type="checkbox" id="filter_chk06" /></div>'
	              + '</div>';
	document.body.appendChild(div);
	
	hg.Dialog.open({
		id: 'filter',
		title: '필터 설정',
		icon: 'filter',
		contents: '.filter_wrap',
		top: '50px',
		left: '50px',
		width: '301px',
		height: '219px',
		modal: true,
		buttons: [
			{
				text: '확인',
				fn:	function() {
				},
				theme: 'blue'
			},
			{
				text: '취소',
				fn:	function() {
					hg.Dialog.close('filter');
				}
			}
		]
	});
}

function fnAddCol(){
	// TODO : 파라미터 어떻게 설정할지 패턴 분석
	grid.addCol({
		id:'aaa',
		name:'끝'
	});
}

function fnAddCol2(){
	// TODO : 파라미터 어떻게 설정할지 패턴 분석
	grid.addCol({
		id:'bbb',
		name:'중간추가'
	}, 'USER_NAME');
}

function fnDelCol(){
	// TODO : 파라미터 어떻게 설정할지 패턴 분석
	grid.delCol('USER_EMAIL');
}

function fnHideCol(){
	// TODO : 파라미터 어떻게 설정할지 패턴 분석
	grid.hideCol('USER_PON');
}

function fnShowCol(){
	// TODO : 파라미터 어떻게 설정할지 패턴 분석
	grid.showCol('USER_PON');
}

function fnAddRow1(){
	var data = {'USER_SABUN':'1061325032', 'USER_NAME':'홍길동', 'USER_BEL':'U', 'USER_DEP':'020', 'USER_PON':'010-1234-5678', 'USER_EMAIL':'hgd@ucore.co.kr', 'USER_ADDR':'대전', 'USER_STARTDATE':'2010-10-01', 'USER_GRA':'A', 'USER_LIC':'', 'USER_GUBUN':'A', 'USER_photo':'', 'USER_SEX':'male', 'resignation_fg':'0', 'USER_energy':'65'};
	grid.addRow(data, 3);
}

function fnAddRow2(){
	grid.addRow(1);
}

function fnDelRow(){
	grid.delRow(3);
}

function fnHideRow(){
	grid.hideRow(3);
}

function fnShowRow(){
	grid.showRow(3);
}

function fnCopyRow(){
	grid.copyRow(3, 0);
}

// SelectMode 변경
function fnTempSelectionMode(){
	var result = prompt('selectMode 속성값을 입력하세요');
	if (result == 'singleCell' || result == 'singleRow' || result == 'multiCell' || result == 'multiRow') {
		grid.selection.clear();
		grid.selection._setSelectMode(result);
	}
	else {
		alert('속성값을 올바르게 입력하세요.');
		return;
	}
}
내부 시연 함수 참고용 */
