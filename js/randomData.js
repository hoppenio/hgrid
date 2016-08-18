function LPAD(s, c, n) {    
    if (! s || ! c || s.length >= n) {
        return s;
    }
 
    var max = (n - s.length)/c.length;
    for (var i = 0; i < max; i++) {
        s = c + s;
    }
 
    return s;
}

// count 수만큼 랜덤 데이터 생성
function createRandomData(type, count) {
	var data = [];

	switch (type) {
		case 'company':
			data = [
			  {"code":"U","name":"(주)유코아시스템","address":"대전광역시 서구 대덕대로 366(만년동, 대전둔산해가든센트럴파크3층)","tel":"042-719-2010","url":"http://www.u-core.co.kr/","logo":"../images/logo_ucore.png","startdate":"2008-06-15T15:00:00.000Z","score":52},
			  {"code":"O","name":"(주)구글","address":"(본사) 1600 Amphitheatre Parkway Mountain View, CA 94043","tel":"042-710-2010","url":"https://www.google.co.kr","logo":"../images/logo_google.png","startdate":"2008-09-30T15:00:00.000Z","score":53},
			  ];
		break;
		case 'companyUser1':
			data = [
				{"row":{"USER_SABUN":"100000","USER_PASSWARD":"!@#100000","USER_NAME":"박명신","USER_BEL":"U","USER_DEP":20,"USER_PON":"016-444-9060","USER_EMAIL":"foreignexchangedept1@yahoo.com.hk","USER_ADDR":"대전시 대덕구 덕암동 43-2","USER_STARTDATE":"2008-06-15T15:00:00.000Z","USER_GRA":"D","USER_LIC":"C","USER_GUBUN":"A","USER_photo":"/images/photo/photo001.jpg","USER_signimg":null,"USER_SEX":"male","resignation_fg":0,"USER_energy":71,"USER_COMPANY":"(주)유코아시스템"},"idx":0},{"row":{"USER_SABUN":"100001","USER_PASSWARD":"!@#100001","USER_NAME":"소효준","USER_BEL":"U","USER_DEP":1,"USER_PON":"016-460-6799","USER_EMAIL":"williamsgeorgeatmcarddept1@gmail.com","USER_ADDR":"대전시 동구 중동 8-13","USER_STARTDATE":"2008-07-31T15:00:00.000Z","USER_GRA":"C","USER_LIC":"C","USER_GUBUN":"A","USER_photo":"/images/photo/photo002.jpg","USER_signimg":null,"USER_SEX":"male","resignation_fg":0,"USER_energy":88,"USER_COMPANY":"(주)유코아시스템"},"idx":1},{"row":{"USER_SABUN":"100002","USER_PASSWARD":"!@#100002","USER_NAME":"최석근","USER_BEL":"U","USER_DEP":20,"USER_PON":"010-4225-9244","USER_EMAIL":"ericlim220@yahoo.com","USER_ADDR":"대전시 동구 삼성1동 283-48 신신빌딩2층","USER_STARTDATE":"2008-07-31T15:00:00.000Z","USER_GRA":"C","USER_LIC":"C","USER_GUBUN":"A","USER_photo":"/images/photo/photo003.jpg","USER_signimg":null,"USER_SEX":"male","resignation_fg":0,"USER_energy":80,"USER_COMPANY":"(주)유코아시스템"},"idx":2},{"row":{"USER_SABUN":"100004","USER_PASSWARD":"!@#100004","USER_NAME":"최치영","USER_BEL":"U","USER_DEP":3,"USER_PON":"010-9402-2177","USER_EMAIL":"katblix4@gmail.com","USER_ADDR":"대전시 유성구 노은동 561-2","USER_STARTDATE":"2008-10-31T15:00:00.000Z","USER_GRA":"A","USER_LIC":"AA","USER_GUBUN":"A","USER_photo":"/images/photo/photo005.jpg","USER_signimg":null,"USER_SEX":"male","resignation_fg":1,"USER_energy":82,"USER_COMPANY":"(주)유코아시스템"},"idx":3},{"row":{"USER_SABUN":"100005","USER_PASSWARD":"!@#100005","USER_NAME":"장희재","USER_BEL":"U","USER_DEP":40,"USER_PON":"011-451-8935","USER_EMAIL":"felica4uu@hotmail.com","USER_ADDR":"대전시 유성구 구성동 373-1","USER_STARTDATE":"2008-12-31T15:00:00.000Z","USER_GRA":"B","USER_LIC":"B","USER_GUBUN":"A","USER_photo":"/images/photo/photo006.jpg","USER_signimg":null,"USER_SEX":"male","resignation_fg":0,"USER_energy":64,"USER_COMPANY":"(주)유코아시스템"},"idx":4},{"row":{"USER_SABUN":"100011","USER_PASSWARD":"!@#100011","USER_NAME":"김정욱","USER_BEL":"U","USER_DEP":50,"USER_PON":"010-5452-6094","USER_EMAIL":"arfinances@live.com","USER_ADDR":"대전시 동구 중동 1-20번지 2층","USER_STARTDATE":"2009-12-31T15:00:00.000Z","USER_GRA":"C","USER_LIC":null,"USER_GUBUN":"A","USER_photo":"/images/photo/photo012.jpg","USER_signimg":null,"USER_SEX":"female","resignation_fg":0,"USER_energy":50,"USER_COMPANY":"(주)유코아시스템"},"idx":5}
			];
		break;
		case 'companyUser2':
			data = [
				{"row":{"USER_SABUN":"100003","USER_PASSWARD":"!@#100003","USER_NAME":"양희철","USER_BEL":"O","USER_DEP":40,"USER_PON":"010-4592-5090","USER_EMAIL":"mr.paul.harry08@gmail.com","USER_ADDR":"대전시 동구 용전동 13-2 상도빌딩 6층","USER_STARTDATE":"2008-09-30T15:00:00.000Z","USER_GRA":"C","USER_LIC":"D","USER_GUBUN":"A","USER_photo":"/images/photo/photo004.jpg","USER_signimg":null,"USER_SEX":"female","resignation_fg":0,"USER_energy":75,"USER_COMPANY":"(주)구글"},"idx":0},{"row":{"USER_SABUN":"100006","USER_PASSWARD":"!@#100006","USER_NAME":"김상현","USER_BEL":"O","USER_DEP":3,"USER_PON":"011-255-2173","USER_EMAIL":"j.nomvete30@workmail.co.za","USER_ADDR":"대전시 동구 삼성동 273-15","USER_STARTDATE":"2008-12-31T15:00:00.000Z","USER_GRA":"C","USER_LIC":null,"USER_GUBUN":"A","USER_photo":"/images/photo/photo007.jpg","USER_signimg":null,"USER_SEX":"male","resignation_fg":0,"USER_energy":50,"USER_COMPANY":"(주)구글"},"idx":1},{"row":{"USER_SABUN":"100007","USER_PASSWARD":"!@#100007","USER_NAME":"김판수","USER_BEL":"O","USER_DEP":30,"USER_PON":"011-308-1789","USER_EMAIL":"paul_ku2@hotmail.com","USER_ADDR":"대전시 동구 삼성동 273-1","USER_STARTDATE":"2009-01-31T15:00:00.000Z","USER_GRA":"C","USER_LIC":null,"USER_GUBUN":"A","USER_photo":"/images/photo/photo008.jpg","USER_signimg":null,"USER_SEX":"male","resignation_fg":0,"USER_energy":48,"USER_COMPANY":"(주)구글"},"idx":2},{"row":{"USER_SABUN":"100008","USER_PASSWARD":"!@#100008","USER_NAME":"김성한","USER_BEL":"O","USER_DEP":40,"USER_PON":"010-4412-1282","USER_EMAIL":"davis_mark1@outlook.com","USER_ADDR":"대전시 서구 만년동 194","USER_STARTDATE":"2009-01-31T15:00:00.000Z","USER_GRA":"C","USER_LIC":null,"USER_GUBUN":"A","USER_photo":"/images/photo/photo009.jpg","USER_signimg":null,"USER_SEX":"female","resignation_fg":0,"USER_energy":98,"USER_COMPANY":"(주)구글"},"idx":3},{"row":{"USER_SABUN":"100009","USER_PASSWARD":"!@#100009","USER_NAME":"이학균","USER_BEL":"O","USER_DEP":40,"USER_PON":"011-421-1755","USER_EMAIL":"sgtamyrhodes@qq.com","USER_ADDR":"대전시 서구 갈마동 1280 금강빌딩 1층","USER_STARTDATE":"2009-02-24T15:00:00.000Z","USER_GRA":"C","USER_LIC":null,"USER_GUBUN":"A","USER_photo":"/images/photo/photo010.jpg","USER_signimg":null,"USER_SEX":"female","resignation_fg":0,"USER_energy":99,"USER_COMPANY":"(주)구글"},"idx":4}
			];
		break;
		case 'stat':
			data = [
			  {"nameCol": "유선통신서비스","year2009": 146248,"year2010": 139624,"year2011": 136100,"year2012": 129885,"year2013": 124583},
			  {"nameCol": "무선통신서비스","year2009": 223962,"year2010": 229371,"year2011": 227567,"year2012": 228613,"year2013": 241421},
			  {"nameCol": "회선설비 임대 재판매","year2009": 17821,"year2010": 13210,"year2011": 14547,"year2012": 15482,"year2013": 16845},
			  {"nameCol": "부가통신서비스","year2009": 47950,"year2010": 54593,"year2011": 60583,"year2012": 57059,"year2013": 60715}
			];
		break;
		case 'virtualData0':
			for (var i=0; i<30; i++) {
				var month1 = Math.fround(Math.random() * 10000).toFixed(2);
				var month2 = Math.fround(Math.random() * 10000).toFixed(2);
				var month3 = Math.fround(Math.random() * 10000).toFixed(2);
				var month4 = Math.fround(Math.random() * 10000).toFixed(2);
				var month5 = Math.fround(Math.random() * 10000).toFixed(2);
				var month6 = Math.fround(Math.random() * 10000).toFixed(2);
				var month7 = Math.fround(Math.random() * 10000).toFixed(2);
				var month8 = Math.fround(Math.random() * 10000).toFixed(2);
				var month9 = Math.fround(Math.random() * 10000).toFixed(2);
				var month10 = Math.fround(Math.random() * 10000).toFixed(2);
				var month11 = Math.fround(Math.random() * 10000).toFixed(2);
				var month12 = Math.fround(Math.random() * 10000).toFixed(2);
				
				data.push({
					month1 : month1, 
					month2 : month2,
					month3 : month3,
					month4 : month4,
					month5 : month5,
					month6 : month6,
					month7 : month7,
					month8 : month8,
					month9 : month9,
					month10 : month10,
					month11 : month11,
					month12 : month12
				});
			}
			
			break;
		case 'virtualData1':
			for (var i=0; i<30; i++) {
				var month1 = Math.floor(Math.random() * 1000000);
				var month2 = Math.floor(Math.random() * 1000000);
				var month3 = Math.floor(Math.random() * 1000000);
				var month4 = Math.floor(Math.random() * 1000000);
				var month5 = Math.floor(Math.random() * 1000000);
				var month6 = Math.floor(Math.random() * 1000000);
				var month7 = Math.floor(Math.random() * 1000000);
				var month8 = Math.floor(Math.random() * 1000000);
				var month9 = Math.floor(Math.random() * 1000000);
				var month10 = Math.floor(Math.random() * 1000000);
				var month11 = Math.floor(Math.random() * 1000000);
				var month12 = Math.floor(Math.random() * 1000000);
				
				data.push({
					month1 : month1, 
					month2 : month2,
					month3 : month3,
					month4 : month4,
					month5 : month5,
					month6 : month6,
					month7 : month7,
					month8 : month8,
					month9 : month9,
					month10 : month10,
					month11 : month11,
					month12 : month12
				});
			}
			
			break;
		case 'virtualData2':
			for (var i=0; i<30; i++) {
				var month1 = Math.floor(Math.random() * 1000000);
				var month2 = Math.floor(Math.random() * 1000000);
				var month3 = Math.floor(Math.random() * 1000000);
				var month4 = Math.floor(Math.random() * 1000000);
				var month5 = Math.floor(Math.random() * 1000000);
				var month6 = Math.floor(Math.random() * 1000000);
				var month7 = Math.floor(Math.random() * 1000000);
				var month8 = Math.floor(Math.random() * 1000000);
				var month9 = Math.floor(Math.random() * 1000000);
				var month10 = Math.floor(Math.random() * 1000000);
				var month11 = Math.floor(Math.random() * 1000000);
				var month12 = Math.floor(Math.random() * 1000000);
				
				data.push({
					month1 : month1, 
					month2 : month2,
					month3 : month3,
					month4 : month4,
					month5 : month5,
					month6 : month6,
					month7 : month7,
					month8 : month8,
					month9 : month9,
					month10 : month10,
					month11 : month11,
					month12 : month12
				});
			}
			
			break;
		case 'city':
			var citys = new Array('서울', '인천', '경기', '경북', '대구', '강원', '광주', '전남', '전북', '제주', '부산', '울산', '경남', '대전', '충남', '충북', '세종');
			
			var city, student, absence, training, trip, job, other;
			
			for (var i=0; i<count; i++) {
				city = citys[Math.floor(Math.random() * citys.length)];
				student = Math.floor(Math.random() * 100);
				absence = Math.floor(Math.random() * 10);
				training = Math.floor(Math.random() * 10);
				trip = Math.floor(Math.random() * 10);
				job = Math.floor(Math.random() * 10);
				other = Math.floor(Math.random() * 10);
				
				data.push({
					city : city, 
					student : student,
					absence : absence,
					training : training,
					trip : trip,
					job : job,
					other : other
				});
			}
			
			break;
		case 'colPie': 
			var names = new Array("이강원","박진화","이소영","김명환","김남순","김만중","이초이","엄기헌","곽영석","유연희","이재균","박명자","김영곤","허병활","김태근","김미경","정재원","이영복","김도영","김종율","정동환","이한성","안정균","이광호","황정석","김덕원","이성철","한병수","천확삼","안대호","김귀애","손봉한","유재훈","박진화","김영숙","김성희","이미숙","이두성","오현숙","박기덕","박진화","이현서","정갑균","조성재","조명호","이종진","김준식","임영근","조정희","김갑중","양우승","송상민","김계환","신수인","강민곤","장연수","박현배","윤환","박민길","염규홍","정민우","김진우","최형모","이은애","이태우","임정태","이수진","지영식","장삼현","오원기","박성자","유승수","김대성","박성자","정정용","이미옥","김혜옥","유호근","정선영","정재영","정윤호","우주동","유정희","김준호","한충언","김동민","김창환","정수지","김정희","이천희","황정환","박필입","박순분","정신영","오성현","최옥화","박영숙","이한성","유석원","장이준");
			
		break;
		case 'phone':
			var names = new Array("이강원","박진화","이소영","김명환","김남순","김만중","이초이","엄기헌","곽영석","유연희","이재균","박명자","김영곤","허병활","김태근","김미경","정재원","이영복","김도영","김종율","정동환","이한성","안정균","이광호","황정석","김덕원","이성철","한병수","천확삼","안대호","김귀애","손봉한","유재훈","박진화","김영숙","김성희","이미숙","이두성","오현숙","박기덕","박진화","이현서","정갑균","조성재","조명호","이종진","김준식","임영근","조정희","김갑중","양우승","송상민","김계환","신수인","강민곤","장연수","박현배","윤환","박민길","염규홍","정민우","김진우","최형모","이은애","이태우","임정태","이수진","지영식","장삼현","오원기","박성자","유승수","김대성","박성자","정정용","이미옥","김혜옥","유호근","정선영","정재영","정윤호","우주동","유정희","김준호","한충언","김동민","김창환","정수지","김정희","이천희","황정환","박필입","박순분","정신영","오성현","최옥화","박영숙","이한성","유석원","장이준");
			var addresss = new Array("서울특별시 관악구 봉천동","경기도 광주시 퇴촌면 관음리","경기도 고양시 일산서구 대화동","충청북도 제천시 하소동","경기도 부천시 오정구 고강동","서울특별시 양천구 목동","서울특별시 관악구 신림동","서울특별시 관악구 봉천동","서울특별시 양천구 목동","서울특별시 은평구 응암동","서울특별시 중구 신당동","서울특별시 관악구 신림동","서울특별시 관악구 신림동","대구광역시 북구 산격동","서울특별시 관악구 신림동","서울특별시 강서구 화곡동","대구광역시 달서구 감삼동","서울특별시 금천구 시흥동","서울특별시 금천구 독산동","서울특별시 영등포구 여의도동","강원도 원주시 태장동","서울특별시 관악구 신림동","서울특별시 동작구 상도동","인천광역시 부평구 부개동","경기도 성남시 분당구 정자동","경기도 부천시 오정구 원종동","인천광역시 남구 주안동","경기도 부천시 원미구 원미동","서울특별시 양천구 목동","경기도 성남시 중원구 상대원동","인천광역시 연수구 청학동","인천광역시 서구 검암동","서울특별시 관악구 봉천동","경기도 광주시 퇴촌면 관음리","서울특별시 관악구 봉천동","서울특별시 영등포구 대림동","서울특별시 관악구 봉천동","서울특별시 관악구 봉천동","서울특별시 구로구 고척동","경기도 부천시 원미구 역곡동","경기도 광주시 퇴촌면 관음리","서울특별시 강서구 방화동","경기도 안양시 동안구 관양동","경기도 남양주시 오남읍 오남리","경기도 평택시 이충동","경기도 의정부시 의정부동","경기도 평택시 진위면 견산리","서울특별시 구로구 궁동","서울특별시 관악구 봉천동","경기도 부천시 소사구 심곡본동","서울특별시 관악구 봉천동","서울특별시 관악구 신림동","충청남도 당진군 당진읍 원당리","서울특별시 관악구 신림동","서울특별시 강서구 화곡동","경기도 성남시 중원구 은행동","서울특별시 금천구 독산동","서울특별시 동작구 사당동","서울특별시 강동구 천호동","충청남도 금산군 금산읍 하옥리","서울특별시 동대문구 휘경동","서울특별시 동작구 상도동","서울특별시 금천구 시흥동","서울특별시 종로구 익선동","충청북도 충주시 연수동");
			var products = new Array("IPhone 5S", "Galaxy S5", "IPad Air", "Galaxy Note3", "LG G3", "Nexus 10");
			var colors = new Array("Blue", "Gray", "Green", "Orange", "Pink", "Violet", "Yellow", "Red");
			var qtys = new Array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20);
			var purchaseDates = new Array("2014-10-01","2014-09-30","2014-09-29","2014-09-28","2014-09-27","2014-09-26","2014-09-25","2014-09-24","2014-09-23","2014-09-22","2014-09-21","2014-09-20","2014-09-19","2014-09-18","2014-09-17","2014-09-16","2014-09-15","2014-09-14","2014-09-13","2014-09-12","2014-09-11","2014-09-10","2014-09-09","2014-09-08","2014-09-07","2014-09-06","2014-09-05","2014-09-04","2014-09-03","2014-09-02","2014-09-01","2014-08-31","2014-08-30","2014-08-29","2014-08-28","2014-08-27","2014-08-26","2014-08-25","2014-08-24","2014-08-23","2014-08-22","2014-08-21","2014-08-20","2014-08-19","2014-08-18","2014-08-17","2014-08-16","2014-08-15","2014-08-14","2014-08-13","2014-08-12","2014-08-11","2014-08-10","2014-08-09","2014-08-08");
			
			var name, address, product, color, color2, qty, price, purchaseDate;
			
			for (var i = 0; i < count; i++) {
				name = names[Math.floor(Math.random() * names.length)];
				address = addresss[Math.floor(Math.random() * addresss.length)];
				product = products[Math.floor(Math.random() * products.length)];
				color = colors[Math.floor(Math.random() * colors.length)];
				color2 = colors[Math.floor(Math.random() * colors.length)];
				qty = qtys[Math.floor(Math.random() * qtys.length)];
				price = Math.floor(Math.random() * 100000);
				purchaseDate = purchaseDates[Math.floor(Math.random() * purchaseDates.length)];
				
				data.push({
					name : name, 
					address : address,
					product : product,
					color : color,
					color2 : color2,
					qty : qty,
					price : price,
					purchaseDate : purchaseDate
				});
			}
			break;
		case 'speed':	
			var names = new Array("이강원","박진화","이소영","김명환","김남순","김만중","이초이","엄기헌","곽영석","유연희","이재균","박명자","김영곤","허병활","김태근","김미경","정재원","이영복","김도영","김종율","정동환","이한성","안정균","이광호","황정석","김덕원","이성철","한병수","천확삼","안대호","김귀애","손봉한","유재훈","박진화","김영숙","김성희","이미숙","이두성","오현숙","박기덕","박진화","이현서","정갑균","조성재","조명호","이종진","김준식","임영근","조정희","김갑중","양우승","송상민","김계환","신수인","강민곤","장연수","박현배","윤환","박민길","염규홍","정민우","김진우","최형모","이은애","이태우","임정태","이수진","지영식","장삼현","오원기","박성자","유승수","김대성","박성자","정정용","이미옥","김혜옥","유호근","정선영","정재영","정윤호","우주동","유정희","김준호","한충언","김동민","김창환","정수지","김정희","이천희","황정환","박필입","박순분","정신영","오성현","최옥화","박영숙","이한성","유석원","장이준");
			var sendDates = new Array("2008-08-01","2008-08-02","2008-08-03","2008-08-04","2008-08-05","2008-08-06","2008-08-07","2008-08-08","2008-08-09","2008-08-10","2008-08-11","2008-08-12","2008-08-13","2008-08-14","2008-08-15","2008-08-16","2008-08-17","2008-08-18","2008-08-19","2008-08-20","2008-08-21","2008-08-22","2008-08-23","2008-08-24","2008-08-25","2008-08-26","2008-08-27","2008-08-28","2008-08-29","2008-08-30","2008-08-31","2008-09-01","2008-09-02","2008-09-03","2008-09-04","2008-09-05","2008-09-06","2008-09-07","2008-09-08","2008-09-09","2008-09-10","2008-09-11","2008-09-12","2008-09-13","2008-09-14","2008-09-15","2008-09-16","2008-09-17","2008-09-18","2008-09-19","2008-09-20","2008-09-21","2008-09-22","2008-09-23","2008-09-24","2008-09-25","2008-09-26","2008-09-27","2008-09-28","2008-09-29","2008-09-30");
			var returnDates = new Array("2008-10-01","2008-10-02","2008-10-03","2008-10-04","2008-10-05","2008-10-06","2008-10-07","2008-10-08","2008-10-09","2008-10-10","2008-10-11","2008-10-12","2008-10-13","2008-10-14","2008-10-15","2008-10-16","2008-10-17","2008-10-18","2008-10-19","2008-10-20","2008-10-21","2008-10-22","2008-10-23","2008-10-24","2008-10-25","2008-10-26","2008-10-27","2008-10-28","2008-10-29","2008-10-30","2008-10-31","2008-11-01","2008-11-02","2008-11-03","2008-11-04","2008-11-05","2008-11-06","2008-11-07","2008-11-08","2008-11-09","2008-11-10","2008-11-11","2008-11-12","2008-11-13","2008-11-14","2008-11-15","2008-11-16","2008-11-17","2008-11-18","2008-11-19","2008-11-20","2008-11-21","2008-11-22","2008-11-23","2008-11-24","2008-11-25","2008-11-26","2008-11-27","2008-11-28","2008-11-29","2008-11-30");
			var returnReasons = new Array("수취인불명","수취인부재","이사","폐문부재","주소불명");
			var addresss = new Array("서울특별시 관악구 봉천동","경기도 광주시 퇴촌면 관음리","경기도 고양시 일산서구 대화동","충청북도 제천시 하소동","경기도 부천시 오정구 고강동","서울특별시 양천구 목동","서울특별시 관악구 신림동","서울특별시 관악구 봉천동","서울특별시 양천구 목동","서울특별시 은평구 응암동","서울특별시 중구 신당동","서울특별시 관악구 신림동","서울특별시 관악구 신림동","대구광역시 북구 산격동","서울특별시 관악구 신림동","서울특별시 강서구 화곡동","대구광역시 달서구 감삼동","서울특별시 금천구 시흥동","서울특별시 금천구 독산동","서울특별시 영등포구 여의도동","강원도 원주시 태장동","서울특별시 관악구 신림동","서울특별시 동작구 상도동","인천광역시 부평구 부개동","경기도 성남시 분당구 정자동","경기도 부천시 오정구 원종동","인천광역시 남구 주안동","경기도 부천시 원미구 원미동","서울특별시 양천구 목동","경기도 성남시 중원구 상대원동","인천광역시 연수구 청학동","인천광역시 서구 검암동","서울특별시 관악구 봉천동","경기도 광주시 퇴촌면 관음리","서울특별시 관악구 봉천동","서울특별시 영등포구 대림동","서울특별시 관악구 봉천동","서울특별시 관악구 봉천동","서울특별시 구로구 고척동","경기도 부천시 원미구 역곡동","경기도 광주시 퇴촌면 관음리","서울특별시 강서구 방화동","경기도 안양시 동안구 관양동","경기도 남양주시 오남읍 오남리","경기도 평택시 이충동","경기도 의정부시 의정부동","경기도 평택시 진위면 견산리","서울특별시 구로구 궁동","서울특별시 관악구 봉천동","경기도 부천시 소사구 심곡본동","서울특별시 관악구 봉천동","서울특별시 관악구 신림동","충청남도 당진군 당진읍 원당리","서울특별시 관악구 신림동","서울특별시 강서구 화곡동","경기도 성남시 중원구 은행동","서울특별시 금천구 독산동","서울특별시 동작구 사당동","서울특별시 강동구 천호동","충청남도 금산군 금산읍 하옥리","서울특별시 동대문구 휘경동","서울특별시 동작구 상도동","서울특별시 금천구 시흥동","서울특별시 종로구 익선동","충청북도 충주시 연수동");
			var carNumbers = new Array("59허16*7","경기63나70*5","경기45너60*4","53러25*1","경기83너49*7","70고10*6","04루60*2","서울50노95*7","경기58허27*3","43머30*4","52버86*6","서울50도69*7","34거44*0","39누49*9","서울49마49*9","서울46더80*6","58두28*0","07노25*0","90루45*1","서울55도48*0","17주82*4","29더85*9","60두52*0","인천34러62*4","12구72*4","경기38머27*1","26누27*7","06다23*2","서울45누96*6","경기33모51*0","06허75*2","12어86*7","60소38*3","경기63나70*5","서울48러70*0","39머72*4","서울49머65*7","07조52*8","52너44*7","11더79*8","경기63나70*5","59노76*5","경기82다18*5","43수14*6","01무21*9","경기34로11*5","33누41*5","73구47*6","서울51가95*2","경기38거65*5","64서97*4","07소96*4","충남45라48*1","08주36*9","03오65*2","서울35허32*9","19부21*5","서울45누89*8","서울82루63*4","32더53*2","58다82*9","서울70모35*1","서울31사24*2","49저10*9","09허13*0","경남33라55*4","69모77*2","90부14*1","07수98*4","서울46러50*8","86러17*0","서울52고51*6","11너42*2","서울33마73*7","62누92*3","경북31러93*2","12다81*2","05머55*9","76서19*8","서울1부33*7","서울47러71*3","35허17*0","38가73*4","50러81*7","서울43고23*5","03머90*8","07너15*8","57우55*4","경북32루91*4","52고92*1","52너49*6","인천34고79*4","경기2드46*5","18수77*1","서울70고45*5","인천80더44*3","09머40*0","29더85*9","23저99*8","76러11*6");
			var createDates = new Array("2008-06-01","2008-06-02","2008-06-03","2008-06-04","2008-06-05","2008-06-06","2008-06-07","2008-06-08","2008-06-09","2008-06-10","2008-06-11","2008-06-12","2008-06-13","2008-06-14","2008-06-15","2008-06-16","2008-06-17","2008-06-18","2008-06-19","2008-06-20","2008-06-21","2008-06-22","2008-06-23","2008-06-24","2008-06-25","2008-06-26","2008-06-27","2008-06-28","2008-06-29","2008-06-30","2008-07-01","2008-07-02","2008-07-03","2008-07-04","2008-07-05","2008-07-06","2008-07-07","2008-07-08","2008-07-09","2008-07-10","2008-07-11","2008-07-12","2008-07-13","2008-07-14","2008-07-15","2008-07-16","2008-07-17","2008-07-18","2008-07-19","2008-07-20","2008-07-21","2008-07-22","2008-07-23","2008-07-24","2008-07-25","2008-07-26","2008-07-27","2008-07-28","2008-07-29","2008-07-30","2008-07-31");
			
			var name, sendDate, returnDate, returnReason, address, carNumber, createDate;
			
			for (var i = 0; i < count; i++) {
				name = names[Math.floor(Math.random() * names.length)];
				sendDate = sendDates[Math.floor(Math.random() * sendDates.length)];
				returnDate = returnDates[Math.floor(Math.random() * returnDates.length)];
				returnReason = returnReasons[Math.floor(Math.random() * returnReasons.length)];
				address = addresss[Math.floor(Math.random() * addresss.length)];
				carNumber = carNumbers[Math.floor(Math.random() * carNumbers.length)];
				createDate = createDates[Math.floor(Math.random() * createDates.length)];
				
				data.push({
					name : name, 
					sendDate : sendDate,
					returnDate : returnDate,
					returnReason : returnReason,
					address : address,
					carNumber : carNumber,
					createDate : createDate
				});
			}
			break;
		case 'user':
			var USER_SABUNs = new Array("11","12","13","14","15");
			var USER_NAMEs = new Array("이강원","박진화","이소영","김명환","김남순","김만중","이초이","엄기헌","곽영석","유연희","이재균","박명자","김영곤","허병활","김태근","김미경","정재원","이영복","김도영","김종율","정동환","이한성","안정균","이광호","황정석","김덕원","이성철","한병수","천확삼","안대호","김귀애","손봉한","유재훈","박진화","김영숙","김성희","이미숙","이두성","오현숙","박기덕","박진화","이현서","정갑균","조성재","조명호","이종진","김준식","임영근","조정희","김갑중","양우승","송상민","김계환","신수인","강민곤","장연수","박현배","윤환","박민길","염규홍","정민우","김진우","최형모","이은애","이태우","임정태","이수진","지영식","장삼현","오원기","박성자","유승수","김대성","박성자","정정용","이미옥","김혜옥","유호근","정선영","정재영","정윤호","우주동","유정희","김준호","한충언","김동민","김창환","정수지","김정희","이천희","황정환","박필입","박순분","정신영","오성현","최옥화","박영숙","이한성","유석원","장이준");
			var USER_BELs = new Array("O","U");
			var USER_DEPs = new Array("002","003","020","030","040","050","060");
			var USER_EMAILs = new Array("foreignexchangedept1@yahoo.com.hk","williamsgeorgeatmcarddept1@gmail.com","ericlim220@yahoo.com","mr.paul.harry08@gmail.com","katblix4@gmail.com","felica4uu@hotmail.com","j.nomvete30@workmail.co.za","paul_ku2@hotmail.com","davis_mark1@outlook.com","sgtamyrhodes@qq.com","dhldelivery@pochta.com","arfinances@live.com","help202@outlook.dk","mrs.gloriamackenie@outlook.com","shand_lee@yahoo.com.hk","franklinosayandescott@gmail.com","pmark5193@gmail.com","westernunion1233@yahoo.fr","iwumt2015@gmail.com","mathewgdfoundation@qq.com","johnpaulpatrick_77@hotmail.com","davidmike_201@yahoo.co.jp","detailsunitednations@gmail.com","newgovernorcbn2014@gmail.com","gordch101@yahoo.com.hk","Petersimonsbacka@swedishmedtech.se.com","dipjsc.dubai@gmail.com","dipjsc.uae@gmail.com","qrtinfoyou@gmail.com","executive.jalloh@gmail.com","unsubemail55@gmail.com","cpiatbariloche@speedy.com.ar","manitoba02@gmail.com","dr.robertp1@hotmail.com","western.union577@qq.com","upsservices9201@outlook.com","mr.jamescornwall@qq.com","frankcartercashflowinvestment@yahoo.com","carlzeichner@email.ch","barristeronyelilian5@gmail.com","mr.paulconnick@hotmail.com","firstbankplcng@accountant.com","mrbenraymond1957@gmx.com","t.pbena1@foxmail.com","ggregor932@gmail.com","america-seafood@hotmail.com","aandmengineering@msn.com","info@maerskoilgroup.com","mrsjanetyellen3@gmail.com","andreidmitrievbulkserver@gmail.com","ousmansoumah003@gmail.com","kushi.alltoit@hotmail.com","addaieric002@gmail.com","moneygram08@foxmail.com","foreignpaymentdepartment@lycos.com","musolinofinancefinco@gmail.com","724479582@qq.com","inf0@pisem.net","adom-thiemele@thiemele-lawfirm.com","hgbfcf9@hotmail.com","serline_klein@hotmail.com","kindlyremove008@gmail.com","mr.andrew_pedro@yahoo.fr","mr.andrew_pedro@yahoo.fr","newlook2k8.bye@gmail.com","cmfinancialservices07@gmail.com","CameronDokodaFinancialServices@consultant.com","tfgiftinvestment2@gmail.com","moneytransferwesternunion75@yahoo.com.vn","leon.hirtle2@hotmail.com","slaveigood1@gmail.com","paull.bben@gmail.com","western.u844@mail.ru","lottowinnerrewards@gmail.com","david.ellis01@outlook.com","raymond.buxton2015@hotmail.com","kw648@yahoo.com.hk","InfoNedbank.Nedbank@yahoo.co.za","alexander.dryano@yahoo.ie","terry.don@live.com","telex@swlft-natwest.com","info.interpol@bigmir.net","aishamummar1@yahoo.com","jamesdabeni@yahoo.com","jamesdabeni777@gmail.com","f.express2015@yandex.com","charlesmillssarb@gmail.com","mrsireneloeinfirm1@gmail.com","waleVCXakande2010@gmail.com","waleakande2010@gmail.com","westerntttuuunnion@outlook.com","homelandsecdpt01@mail.tj","efccfile02@mail.tj","lbetten102@hotmail.com");
			var USER_ADDRs = new Array("서울특별시 관악구 봉천동","경기도 광주시 퇴촌면 관음리","경기도 고양시 일산서구 대화동","충청북도 제천시 하소동","경기도 부천시 오정구 고강동","서울특별시 양천구 목동","서울특별시 관악구 신림동","서울특별시 관악구 봉천동","서울특별시 양천구 목동","서울특별시 은평구 응암동","서울특별시 중구 신당동","서울특별시 관악구 신림동","서울특별시 관악구 신림동","대구광역시 북구 산격동","서울특별시 관악구 신림동","서울특별시 강서구 화곡동","대구광역시 달서구 감삼동","서울특별시 금천구 시흥동","서울특별시 금천구 독산동","서울특별시 영등포구 여의도동","강원도 원주시 태장동","서울특별시 관악구 신림동","서울특별시 동작구 상도동","인천광역시 부평구 부개동","경기도 성남시 분당구 정자동","경기도 부천시 오정구 원종동","인천광역시 남구 주안동","경기도 부천시 원미구 원미동","서울특별시 양천구 목동","경기도 성남시 중원구 상대원동","인천광역시 연수구 청학동","인천광역시 서구 검암동","서울특별시 관악구 봉천동","경기도 광주시 퇴촌면 관음리","서울특별시 관악구 봉천동","서울특별시 영등포구 대림동","서울특별시 관악구 봉천동","서울특별시 관악구 봉천동","서울특별시 구로구 고척동","경기도 부천시 원미구 역곡동","경기도 광주시 퇴촌면 관음리","서울특별시 강서구 방화동","경기도 안양시 동안구 관양동","경기도 남양주시 오남읍 오남리","경기도 평택시 이충동","경기도 의정부시 의정부동","경기도 평택시 진위면 견산리","서울특별시 구로구 궁동","서울특별시 관악구 봉천동","경기도 부천시 소사구 심곡본동","서울특별시 관악구 봉천동","서울특별시 관악구 신림동","충청남도 당진군 당진읍 원당리","서울특별시 관악구 신림동","서울특별시 강서구 화곡동","경기도 성남시 중원구 은행동","서울특별시 금천구 독산동","서울특별시 동작구 사당동","서울특별시 강동구 천호동","충청남도 금산군 금산읍 하옥리","서울특별시 동대문구 휘경동","서울특별시 동작구 상도동","서울특별시 금천구 시흥동","서울특별시 종로구 익선동","충청북도 충주시 연수동");
			var months = new Array("01-01","01-02","01-03","01-04","01-05","01-06","01-07","01-08","01-09","01-10","01-11","01-12","01-13","01-14","01-15","01-16","01-17","01-18","01-19","01-20","01-21","01-22","01-23","01-24","01-25","01-26","01-27","01-28","01-29","01-30","01-31","02-01","02-02","02-03","02-04","02-05","02-06","02-07","02-08","02-09","02-10","02-11","02-12","02-13","02-14","02-15","02-16","02-17","02-18","02-19","02-20","02-21","02-22","02-23","02-24","02-25","02-26","02-27","02-28","03-01","03-02","03-03","03-04","03-05","03-06","03-07","03-08","03-09","03-10","03-11","03-12","03-13","03-14","03-15","03-16","03-17","03-18","03-19","03-20","03-21","03-22","03-23","03-24","03-25","03-26","03-27","03-28","03-29","03-30","03-31","04-01","04-02","04-03","04-04","04-05","04-06","04-07","04-08","04-09","04-10","04-11","04-12","04-13","04-14","04-15","04-16","04-17","04-18","04-19","04-20","04-21","04-22","04-23","04-24","04-25","04-26","04-27","04-28","04-29","04-30","05-01","05-02","05-03","05-04","05-05","05-06","05-07","05-08","05-09","05-10","05-11","05-12","05-13","05-14","05-15","05-16","05-17","05-18","05-19","05-20","05-21","05-22","05-23","05-24","05-25","05-26","05-27","05-28","05-29","05-30","05-31","06-01","06-02","06-03","06-04","06-05","06-06","06-07","06-08","06-09","06-10","06-11","06-12","06-13","06-14","06-15","06-16","06-17","06-18","06-19","06-20","06-21","06-22","06-23","06-24","06-25","06-26","06-27","06-28","06-29","06-30","07-01","07-02","07-03","07-04","07-05","07-06","07-07","07-08","07-09","07-10","07-11","07-12","07-13","07-14","07-15","07-16","07-17","07-18","07-19","07-20","07-21","07-22","07-23","07-24","07-25","07-26","07-27","07-28","07-29","07-30","07-31","08-01","08-02","08-03","08-04","08-05","08-06","08-07","08-08","08-09","08-10","08-11","08-12","08-13","08-14","08-15","08-16","08-17","08-18","08-19","08-20","08-21","08-22","08-23","08-24","08-25","08-26","08-27","08-28","08-29","08-30","08-31","09-01","09-02","09-03","09-04","09-05","09-06","09-07","09-08","09-09","09-10","09-11","09-12","09-13","09-14","09-15","09-16","09-17","09-18","09-19","09-20","09-21","09-22","09-23","09-24","09-25","09-26","09-27","09-28","09-29","09-30","10-01","10-02","10-03","10-04","10-05","10-06","10-07","10-08","10-09","10-10","10-11","10-12","10-13","10-14","10-15","10-16","10-17","10-18","10-19","10-20");
			var USER_GRAs = new Array("A","B","C","D");
			var USER_LICs = new Array("1","2","3","4","5","11","22","13");
			var USER_GUBUNs = new Array("A","B");
			var USER_photos = new Array("/images/photo/photo001.jpg","/images/photo/photo002.jpg","/images/photo/photo003.jpg","/images/photo/photo004.jpg","/images/photo/photo005.jpg","/images/photo/photo006.jpg","/images/photo/photo007.jpg","/images/photo/photo008.jpg","/images/photo/photo009.jpg","/images/photo/photo010.jpg","/images/photo/photo011.jpg","/images/photo/photo012.jpg","/images/photo/photo013.jpg","/images/photo/photo014.jpg","/images/photo/photo015.jpg","/images/photo/photo016.jpg","/images/photo/photo017.jpg","/images/photo/photo018.jpg","/images/photo/photo019.jpg","/images/photo/photo020.jpg","/images/photo/photo021.jpg","/images/photo/photo022.jpg","/images/photo/photo023.jpg","/images/photo/photo024.jpg","/images/photo/photo025.jpg","/images/photo/photo026.jpg","/images/photo/photo027.jpg","/images/photo/photo028.jpg","/images/photo/photo029.jpg","/images/photo/photo030.jpg","/images/photo/photo031.jpg","/images/photo/photo032.jpg","/images/photo/photo033.jpg","/images/photo/photo034.jpg","/images/photo/photo035.jpg","/images/photo/photo036.jpg","/images/photo/photo037.jpg","/images/photo/photo038.jpg","/images/photo/photo039.jpg","/images/photo/photo040.jpg","/images/photo/photo041.jpg","/images/photo/photo042.jpg","/images/photo/photo043.jpg","/images/photo/photo044.jpg","/images/photo/photo045.jpg","/images/photo/photo046.jpg","/images/photo/photo047.jpg","/images/photo/photo048.jpg","/images/photo/photo049.jpg","/images/photo/photo050.jpg","/images/photo/photo051.jpg","/images/photo/photo052.jpg","/images/photo/photo053.jpg","/images/photo/photo054.jpg","/images/photo/photo055.jpg","/images/photo/photo056.jpg","/images/photo/photo057.jpg","/images/photo/photo058.jpg","/images/photo/photo059.jpg","/images/photo/photo060.jpg","/images/photo/photo061.jpg","/images/photo/photo062.jpg","/images/photo/photo063.jpg","/images/photo/photo064.jpg","/images/photo/photo065.jpg","/images/photo/photo066.jpg","/images/photo/photo067.jpg","/images/photo/photo068.jpg","/images/photo/photo069.jpg","/images/photo/photo070.jpg","/images/photo/photo071.jpg","/images/photo/photo072.jpg","/images/photo/photo073.jpg","/images/photo/photo074.jpg","/images/photo/photo075.jpg","/images/photo/photo076.jpg","/images/photo/photo077.jpg","/images/photo/photo078.jpg","/images/photo/photo079.jpg","/images/photo/photo080.jpg","/images/photo/photo081.jpg","/images/photo/photo082.jpg","/images/photo/photo083.jpg","/images/photo/photo084.jpg","/images/photo/photo085.jpg","/images/photo/photo086.jpg","/images/photo/photo087.jpg","/images/photo/photo088.jpg","/images/photo/photo089.jpg","/images/photo/photo090.jpg","/images/photo/photo091.jpg","/images/photo/photo092.jpg","/images/photo/photo093.jpg","/images/photo/photo094.jpg");
			var USER_SEXs = new Array("female","male");
			var resignation_fgs = new Array("1","0");
			
			var USER_SABUN, USER_NAME, USER_BEL, USER_DEP, USER_PON, USER_EMAIL, USER_ADDR, USER_STARTDATE, USER_GRA, USER_LIC, USER_GUBUN, USER_photo, USER_SEX, resignation_fg, USER_energy;
			
			for (var i = 0; i < count; i++) {
				var sabun = USER_SABUNs[Math.floor(Math.random() * USER_SABUNs.length)];			
				USER_SABUN = sabun + LPAD(Math.floor(Math.random() * 1000)+'', '0', 4);
				USER_NAME = USER_NAMEs[Math.floor(Math.random() * USER_NAMEs.length)];
				USER_BEL = USER_BELs[Math.floor(Math.random() * USER_BELs.length)];
				USER_DEP = USER_DEPs[Math.floor(Math.random() * USER_DEPs.length)];
				USER_PON = "010-" + LPAD(Math.floor(Math.random() * 10000)+'', '0', 4) + "-" +LPAD(Math.floor(Math.random() * 10000)+'', '0', 4);  
				USER_EMAIL = USER_EMAILs[Math.floor(Math.random() * USER_EMAILs.length)];
				USER_ADDR = USER_ADDRs[Math.floor(Math.random() * USER_ADDRs.length)];
				USER_STARTDATE = "20"+sabun+"-"+months[Math.floor(Math.random() * months.length)];
				USER_GRA = USER_GRAs[Math.floor(Math.random() * USER_GRAs.length)];
				USER_LIC = USER_LICs[Math.floor(Math.random() * USER_LICs.length)];
				USER_GUBUN = USER_GUBUNs[Math.floor(Math.random() * USER_GUBUNs.length)];
				USER_photo = USER_photos[Math.floor(Math.random() * USER_photos.length)];
				USER_SEX = USER_SEXs[Math.floor(Math.random() * USER_SEXs.length)];
				resignation_fg = resignation_fgs[Math.floor(Math.random() * resignation_fgs.length)];
				USER_energy = Math.floor(Math.random() * 100);
				
				
				data.push({
					USER_SABUN: USER_SABUN, 
					USER_NAME: USER_NAME, 
					USER_BEL: USER_BEL, 
					USER_DEP: USER_DEP, 
					USER_PON: USER_PON, 
					USER_EMAIL: USER_EMAIL, 
					USER_ADDR: USER_ADDR, 
					USER_STARTDATE: USER_STARTDATE, 
					USER_GRA: USER_GRA, 
					USER_LIC: USER_LIC, 
					USER_GUBUN: USER_GUBUN, 
					USER_photo: USER_photo, 
					USER_SEX: USER_SEX, 
					resignation_fg: resignation_fg, 
					USER_energy: USER_energy
				});
			}
			
			break;
		
		case 'data':
			data = [{"shpcod": "1050223961","cd_bar": "2920000000498","nm_bar": "비식품","spec_bar": "male","nm_cst": "미지정거래처","nm_ryu1": "비식품","nm_ryu2": "PLU","nm_ryu3": "PLU","pr_sale": 32000,"pr_buy": 25600,"qty_puc": 0,"last_puc": null,"last_sal": "2014-09-11","qty_avg_sal": 3,"ds_stk": 2,"ds_tax": 1,"ymd_send": "2014-09-12 20:40:45"},{"shpcod": "1050223961","cd_bar": "80050278","nm_bar": "로쉐-T3","spec_bar": "female","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "과자류","nm_ryu3": "제과","pr_sale": 1800,"pr_buy": 1400,"qty_puc": 0,"last_puc": null,"last_sal": "2014-05-27","qty_avg_sal": 0,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-06-17 20:40:08"},{"shpcod": "1050223961","cd_bar": "88002101","nm_bar": "피크닉사과200mi","spec_bar": "neutrality","nm_cst": "미지정거래처","nm_ryu1": "미지정","nm_ryu2": "미지정","nm_ryu3": "미지정","pr_sale": 500,"pr_buy": 0,"qty_puc": 0,"last_puc": null,"last_sal": "2014-05-22","qty_avg_sal": 1,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-06-17 20:40:08"},{"shpcod": "1050223961","cd_bar": "88002293","nm_bar": "상하목장딸기","spec_bar": "male","nm_cst": "미지정거래처","nm_ryu1": "미지정","nm_ryu2": "미지정1","nm_ryu3": "미지정","pr_sale": 1000,"pr_buy": 0,"qty_puc": 0,"last_puc": null,"last_sal": "2014-05-22","qty_avg_sal": 2,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-06-17 20:40:09"},{"shpcod": "1050223961","cd_bar": "88002712","nm_bar": "요플레100G","spec_bar": "male","nm_cst": "미지정거래처","nm_ryu1": "미지정","nm_ryu2": "미지정","nm_ryu3": "미지정2","pr_sale": 800,"pr_buy": 0,"qty_puc": 0,"last_puc": null,"last_sal": "2014-05-22","qty_avg_sal": 1,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-06-17 20:40:09"},{"shpcod": "1050223961","cd_bar": "88002798","nm_bar": "바나나맛우유","spec_bar": "female","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "유제품류","nm_ryu3": "기타","pr_sale": 1200,"pr_buy": 900,"qty_puc": 0,"last_puc": null,"last_sal": "2014-05-22","qty_avg_sal": 1,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-06-17 20:40:09"},{"shpcod": "1050223961","cd_bar": "88003429","nm_bar": "심플","spec_bar": "female","nm_cst": "미지정거래처","nm_ryu1": "담배","nm_ryu2": "국산담배","nm_ryu3": "국산담배","pr_sale": 2300,"pr_buy": 2070,"qty_puc": 0,"last_puc": null,"last_sal": "2014-08-16","qty_avg_sal": 2,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-08-17 20:41:01"},{"shpcod": "1050223961","cd_bar": "88004600","nm_bar": "상하유기바나나우유125ml*3","spec_bar": "male","nm_cst": "미지정거래처","nm_ryu1": "미지정","nm_ryu2": "미지정","nm_ryu3": "미지정","pr_sale": 1000,"pr_buy": 0,"qty_puc": 0,"last_puc": null,"last_sal": "2014-05-22","qty_avg_sal": 1,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-06-17 20:40:09"},{"shpcod": "1050223961","cd_bar": "88005317","nm_bar": "카스640ml","spec_bar": "female","nm_cst": "미지정거래처","nm_ryu1": "주류","nm_ryu2": "맥주","nm_ryu3": "기타","pr_sale": 1900,"pr_buy": 0,"qty_puc": 0,"last_puc": null,"last_sal": "2014-08-01","qty_avg_sal": 3,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-08-02 20:40:02"},{"shpcod": "1050223961","cd_bar": "8801007054186","nm_bar": "햇반300g","spec_bar": "male","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "즉석식품","nm_ryu3": "기타","pr_sale": 2000,"pr_buy": 1683,"qty_puc": 0,"last_puc": null,"last_sal": "2014-07-18","qty_avg_sal": 2,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-07-19 20:40:14"},{"shpcod": "1050223961","cd_bar": "8801007112497","nm_bar": "맛있는콩두부(부침용)300g","spec_bar": "male","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "냉동/냉장식품","nm_ryu3": "냉장식품","pr_sale": 1400,"pr_buy": 900,"qty_puc": 0,"last_puc": null,"last_sal": "2014-07-23","qty_avg_sal": 3,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-07-24 20:39:57"},{"shpcod": "1050223961","cd_bar": "8801007150390","nm_bar": "백설부침가루/1kg","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "가루류","nm_ryu3": "가루류","pr_sale": 2200,"pr_buy": 1400,"qty_puc": 0,"last_puc": null,"last_sal": "2014-08-02","qty_avg_sal": 1,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-08-03 20:40:10"},{"shpcod": "1050223961","cd_bar": "8801007166438","nm_bar": "해찬들우리쌀고추장200g(봉)","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "미지정","nm_ryu2": "미지정","nm_ryu3": "미지정","pr_sale": 2500,"pr_buy": 0,"qty_puc": 0,"last_puc": null,"last_sal": "2014-06-29","qty_avg_sal": 1,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-06-30 20:40:50"},{"shpcod": "1050223961","cd_bar": "8801007243054","nm_bar": "쇠고기다시다/100G","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "첨가류","nm_ryu3": "첨가류","pr_sale": 2100,"pr_buy": 1500,"qty_puc": 0,"last_puc": null,"last_sal": "2014-06-29","qty_avg_sal": 1,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-06-30 20:40:50"},{"shpcod": "1050223961","cd_bar": "8801007314327","nm_bar": "황설탕","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "미지정","nm_ryu2": "미지정","nm_ryu3": "미지정","pr_sale": 6300,"pr_buy": 4600,"qty_puc": 0,"last_puc": null,"last_sal": "2014-08-01","qty_avg_sal": 1,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-08-02 20:40:03"},{"shpcod": "1050223961","cd_bar": "8801007512235","nm_bar": "스팸클래식/340G","spec_bar": "340","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "통조림류","nm_ryu3": "기타","pr_sale": 4900,"pr_buy": 2700,"qty_puc": 0,"last_puc": null,"last_sal": "2014-08-02","qty_avg_sal": 1,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-08-03 20:40:10"},{"shpcod": "1050223961","cd_bar": "8801007512259","nm_bar": "스팸/200G","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "통조림류","nm_ryu3": "기타","pr_sale": 3600,"pr_buy": 2200,"qty_puc": 0,"last_puc": null,"last_sal": "2014-08-02","qty_avg_sal": 3,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-08-03 20:40:10"},{"shpcod": "1050223961","cd_bar": "8801019206306","nm_bar": "12000미니자유시간","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "과자류","nm_ryu3": "제과","pr_sale": 9000,"pr_buy": 7020,"qty_puc": 0,"last_puc": null,"last_sal": "2014-06-22","qty_avg_sal": 1,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-06-23 20:40:31"},{"shpcod": "1050223961","cd_bar": "8801019306327","nm_bar": "1700샤브레","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "과자류","nm_ryu3": "제과","pr_sale": 1550,"pr_buy": 1066,"qty_puc": 0,"last_puc": null,"last_sal": "2014-07-17","qty_avg_sal": 1,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-07-18 20:39:55"},{"shpcod": "1050223961","cd_bar": "8801019306587","nm_bar": "홈런볼4팩","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "과자류","nm_ryu3": "제과","pr_sale": 3500,"pr_buy": 2600,"qty_puc": 0,"last_puc": null,"last_sal": "2014-09-11","qty_avg_sal": 2,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-09-12 20:40:45"},{"shpcod": "1050223961","cd_bar": "8801019307089","nm_bar": "800크림웨하스","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "과자류","nm_ryu3": "제과","pr_sale": 750,"pr_buy": 501,"qty_puc": 0,"last_puc": null,"last_sal": "2014-07-17","qty_avg_sal": 1,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-07-18 20:39:55"},{"shpcod": "1050223961","cd_bar": "8801019307096","nm_bar": "800딸기웨하스","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "과자류","nm_ryu3": "제과","pr_sale": 750,"pr_buy": 501,"qty_puc": 0,"last_puc": null,"last_sal": "2014-07-17","qty_avg_sal": 1,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-07-18 20:39:55"},{"shpcod": "1050223961","cd_bar": "8801019307102","nm_bar": "1700롤리폴리","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "과자류","nm_ryu3": "제과","pr_sale": 1550,"pr_buy": 1066,"qty_puc": 0,"last_puc": null,"last_sal": "2014-06-22","qty_avg_sal": 1,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-06-23 20:40:31"},{"shpcod": "1050223961","cd_bar": "8801019309823","nm_bar": "1200포키","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "과자류","nm_ryu3": "제과","pr_sale": 1100,"pr_buy": 752,"qty_puc": 0,"last_puc": null,"last_sal": "2014-06-22","qty_avg_sal": 2,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-06-23 20:40:31"},{"shpcod": "1050223961","cd_bar": "8801019310027","nm_bar": "에이스3번들","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "과자류","nm_ryu3": "제과","pr_sale": 2300,"pr_buy": 1600,"qty_puc": 0,"last_puc": null,"last_sal": "2014-06-22","qty_avg_sal": 2,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-06-23 20:40:31"},{"shpcod": "1050223961","cd_bar": "8801019310713","nm_bar": "4800해태오예스","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "과자류","nm_ryu3": "제과","pr_sale": 2900,"pr_buy": 2600,"qty_puc": 0,"last_puc": null,"last_sal": "2014-06-29","qty_avg_sal": 2,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-06-30 20:40:50"},{"shpcod": "1050223961","cd_bar": "8801019310737","nm_bar": "1500우유홈런볼","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "과자류","nm_ryu3": "제과","pr_sale": 1350,"pr_buy": 940,"qty_puc": 0,"last_puc": null,"last_sal": "2014-07-17","qty_avg_sal": 4,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-07-18 20:39:55"},{"shpcod": "1050223961","cd_bar": "8801019310744","nm_bar": "1500홈런치즈","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "과자류","nm_ryu3": "제과","pr_sale": 1350,"pr_buy": 940,"qty_puc": 0,"last_puc": null,"last_sal": "2014-08-15","qty_avg_sal": 2,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-08-16 20:40:59"},{"shpcod": "1050223961","cd_bar": "8801019310751","nm_bar": "4500해태홈런볼초코","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "미지정","nm_ryu2": "미지정","nm_ryu3": "미지정","pr_sale": 2900,"pr_buy": 0,"qty_puc": 0,"last_puc": null,"last_sal": "2014-09-24","qty_avg_sal": 4,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-09-25 20:39:04"},{"shpcod": "1050223961","cd_bar": "8801019409806","nm_bar": "아이스쿨껌","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "미지정","nm_ryu2": "미지정","nm_ryu3": "미지정","pr_sale": 3000,"pr_buy": 0,"qty_puc": 0,"last_puc": null,"last_sal": "2014-05-22","qty_avg_sal": 0,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-06-17 20:40:09"},{"shpcod": "1050223961","cd_bar": "8801019409820","nm_bar": "해태아카시아껌","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "미지정","nm_ryu2": "미지정","nm_ryu3": "미지정","pr_sale": 400,"pr_buy": 0,"qty_puc": 0,"last_puc": null,"last_sal": "2014-05-22","qty_avg_sal": 0,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-06-17 20:40:10"},{"shpcod": "1050223961","cd_bar": "8801019410017","nm_bar": "해태)아이스쿨레드껌1000","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "미지정","nm_ryu2": "미지정","nm_ryu3": "미지정","pr_sale": 1350,"pr_buy": 639,"qty_puc": 0,"last_puc": null,"last_sal": "2014-08-01","qty_avg_sal": 1,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-08-02 20:40:03"},{"shpcod": "1050223961","cd_bar": "8801019411366","nm_bar": "트렌스파워","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "미지정","nm_ryu2": "미지정","nm_ryu3": "미지정","pr_sale": 3500,"pr_buy": 0,"qty_puc": 0,"last_puc": null,"last_sal": "2014-09-11","qty_avg_sal": 2,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-09-12 20:40:45"},{"shpcod": "1050223961","cd_bar": "8801019508356","nm_bar": "1200누가바(골드)","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "아이스크림","nm_ryu3": "기타","pr_sale": 600,"pr_buy": 396,"qty_puc": 0,"last_puc": null,"last_sal": "2014-05-22","qty_avg_sal": 1,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-06-17 20:40:10"},{"shpcod": "1050223961","cd_bar": "8801019508721","nm_bar": "1200탱크보이","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "아이스크림","nm_ryu3": "기타","pr_sale": 600,"pr_buy": 396,"qty_puc": 0,"last_puc": null,"last_sal": "2014-08-16","qty_avg_sal": 4,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-08-17 20:41:01"},{"shpcod": "1050223961","cd_bar": "8801019508745","nm_bar": "1200폴라포포도","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "아이스크림","nm_ryu3": "기타","pr_sale": 600,"pr_buy": 396,"qty_puc": 0,"last_puc": null,"last_sal": "2014-08-26","qty_avg_sal": 5,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-08-27 20:40:59"},{"shpcod": "1050223961","cd_bar": "8801019603419","nm_bar": "1500맛동산","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "과자류","nm_ryu3": "제과","pr_sale": 1350,"pr_buy": 940,"qty_puc": 0,"last_puc": null,"last_sal": "2014-07-17","qty_avg_sal": 1,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-07-18 20:39:55"},{"shpcod": "1050223961","cd_bar": "8801019603426","nm_bar": "3000맛동산","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "과자류","nm_ryu3": "제과","pr_sale": 2700,"pr_buy": 1881,"qty_puc": 0,"last_puc": null,"last_sal": "2014-08-11","qty_avg_sal": 2,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-08-12 20:40:24"},{"shpcod": "1050223961","cd_bar": "8801019603440","nm_bar": "4800맛동산","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "과자류","nm_ryu3": "제과","pr_sale": 2900,"pr_buy": 2200,"qty_puc": 0,"last_puc": null,"last_sal": "2014-05-23","qty_avg_sal": 1,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-06-17 20:40:10"},{"shpcod": "1050223961","cd_bar": "8801019603495","nm_bar": "1500생생칩","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "과자류","nm_ryu3": "제과","pr_sale": 1200,"pr_buy": 940,"qty_puc": 0,"last_puc": null,"last_sal": "2014-06-14","qty_avg_sal": 1,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-06-17 20:40:10"},{"shpcod": "1050223961","cd_bar": "8801019603501","nm_bar": "3000생생감자짭짤","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "미지정","nm_ryu2": "미지정","nm_ryu3": "미지정","pr_sale": 1800,"pr_buy": 0,"qty_puc": 0,"last_puc": null,"last_sal": "2014-05-23","qty_avg_sal": 1,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-06-17 20:40:10"},{"shpcod": "1050223961","cd_bar": "8801019604072","nm_bar": "3000피자감자","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "미지정","nm_ryu2": "미지정","nm_ryu3": "미지정","pr_sale": 2000,"pr_buy": 0,"qty_puc": 0,"last_puc": null,"last_sal": "2014-06-14","qty_avg_sal": 1,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-06-17 20:40:10"},{"shpcod": "1050223961","cd_bar": "8801019605505","nm_bar": "오사쯔","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "미지정","nm_ryu2": "미지정","nm_ryu3": "미지정","pr_sale": 2000,"pr_buy": 0,"qty_puc": 0,"last_puc": null,"last_sal": "2014-06-22","qty_avg_sal": 1,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-06-23 20:40:32"},{"shpcod": "1050223961","cd_bar": "8801019606311","nm_bar": "1500떡뽁이","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "냉동/냉장식품","nm_ryu3": "냉장식품","pr_sale": 1350,"pr_buy": 940,"qty_puc": 0,"last_puc": null,"last_sal": "2014-08-19","qty_avg_sal": 2,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-08-20 20:40:49"},{"shpcod": "1050223961","cd_bar": "8801019606328","nm_bar": "오사쯔 고구마스낵","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "일차식품","nm_ryu2": "신상품","nm_ryu3": "신상품","pr_sale": 1350,"pr_buy": 940,"qty_puc": 0,"last_puc": null,"last_sal": "2014-07-03","qty_avg_sal": 1,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-07-04 20:40:28"},{"shpcod": "1050223961","cd_bar": "8801021105024","nm_bar": "OB라거캔맥주","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "미지정","nm_ryu2": "미지정","nm_ryu3": "미지정","pr_sale": 2200,"pr_buy": 0,"qty_puc": 0,"last_puc": null,"last_sal": "2014-08-01","qty_avg_sal": 12,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-08-02 20:40:03"},{"shpcod": "1050223961","cd_bar": "8801021213026","nm_bar": "버드와이져캔","spec_bar": "355ml","nm_cst": "미지정거래처","nm_ryu1": "주류","nm_ryu2": "맥주","nm_ryu3": "기타","pr_sale": 2200,"pr_buy": 1534,"qty_puc": 0,"last_puc": null,"last_sal": "2014-07-04","qty_avg_sal": 1,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-07-05 20:40:33"},{"shpcod": "1050223961","cd_bar": "8801030998075","nm_bar": "클라우드캔","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "미지정","nm_ryu2": "미지정","nm_ryu3": "미지정","pr_sale": 2500,"pr_buy": 2011,"qty_puc": 0,"last_puc": null,"last_sal": "2014-08-02","qty_avg_sal": 3,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-08-03 20:40:10"},{"shpcod": "1050223961","cd_bar": "8801030999034","nm_bar": "롯데)클라우드캔355mL","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "미지정","nm_ryu2": "미지정","nm_ryu3": "미지정","pr_sale": 1900,"pr_buy": 1446,"qty_puc": 0,"last_puc": null,"last_sal": "2014-08-02","qty_avg_sal": 2,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-08-03 20:40:10"},{"shpcod": "1050223961","cd_bar": "8801033000119","nm_bar": "베지밀에이/190ml","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "음료류","nm_ryu3": "음료","pr_sale": 1000,"pr_buy": 700,"qty_puc": 0,"last_puc": null,"last_sal": "2014-05-22","qty_avg_sal": 1,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-06-17 20:40:10"},{"shpcod": "1050223961","cd_bar": "8801033000126","nm_bar": "베지밀병","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "음료류","nm_ryu3": "음료","pr_sale": 1000,"pr_buy": 700,"qty_puc": 0,"last_puc": null,"last_sal": "2014-05-22","qty_avg_sal": 1,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-06-17 20:40:10"},{"shpcod": "1050223961","cd_bar": "8801033770333","nm_bar": "베지밀에이1000ml","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "유제품류","nm_ryu3": "기타","pr_sale": 2500,"pr_buy": 1800,"qty_puc": 0,"last_puc": null,"last_sal": "2014-05-22","qty_avg_sal": 1,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-06-17 20:40:10"},{"shpcod": "1050223961","cd_bar": "8801033770357","nm_bar": "베지밀B1000ml","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "유제품류","nm_ryu3": "기타","pr_sale": 2500,"pr_buy": 1800,"qty_puc": 0,"last_puc": null,"last_sal": "2014-05-22","qty_avg_sal": 1,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-06-17 20:40:10"},{"shpcod": "1050223961","cd_bar": "8801037001808","nm_bar": "보리차/150G","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "차류","nm_ryu3": "차류","pr_sale": 1300,"pr_buy": 800,"qty_puc": 0,"last_puc": null,"last_sal": "2014-07-22","qty_avg_sal": 1,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-07-23 20:39:55"},{"shpcod": "1050223961","cd_bar": "8801037006919","nm_bar": "보리차/300G","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "차류","nm_ryu3": "차류","pr_sale": 2200,"pr_buy": 1590,"qty_puc": 0,"last_puc": null,"last_sal": "2014-07-22","qty_avg_sal": 2,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-07-23 20:39:55"},{"shpcod": "1050223961","cd_bar": "8801037019667","nm_bar": "맥심모카/100T","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "차류","nm_ryu3": "차류","pr_sale": 12500,"pr_buy": 10000,"qty_puc": 0,"last_puc": null,"last_sal": "2014-09-05","qty_avg_sal": 2,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-09-06 20:40:02"},{"shpcod": "1050223961","cd_bar": "8801037040791","nm_bar": "아몬드그래놀라350g","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "첨가류","nm_ryu3": "첨가류","pr_sale": 4700,"pr_buy": 3450,"qty_puc": 0,"last_puc": null,"last_sal": "2014-06-29","qty_avg_sal": 1,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-06-30 20:40:50"},{"shpcod": "1050223961","cd_bar": "8801037046298","nm_bar": "동서라이트업270g","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "과자류","nm_ryu3": "제과","pr_sale": 4500,"pr_buy": 3380,"qty_puc": 0,"last_puc": null,"last_sal": "2014-06-30","qty_avg_sal": 1,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-07-01 20:40:07"},{"shpcod": "1050223961","cd_bar": "8801037087543","nm_bar": "티오피마스터블렌드275ml","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "음료류","nm_ryu3": "음료","pr_sale": 1600,"pr_buy": 1180,"qty_puc": 0,"last_puc": null,"last_sal": "2014-06-14","qty_avg_sal": 1,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-06-17 20:40:11"},{"shpcod": "1050223961","cd_bar": "8801038560014","nm_bar": "도루코T3날(3중날)면도기","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "잡화","nm_ryu2": "생활잡화","nm_ryu3": "잡화","pr_sale": 500,"pr_buy": 300,"qty_puc": 0,"last_puc": null,"last_sal": "2014-07-04","qty_avg_sal": 1,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-07-05 20:40:33"},{"shpcod": "1050223961","cd_bar": "8801039202395","nm_bar": "해표식용유0.9","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "첨가류","nm_ryu3": "첨가류","pr_sale": 3400,"pr_buy": 2100,"qty_puc": 0,"last_puc": null,"last_sal": "2014-06-29","qty_avg_sal": 1,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-06-30 20:40:50"},{"shpcod": "1050223961","cd_bar": "8801043004275","nm_bar": "멸치칼국수","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "가공식품","nm_ryu3": "기타","pr_sale": 800,"pr_buy": 587,"qty_puc": 0,"last_puc": null,"last_sal": "2014-06-29","qty_avg_sal": 1,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-06-30 20:40:51"},{"shpcod": "1050223961","cd_bar": "8801043014731","nm_bar": "농심안성탕면","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "면류","nm_ryu3": "기타","pr_sale": 650,"pr_buy": 486,"qty_puc": 0,"last_puc": null,"last_sal": "2014-09-06","qty_avg_sal": 2,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-09-07 20:40:08"},{"shpcod": "1050223961","cd_bar": "8801043014809","nm_bar": "농심신라면","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "면류","nm_ryu3": "기타","pr_sale": 700,"pr_buy": 546,"qty_puc": 0,"last_puc": null,"last_sal": "2014-07-20","qty_avg_sal": 5,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-07-21 20:40:25"},{"shpcod": "1050223961","cd_bar": "8801043014830","nm_bar": "농심신라면5입","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "면류","nm_ryu3": "기타","pr_sale": 3300,"pr_buy": 2733,"qty_puc": 0,"last_puc": null,"last_sal": "2014-09-25","qty_avg_sal": 3,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-09-26 20:39:11"},{"shpcod": "1050223961","cd_bar": "8801043014984","nm_bar": "농심너구리","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "면류","nm_ryu3": "기타","pr_sale": 800,"pr_buy": 624,"qty_puc": 0,"last_puc": null,"last_sal": "2014-09-25","qty_avg_sal": 6,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-09-26 20:39:11"},{"shpcod": "1050223961","cd_bar": "8801043015011","nm_bar": "농심너구리5입","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "면류","nm_ryu3": "기타","pr_sale": 3800,"pr_buy": 3118,"qty_puc": 0,"last_puc": null,"last_sal": "2014-08-15","qty_avg_sal": 2,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-08-16 20:40:59"},{"shpcod": "1050223961","cd_bar": "8801043015110","nm_bar": "농심오징어짬뽕","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "면류","nm_ryu3": "기타","pr_sale": 800,"pr_buy": 660,"qty_puc": 0,"last_puc": null,"last_sal": "2014-09-25","qty_avg_sal": 4,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-09-26 20:39:12"},{"shpcod": "1050223961","cd_bar": "8801043015226","nm_bar": "농심짜파게티","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "면류","nm_ryu3": "기타","pr_sale": 800,"pr_buy": 660,"qty_puc": 0,"last_puc": null,"last_sal": "2014-07-03","qty_avg_sal": 2,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-07-04 20:40:28"},{"shpcod": "1050223961","cd_bar": "8801043015264","nm_bar": "농심올리브짜파게티5입","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "면류","nm_ryu3": "기타","pr_sale": 4000,"pr_buy": 3135,"qty_puc": 0,"last_puc": null,"last_sal": "2014-08-30","qty_avg_sal": 4,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-08-31 20:41:27"},{"shpcod": "1050223961","cd_bar": "8801043015349","nm_bar": "농심무파마","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "면류","nm_ryu3": "기타","pr_sale": 950,"pr_buy": 759,"qty_puc": 0,"last_puc": null,"last_sal": "2014-07-03","qty_avg_sal": 2,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-07-04 20:40:28"},{"shpcod": "1050223961","cd_bar": "8801043015394","nm_bar": "농심사천짜파게티","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "면류","nm_ryu3": "기타","pr_sale": 950,"pr_buy": 765,"qty_puc": 0,"last_puc": null,"last_sal": "2014-06-29","qty_avg_sal": 4,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-06-30 20:40:51"},{"shpcod": "1050223961","cd_bar": "8801043015653","nm_bar": "농심육개장컵","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "면류","nm_ryu3": "기타","pr_sale": 750,"pr_buy": 588,"qty_puc": 0,"last_puc": null,"last_sal": "2014-08-15","qty_avg_sal": 2,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-08-16 20:41:00"},{"shpcod": "1050223961","cd_bar": "8801043015929","nm_bar": "김치큰사발","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "면류","nm_ryu3": "기타","pr_sale": 950,"pr_buy": 764,"qty_puc": 0,"last_puc": null,"last_sal": "2014-07-04","qty_avg_sal": 1,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-07-05 20:40:33"},{"shpcod": "1050223961","cd_bar": "8801043016025","nm_bar": "농심육개장큰사발","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "면류","nm_ryu3": "기타","pr_sale": 950,"pr_buy": 764,"qty_puc": 0,"last_puc": null,"last_sal": "2014-07-04","qty_avg_sal": 1,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-07-05 20:40:33"},{"shpcod": "1050223961","cd_bar": "8801043016070","nm_bar": "농심튀김우동큰사발","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "면류","nm_ryu3": "기타","pr_sale": 950,"pr_buy": 764,"qty_puc": 0,"last_puc": null,"last_sal": "2014-07-04","qty_avg_sal": 1,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-07-05 20:40:33"},{"shpcod": "1050223961","cd_bar": "8801043017602","nm_bar": "농심너구리큰사발","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "면류","nm_ryu3": "기타","pr_sale": 1350,"pr_buy": 1085,"qty_puc": 0,"last_puc": null,"last_sal": "2014-07-04","qty_avg_sal": 1,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-07-05 20:40:33"},{"shpcod": "1050223961","cd_bar": "8801043020657","nm_bar": "벌집피자83g","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "과자류","nm_ryu3": "제과","pr_sale": 1100,"pr_buy": 817,"qty_puc": 0,"last_puc": null,"last_sal": "2014-05-23","qty_avg_sal": 1,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-06-17 20:40:11"},{"shpcod": "1050223961","cd_bar": "8801043026253","nm_bar": "포스틱84G","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "미지정","nm_ryu2": "미지정","nm_ryu3": "미지정","pr_sale": 1200,"pr_buy": 0,"qty_puc": 0,"last_puc": null,"last_sal": "2014-07-03","qty_avg_sal": 1,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-07-04 20:40:29"},{"shpcod": "1050223961","cd_bar": "8801043026307","nm_bar": "1300농심바나나킥","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "과자류","nm_ryu3": "제과","pr_sale": 1200,"pr_buy": 889,"qty_puc": 0,"last_puc": null,"last_sal": "2014-07-03","qty_avg_sal": 2,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-07-04 20:40:29"},{"shpcod": "1050223961","cd_bar": "8801043026369","nm_bar": "1100농심매운새우깡","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "과자류","nm_ryu3": "제과","pr_sale": 1000,"pr_buy": 740,"qty_puc": 0,"last_puc": null,"last_sal": "2014-07-04","qty_avg_sal": 1,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-07-05 20:40:34"},{"shpcod": "1050223961","cd_bar": "8801043026383","nm_bar": "자갈치","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "미지정","nm_ryu2": "미지정","nm_ryu3": "미지정","pr_sale": 1200,"pr_buy": 0,"qty_puc": 0,"last_puc": null,"last_sal": "2014-08-15","qty_avg_sal": 1,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-08-16 20:41:00"},{"shpcod": "1050223961","cd_bar": "8801043026482","nm_bar": "1300농심오징어집","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "과자류","nm_ryu3": "제과","pr_sale": 1200,"pr_buy": 889,"qty_puc": 0,"last_puc": null,"last_sal": "2014-07-04","qty_avg_sal": 1,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-07-05 20:40:34"},{"shpcod": "1050223961","cd_bar": "8801043026567","nm_bar": "1100농심새우깡","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "과자류","nm_ryu3": "제과","pr_sale": 1000,"pr_buy": 740,"qty_puc": 0,"last_puc": null,"last_sal": "2014-08-19","qty_avg_sal": 2,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-08-20 20:40:49"},{"shpcod": "1050223961","cd_bar": "8801043026703","nm_bar": "1300농심꿀꽈배기","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "과자류","nm_ryu3": "제과","pr_sale": 1200,"pr_buy": 889,"qty_puc": 0,"last_puc": null,"last_sal": "2014-05-22","qty_avg_sal": 1,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-06-17 20:40:11"},{"shpcod": "1050223961","cd_bar": "8801043026802","nm_bar": "4000포스틱지퍼/대","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "미지정","nm_ryu2": "미지정","nm_ryu3": "미지정","pr_sale": 3500,"pr_buy": 0,"qty_puc": 0,"last_puc": null,"last_sal": "2014-09-24","qty_avg_sal": 1,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-09-25 20:39:04"},{"shpcod": "1050223961","cd_bar": "8801043026826","nm_bar": "조청유과(대)","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "미지정","nm_ryu2": "미지정","nm_ryu3": "미지정","pr_sale": 3500,"pr_buy": 2783,"qty_puc": 0,"last_puc": null,"last_sal": "2014-09-11","qty_avg_sal": 1,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-09-12 20:40:45"},{"shpcod": "1050223961","cd_bar": "8801043026840","nm_bar": "4000자갈치지퍼대","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "미지정","nm_ryu2": "미지정","nm_ryu3": "미지정","pr_sale": 3500,"pr_buy": 0,"qty_puc": 0,"last_puc": null,"last_sal": "2014-09-24","qty_avg_sal": 2,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-09-25 20:39:04"},{"shpcod": "1050223961","cd_bar": "8801043026888","nm_bar": "4000꿀꽈배기","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "미지정","nm_ryu2": "미지정","nm_ryu3": "미지정","pr_sale": 3500,"pr_buy": 0,"qty_puc": 0,"last_puc": null,"last_sal": "2014-09-11","qty_avg_sal": 2,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-09-12 20:40:45"},{"shpcod": "1050223961","cd_bar": "8801043027526","nm_bar": "1300농심아이스콘","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "미지정","nm_ryu2": "미지정","nm_ryu3": "미지정","pr_sale": 1200,"pr_buy": 0,"qty_puc": 0,"last_puc": null,"last_sal": "2014-07-17","qty_avg_sal": 1,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-07-18 20:39:55"},{"shpcod": "1050223961","cd_bar": "8801045122120","nm_bar": "돈까스소스/475G","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "첨가류","nm_ryu3": "첨가류","pr_sale": 2200,"pr_buy": 1584,"qty_puc": 0,"last_puc": null,"last_sal": "2014-06-27","qty_avg_sal": 1,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-06-28 20:40:51"},{"shpcod": "1050223961","cd_bar": "8801045291307","nm_bar": "3분짜장/200G","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "즉석식품","nm_ryu3": "기타","pr_sale": 1500,"pr_buy": 1100,"qty_puc": 0,"last_puc": null,"last_sal": "2014-06-27","qty_avg_sal": 2,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-06-28 20:40:51"},{"shpcod": "1050223961","cd_bar": "8801045295206","nm_bar": "3분햄버거/140G","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "즉석식품","nm_ryu3": "기타","pr_sale": 1800,"pr_buy": 1320,"qty_puc": 0,"last_puc": null,"last_sal": "2014-06-27","qty_avg_sal": 1,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-06-28 20:40:51"},{"shpcod": "1050223961","cd_bar": "8801045320014","nm_bar": "3분스위트칠리치킨150g","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "즉석식품","nm_ryu3": "기타","pr_sale": 1700,"pr_buy": 1276,"qty_puc": 0,"last_puc": null,"last_sal": "2014-06-27","qty_avg_sal": 1,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-06-28 20:40:51"},{"shpcod": "1050223961","cd_bar": "8801045322315","nm_bar": "3분탕수완자/175G","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "즉석식품","nm_ryu3": "기타","pr_sale": 1900,"pr_buy": 1386,"qty_puc": 0,"last_puc": null,"last_sal": "2014-06-27","qty_avg_sal": 1,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-06-28 20:40:51"},{"shpcod": "1050223961","cd_bar": "8801045440408","nm_bar": "오뚜기참기름(병)/320ML","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "첨가류","nm_ryu3": "첨가류","pr_sale": 5800,"pr_buy": 3200,"qty_puc": 0,"last_puc": null,"last_sal": "2014-06-11","qty_avg_sal": 1,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-06-17 20:40:11"},{"shpcod": "1050223961","cd_bar": "8801045440545","nm_bar": "오뚜기고소한참기름(캔)/500ML","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "첨가류","nm_ryu3": "첨가류","pr_sale": 9700,"pr_buy": 7590,"qty_puc": 0,"last_puc": null,"last_sal": "2014-06-11","qty_avg_sal": 1,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-06-17 20:40:11"},{"shpcod": "1050223961","cd_bar": "8801045491400","nm_bar": "옛날국수(소면)/900G","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "면류","nm_ryu3": "기타","pr_sale": 2900,"pr_buy": 1800,"qty_puc": 0,"last_puc": null,"last_sal": "2014-09-11","qty_avg_sal": 1,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-09-12 20:40:46"},{"shpcod": "1050223961","cd_bar": "8801045522265","nm_bar": "진라면멀티매운맛","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "면류","nm_ryu3": "기타","pr_sale": 3000,"pr_buy": 2475,"qty_puc": 0,"last_puc": null,"last_sal": "2014-06-27","qty_avg_sal": 1,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-06-28 20:40:52"},{"shpcod": "1050223961","cd_bar": "8801045560076","nm_bar": "뿌셔뿌셔 바베큐맛90g","spec_bar": "","nm_cst": "미지정거래처","nm_ryu1": "식품","nm_ryu2": "면류","nm_ryu3": "기타","pr_sale": 650,"pr_buy": 510,"qty_puc": 0,"last_puc": null,"last_sal": "2014-08-19","qty_avg_sal": 3,"ds_stk": 0,"ds_tax": 0,"ymd_send": "2014-08-20 20:40:50"}];
			break;
		case 'cascading':
			data = [{"USER_SABUN": "100000","USER_NAME": "박명신","USER_BEL": "U","USER_DEP": "020","USER_PON": "016-444-9060","USER_EMAIL": "foreignexchangedept1@yahoo.com.hk","USER_ADDR": "대전시 대덕구 덕암동 43-2","USER_ADDR1": "01","USER_ADDR2": "01001","USER_ADDR3": "0100101","USER_STARTDATE": "2008-06-16","USER_GRA": "C","USER_LIC": "C","USER_GUBUN": "A","USER_SEX": "male","resignation_fg": "0","USER_energy": 71,"ADDR1": "01","ADDR2": "01001","ADDR3": "0100101"},{"USER_SABUN": "100001","USER_NAME": "소효준","USER_BEL": "U","USER_DEP": "001","USER_PON": "016-460-6799","USER_EMAIL": "williamsgeorgeatmcarddept1@gmail.com","USER_ADDR": "대전시 동구 중동 8-13","USER_ADDR1": "02","USER_ADDR2": "02001","USER_ADDR3": "0200101","USER_STARTDATE": "2008-08-01","USER_GRA": "C","USER_LIC": "C","USER_GUBUN": "A","USER_SEX": "male","resignation_fg": "0","USER_energy": 88,"ADDR1": "02","ADDR2": "02001","ADDR3": "0200101"},{"USER_SABUN": "100002","USER_NAME": "최석근","USER_BEL": "U","USER_DEP": "020","USER_PON": "010-4225-9244","USER_EMAIL": "ericlim220@yahoo.com","USER_ADDR": "대전시 동구 삼성1동 283-48 신신빌딩2층","USER_ADDR1": "03","USER_ADDR2": "03001","USER_ADDR3": "0300102","USER_STARTDATE": "2008-08-01","USER_GRA": "C","USER_LIC": "C","USER_GUBUN": "A","USER_SEX": "male","resignation_fg": "0","USER_energy": 80,"ADDR1": "03","ADDR2": "03001","ADDR3": "0300102"},{"USER_SABUN": "100003","USER_NAME": "양희철","USER_BEL": "O","USER_DEP": "040","USER_PON": "010-4592-5090","USER_EMAIL": "mr.paul.harry08@gmail.com","USER_ADDR": "대전시 동구 용전동 13-2 상도빌딩 6층","USER_ADDR1": "01","USER_ADDR2": "01002","USER_ADDR3": "0100201","USER_STARTDATE": "2008-10-01","USER_GRA": "C","USER_LIC": "D","USER_GUBUN": "A","USER_SEX": "female","resignation_fg": "0","USER_energy": 75,"ADDR1": "01","ADDR2": "01002","ADDR3": "0100201"},{"USER_SABUN": "100004","USER_NAME": "최치영","USER_BEL": "U","USER_DEP": "003","USER_PON": "010-9402-2177","USER_EMAIL": "katblix4@gmail.com","USER_ADDR": "대전시 유성구 노은동 561-2","USER_ADDR1": "02","USER_ADDR2": "02001","USER_ADDR3": "0200102","USER_STARTDATE": "2008-11-01","USER_GRA": "A","USER_LIC": "AA","USER_GUBUN": "A","USER_SEX": "male","resignation_fg": "1","USER_energy": 82,"ADDR1": "02","ADDR2": "02001","ADDR3": "0200102"},{"USER_SABUN": "100005","USER_NAME": "장희재","USER_BEL": "U","USER_DEP": "040","USER_PON": "011-451-8935","USER_EMAIL": "felica4uu@hotmail.com","USER_ADDR": "대전시 유성구 구성동 373-1","USER_ADDR1": "03","USER_ADDR2": "03002","USER_ADDR3": "0300201","USER_STARTDATE": "2009-01-01","USER_GRA": "B","USER_LIC": "B","USER_GUBUN": "A","USER_SEX": "male","resignation_fg": "0","USER_energy": 64,"ADDR1": "03","ADDR2": "03002","ADDR3": "0300201"},{"USER_SABUN": "100006","USER_NAME": "김상현","USER_BEL": "O","USER_DEP": "003","USER_PON": "011-255-2173","USER_EMAIL": "j.nomvete30@workmail.co.za","USER_ADDR": "대전시 동구 삼성동 273-15","USER_ADDR1": "01","USER_ADDR2": "01003","USER_ADDR3": "0100301","USER_STARTDATE": "2009-01-01","USER_GRA": "C","USER_LIC": null,"USER_GUBUN": "A","USER_SEX": "male","resignation_fg": "0","USER_energy": 50,"ADDR1": "01","ADDR2": "01003","ADDR3": "0100301"},{"USER_SABUN": "100007","USER_NAME": "김판수","USER_BEL": "O","USER_DEP": "030","USER_PON": "011-308-1789","USER_EMAIL": "paul_ku2@hotmail.com","USER_ADDR": "대전시 동구 삼성동 273-1","USER_ADDR1": "01","USER_ADDR2": "01003","USER_ADDR3": "0100302","USER_STARTDATE": "2009-02-01","USER_GRA": "C","USER_LIC": null,"USER_GUBUN": "A","USER_SEX": "male","resignation_fg": "0","USER_energy": 48,"ADDR1": "01","ADDR2": "01003","ADDR3": "0100302"},{"USER_SABUN": "100008","USER_NAME": "김성한","USER_BEL": "O","USER_DEP": "040","USER_PON": "010-4412-1282","USER_EMAIL": "davis_mark1@outlook.com","USER_ADDR": "대전시 서구 만년동 194","USER_ADDR1": "02","USER_ADDR2": "02002","USER_ADDR3": "0200201","USER_STARTDATE": "2009-02-01","USER_GRA": "C","USER_LIC": null,"USER_GUBUN": "A","USER_SEX": "female","resignation_fg": "0","USER_energy": 98,"ADDR1": "02","ADDR2": "02002","ADDR3": "0200201"},{"USER_SABUN": "100009","USER_NAME": "이학균","USER_BEL": "O","USER_DEP": "040","USER_PON": "011-421-1755","USER_EMAIL": "sgtamyrhodes@qq.com","USER_ADDR": "대전시 서구 갈마동 1280 금강빌딩 1층","USER_ADDR1": "02","USER_ADDR2": "02001","USER_ADDR3": "0200101","USER_STARTDATE": "2009-02-25","USER_GRA": "C","USER_LIC": null,"USER_GUBUN": "A","USER_SEX": "female","resignation_fg": "0","USER_energy": 99,"ADDR1": "02","ADDR2": "02001","ADDR3": "0200101"},{"USER_SABUN": "100010","USER_NAME": "이태영","USER_BEL": "O","USER_DEP": "050","USER_PON": "010-5401-0734","USER_EMAIL": "dhldelivery@pochta.com","USER_ADDR": "대전시 동구 정동 36-1","USER_ADDR1": "02","USER_ADDR2": "02003","USER_ADDR3": "0200301","USER_STARTDATE": "2009-12-21","USER_GRA": "B","USER_LIC": "B","USER_GUBUN": "B","USER_SEX": "female","resignation_fg": "0","USER_energy": 78,"ADDR1": "02","ADDR2": "02003","ADDR3": "0200301"},{"USER_SABUN": "100011","USER_NAME": "김정욱","USER_BEL": "U","USER_DEP": "050","USER_PON": "010-5452-6094","USER_EMAIL": "arfinances@live.com","USER_ADDR": "대전시 동구 중동 1-20번지 2층","USER_ADDR1": "03","USER_ADDR2": "03002","USER_ADDR3": "0300201","USER_STARTDATE": "2010-01-01","USER_GRA": "C","USER_LIC": null,"USER_GUBUN": "A","USER_SEX": "female","resignation_fg": "0","USER_energy": 50,"ADDR1": "03","ADDR2": "03002","ADDR3": "0300201"},{"USER_SABUN": "100012","USER_NAME": "신경호","USER_BEL": "O","USER_DEP": "040","USER_PON": "011-433-1175","USER_EMAIL": "help202@outlook.dk","USER_ADDR": "대전시 동구 중동 1-11","USER_ADDR1": "03","USER_ADDR2": "03003","USER_ADDR3": "0300302","USER_STARTDATE": "2010-01-01","USER_GRA": "C","USER_LIC": null,"USER_GUBUN": "A","USER_SEX": "female","resignation_fg": "0","USER_energy": 50,"ADDR1": "03","ADDR2": "03003","ADDR3": "0300302"},{"USER_SABUN": "100013","USER_NAME": "고원석","USER_BEL": "O","USER_DEP": "040","USER_PON": "010-3746-4693","USER_EMAIL": "mrs.gloriamackenie@outlook.com","USER_ADDR": "대전시 동구 중동 1-2","USER_ADDR1": "03","USER_ADDR2": "03001","USER_ADDR3": "0300101","USER_STARTDATE": "2010-01-01","USER_GRA": "C","USER_LIC": null,"USER_GUBUN": "A","USER_SEX": "male","resignation_fg": "0","USER_energy": 50,"ADDR1": "03","ADDR2": "03001","ADDR3": "0300101"},{"USER_SABUN": "100014","USER_NAME": "최청림","USER_BEL": "O","USER_DEP": "050","USER_PON": "010-7791-3140","USER_EMAIL": "shand_lee@yahoo.com.hk","USER_ADDR": "대전시 동구 삼성동 277-14","USER_ADDR1": "01","USER_ADDR2": "01001","USER_ADDR3": "0100104","USER_STARTDATE": "2010-01-01","USER_GRA": "C","USER_LIC": null,"USER_GUBUN": "A","USER_SEX": "male","resignation_fg": "0","USER_energy": 50,"ADDR1": "01","ADDR2": "01001","ADDR3": "0100104"},{"USER_SABUN": "100015","USER_NAME": "박형태","USER_BEL": "U","USER_DEP": "050","USER_PON": "010-3460-0144","USER_EMAIL": "franklinosayandescott@gmail.com","USER_ADDR": "대전시 동구 삼성동 126-6  ","USER_ADDR1": "01","USER_ADDR2": "01002","USER_ADDR3": "0100201","USER_STARTDATE": "2010-03-01","USER_GRA": "C","USER_LIC": null,"USER_GUBUN": "A","USER_SEX": "male","resignation_fg": "0","USER_energy": 50,"ADDR1": "01","ADDR2": "01002","ADDR3": "0100201"},{"USER_SABUN": "100016","USER_NAME": "김민수","USER_BEL": "U","USER_DEP": "040","USER_PON": "011-9413-1212","USER_EMAIL": "pmark5193@gmail.com","USER_ADDR": "대전시 동구 정동 39-43","USER_ADDR1": "01","USER_ADDR2": "01002","USER_ADDR3": "0100203","USER_STARTDATE": "2010-04-01","USER_GRA": "C","USER_LIC": null,"USER_GUBUN": "A","USER_SEX": "female","resignation_fg": "0","USER_energy": 50,"ADDR1": "01","ADDR2": "01002","ADDR3": "0100203"},{"USER_SABUN": "100017","USER_NAME": "정충석","USER_BEL": "U","USER_DEP": "030","USER_PON": "010-3447-2181","USER_EMAIL": "westernunion1233@yahoo.fr","USER_ADDR": "대전시 동구 중동 9-5","USER_ADDR1": "01","USER_ADDR2": "01001","USER_ADDR3": "0100104","USER_STARTDATE": "2010-04-26","USER_GRA": "B","USER_LIC": "","USER_GUBUN": "A","USER_SEX": "male","resignation_fg": "0","USER_energy": 50,"ADDR1": "01","ADDR2": "01001","ADDR3": "0100104"},{"USER_SABUN": "100018","USER_NAME": "김재민","USER_BEL": "U","USER_DEP": "040","USER_PON": "011-403-1255","USER_EMAIL": "iwumt2015@gmail.com","USER_ADDR": "대전시 동구 삼성1동 271-10","USER_ADDR1": "02","USER_ADDR2": "02004","USER_ADDR3": "0200401","USER_STARTDATE": "2010-09-27","USER_GRA": "B","USER_LIC": "","USER_GUBUN": "A","USER_SEX": "male","resignation_fg": "0","USER_energy": 50,"ADDR1": "02","ADDR2": "02004","ADDR3": "0200401"},{"USER_SABUN": "100019","USER_NAME": "양혁진","USER_BEL": "U","USER_DEP": "020","USER_PON": "011-409-3866","USER_EMAIL": "mathewgdfoundation@qq.com","USER_ADDR": "대전시 유성구 어은동 116-2","USER_ADDR1": "02","USER_ADDR2": "02001","USER_ADDR3": "0200101","USER_STARTDATE": "2010-12-01","USER_GRA": "C","USER_LIC": null,"USER_GUBUN": "A","USER_SEX": "male","resignation_fg": "0","USER_energy": 50,"ADDR1": "02","ADDR2": "02001","ADDR3": "0200101"},{"USER_SABUN": "100020","USER_NAME": "박종필","USER_BEL": "U","USER_DEP": "020","USER_PON": "011-406-2778","USER_EMAIL": "johnpaulpatrick_77@hotmail.com","USER_ADDR": "대전시 동구 삼성2동 319-24","USER_ADDR1": "03","USER_ADDR2": "03004","USER_ADDR3": "0300402","USER_STARTDATE": "2011-03-01","USER_GRA": "C","USER_LIC": null,"USER_GUBUN": "A","USER_SEX": "male","resignation_fg": "0","USER_energy": 50,"ADDR1": "03","ADDR2": "03004","ADDR3": "0300402"},{"USER_SABUN": "100021","USER_NAME": "박상훈","USER_BEL": "U","USER_DEP": "040","USER_PON": "016-462-0133","USER_EMAIL": "davidmike_201@yahoo.co.jp","USER_ADDR": "대전시 동구 삼성2동 286-40","USER_ADDR1": "03","USER_ADDR2": "03005","USER_ADDR3": "0300502","USER_STARTDATE": "2011-04-01","USER_GRA": "B","USER_LIC": "","USER_GUBUN": "A","USER_SEX": "male","resignation_fg": "0","USER_energy": 50,"ADDR1": "03","ADDR2": "03005","ADDR3": "0300502"},{"USER_SABUN": "100022","USER_NAME": "박경환","USER_BEL": "U","USER_DEP": "050","USER_PON": "010-4408-5980","USER_EMAIL": "detailsunitednations@gmail.com","USER_ADDR": "대전시 동구 중동 9-6","USER_ADDR1": "03","USER_ADDR2": "03001","USER_ADDR3": "0300101","USER_STARTDATE": "2011-04-01","USER_GRA": "C","USER_LIC": "01","USER_GUBUN": "A","USER_SEX": "male","resignation_fg": "0","USER_energy": 50,"ADDR1": "03","ADDR2": "03001","ADDR3": "0300101"},{"USER_SABUN": "100023","USER_NAME": "최창진","USER_BEL": "U","USER_DEP": "050","USER_PON": "011-405-6688","USER_EMAIL": "newgovernorcbn2014@gmail.com","USER_ADDR": "대전시 동구 삼성1동 291-11","USER_ADDR1": "01","USER_ADDR2": "01003","USER_ADDR3": "0100302","USER_STARTDATE": "2011-04-01","USER_GRA": "C","USER_LIC": null,"USER_GUBUN": "A","USER_SEX": "male","resignation_fg": "0","USER_energy": 50,"ADDR1": "01","ADDR2": "01003","ADDR3": "0100302"},{"USER_SABUN": "100024","USER_NAME": "박래훈","USER_BEL": "U","USER_DEP": "050","USER_PON": "018-278-6333","USER_EMAIL": "gordch101@yahoo.com.hk","USER_ADDR": "대전시 서구 문정로 170 7-13","USER_ADDR1": "02","USER_ADDR2": "02002","USER_ADDR3": "0200201","USER_STARTDATE": "2011-04-01","USER_GRA": "C","USER_LIC": null,"USER_GUBUN": "A","USER_SEX": "male","resignation_fg": "0","USER_energy": 50,"ADDR1": "02","ADDR2": "02002","ADDR3": "0200201"},{"USER_SABUN": "100025","USER_NAME": "윤성민","USER_BEL": "U","USER_DEP": "040","USER_PON": "011-458-4608","USER_EMAIL": "Petersimonsbacka@swedishmedtech.se.com","USER_ADDR": "대전시 동구 삼성동 284-8","USER_ADDR1": "03","USER_ADDR2": "03005","USER_ADDR3": "0300501","USER_STARTDATE": "2011-04-04","USER_GRA": "C","USER_LIC": null,"USER_GUBUN": "A","USER_SEX": "female","resignation_fg": "0","USER_energy": 50,"ADDR1": "03","ADDR2": "03005","ADDR3": "0300501"}];
			break;
		case 'bigData':
			var names = new Array("이강원","박진화","이소영","김명환","김남순","김만중","이초이","엄기헌","곽영석","유연희","이재균","박명자","김영곤","허병활","김태근","김미경","정재원","이영복","김도영","김종율","정동환","이한성","안정균","이광호","황정석","김덕원","이성철","한병수","천확삼","안대호","김귀애","손봉한","유재훈","박진화","김영숙","김성희","이미숙","이두성","오현숙","박기덕","박진화","이현서","정갑균","조성재","조명호","이종진","김준식","임영근","조정희","김갑중","양우승","송상민","김계환","신수인","강민곤","장연수","박현배","윤환","박민길","염규홍","정민우","김진우","최형모","이은애","이태우","임정태","이수진","지영식","장삼현","오원기","박성자","유승수","김대성","박성자","정정용","이미옥","김혜옥","유호근","정선영","정재영","정윤호","우주동","유정희","김준호","한충언","김동민","김창환","정수지","김정희","이천희","황정환","박필입","박순분","정신영","오성현","최옥화","박영숙","이한성","유석원","장이준");
			var addresss = new Array("서울특별시 관악구 봉천동","경기도 광주시 퇴촌면 관음리","경기도 고양시 일산서구 대화동","충청북도 제천시 하소동","경기도 부천시 오정구 고강동","서울특별시 양천구 목동","서울특별시 관악구 신림동","서울특별시 관악구 봉천동","서울특별시 양천구 목동","서울특별시 은평구 응암동","서울특별시 중구 신당동","서울특별시 관악구 신림동","서울특별시 관악구 신림동","대구광역시 북구 산격동","서울특별시 관악구 신림동","서울특별시 강서구 화곡동","대구광역시 달서구 감삼동","서울특별시 금천구 시흥동","서울특별시 금천구 독산동","서울특별시 영등포구 여의도동","강원도 원주시 태장동","서울특별시 관악구 신림동","서울특별시 동작구 상도동","인천광역시 부평구 부개동","경기도 성남시 분당구 정자동","경기도 부천시 오정구 원종동","인천광역시 남구 주안동","경기도 부천시 원미구 원미동","서울특별시 양천구 목동","경기도 성남시 중원구 상대원동","인천광역시 연수구 청학동","인천광역시 서구 검암동","서울특별시 관악구 봉천동","경기도 광주시 퇴촌면 관음리","서울특별시 관악구 봉천동","서울특별시 영등포구 대림동","서울특별시 관악구 봉천동","서울특별시 관악구 봉천동","서울특별시 구로구 고척동","경기도 부천시 원미구 역곡동","경기도 광주시 퇴촌면 관음리","서울특별시 강서구 방화동","경기도 안양시 동안구 관양동","경기도 남양주시 오남읍 오남리","경기도 평택시 이충동","경기도 의정부시 의정부동","경기도 평택시 진위면 견산리","서울특별시 구로구 궁동","서울특별시 관악구 봉천동","경기도 부천시 소사구 심곡본동","서울특별시 관악구 봉천동","서울특별시 관악구 신림동","충청남도 당진군 당진읍 원당리","서울특별시 관악구 신림동","서울특별시 강서구 화곡동","경기도 성남시 중원구 은행동","서울특별시 금천구 독산동","서울특별시 동작구 사당동","서울특별시 강동구 천호동","충청남도 금산군 금산읍 하옥리","서울특별시 동대문구 휘경동","서울특별시 동작구 상도동","서울특별시 금천구 시흥동","서울특별시 종로구 익선동","충청북도 충주시 연수동");
			var products = new Array("IPhone 5S", "Galaxy S5", "IPad Air", "Galaxy Note3", "LG G3", "Nexus 10");
			var colors = new Array("Blue", "Gray", "Green", "Orange", "Pink", "Violet", "Yellow", "Red");
			var qtys = new Array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20);
			var purchaseDates = new Array("2014-10-01","2014-09-30","2014-09-29","2014-09-28","2014-09-27","2014-09-26","2014-09-25","2014-09-24","2014-09-23","2014-09-22","2014-09-21","2014-09-20","2014-09-19","2014-09-18","2014-09-17","2014-09-16","2014-09-15","2014-09-14","2014-09-13","2014-09-12","2014-09-11","2014-09-10","2014-09-09","2014-09-08","2014-09-07","2014-09-06","2014-09-05","2014-09-04","2014-09-03","2014-09-02","2014-09-01","2014-08-31","2014-08-30","2014-08-29","2014-08-28","2014-08-27","2014-08-26","2014-08-25","2014-08-24","2014-08-23","2014-08-22","2014-08-21","2014-08-20","2014-08-19","2014-08-18","2014-08-17","2014-08-16","2014-08-15","2014-08-14","2014-08-13","2014-08-12","2014-08-11","2014-08-10","2014-08-09","2014-08-08");
			var sendDates = new Array("2008-08-01","2008-08-02","2008-08-03","2008-08-04","2008-08-05","2008-08-06","2008-08-07","2008-08-08","2008-08-09","2008-08-10","2008-08-11","2008-08-12","2008-08-13","2008-08-14","2008-08-15","2008-08-16","2008-08-17","2008-08-18","2008-08-19","2008-08-20","2008-08-21","2008-08-22","2008-08-23","2008-08-24","2008-08-25","2008-08-26","2008-08-27","2008-08-28","2008-08-29","2008-08-30","2008-08-31","2008-09-01","2008-09-02","2008-09-03","2008-09-04","2008-09-05","2008-09-06","2008-09-07","2008-09-08","2008-09-09","2008-09-10","2008-09-11","2008-09-12","2008-09-13","2008-09-14","2008-09-15","2008-09-16","2008-09-17","2008-09-18","2008-09-19","2008-09-20","2008-09-21","2008-09-22","2008-09-23","2008-09-24","2008-09-25","2008-09-26","2008-09-27","2008-09-28","2008-09-29","2008-09-30");
			var returnDates = new Array("2008-10-01","2008-10-02","2008-10-03","2008-10-04","2008-10-05","2008-10-06","2008-10-07","2008-10-08","2008-10-09","2008-10-10","2008-10-11","2008-10-12","2008-10-13","2008-10-14","2008-10-15","2008-10-16","2008-10-17","2008-10-18","2008-10-19","2008-10-20","2008-10-21","2008-10-22","2008-10-23","2008-10-24","2008-10-25","2008-10-26","2008-10-27","2008-10-28","2008-10-29","2008-10-30","2008-10-31","2008-11-01","2008-11-02","2008-11-03","2008-11-04","2008-11-05","2008-11-06","2008-11-07","2008-11-08","2008-11-09","2008-11-10","2008-11-11","2008-11-12","2008-11-13","2008-11-14","2008-11-15","2008-11-16","2008-11-17","2008-11-18","2008-11-19","2008-11-20","2008-11-21","2008-11-22","2008-11-23","2008-11-24","2008-11-25","2008-11-26","2008-11-27","2008-11-28","2008-11-29","2008-11-30");
			var returnReasons = new Array("수취인불명","수취인부재","이사","폐문부재","주소불명");
			var months = new Array("01-01","01-02","01-03","01-04","01-05","01-06","01-07","01-08","01-09","01-10","01-11","01-12","01-13","01-14","01-15","01-16","01-17","01-18","01-19","01-20","01-21","01-22","01-23","01-24","01-25","01-26","01-27","01-28","01-29","01-30","01-31","02-01","02-02","02-03","02-04","02-05","02-06","02-07","02-08","02-09","02-10","02-11","02-12","02-13","02-14","02-15","02-16","02-17","02-18","02-19","02-20","02-21","02-22","02-23","02-24","02-25","02-26","02-27","02-28","03-01","03-02","03-03","03-04","03-05","03-06","03-07","03-08","03-09","03-10","03-11","03-12","03-13","03-14","03-15","03-16","03-17","03-18","03-19","03-20","03-21","03-22","03-23","03-24","03-25","03-26","03-27","03-28","03-29","03-30","03-31","04-01","04-02","04-03","04-04","04-05","04-06","04-07","04-08","04-09","04-10","04-11","04-12","04-13","04-14","04-15","04-16","04-17","04-18","04-19","04-20","04-21","04-22","04-23","04-24","04-25","04-26","04-27","04-28","04-29","04-30","05-01","05-02","05-03","05-04","05-05","05-06","05-07","05-08","05-09","05-10","05-11","05-12","05-13","05-14","05-15","05-16","05-17","05-18","05-19","05-20","05-21","05-22","05-23","05-24","05-25","05-26","05-27","05-28","05-29","05-30","05-31","06-01","06-02","06-03","06-04","06-05","06-06","06-07","06-08","06-09","06-10","06-11","06-12","06-13","06-14","06-15","06-16","06-17","06-18","06-19","06-20","06-21","06-22","06-23","06-24","06-25","06-26","06-27","06-28","06-29","06-30","07-01","07-02","07-03","07-04","07-05","07-06","07-07","07-08","07-09","07-10","07-11","07-12","07-13","07-14","07-15","07-16","07-17","07-18","07-19","07-20","07-21","07-22","07-23","07-24","07-25","07-26","07-27","07-28","07-29","07-30","07-31","08-01","08-02","08-03","08-04","08-05","08-06","08-07","08-08","08-09","08-10","08-11","08-12","08-13","08-14","08-15","08-16","08-17","08-18","08-19","08-20","08-21","08-22","08-23","08-24","08-25","08-26","08-27","08-28","08-29","08-30","08-31","09-01","09-02","09-03","09-04","09-05","09-06","09-07","09-08","09-09","09-10","09-11","09-12","09-13","09-14","09-15","09-16","09-17","09-18","09-19","09-20","09-21","09-22","09-23","09-24","09-25","09-26","09-27","09-28","09-29","09-30","10-01","10-02","10-03","10-04","10-05","10-06","10-07","10-08","10-09","10-10","10-11","10-12","10-13","10-14","10-15","10-16","10-17","10-18","10-19","10-20");
			var USER_GRAs = new Array("A","B","C","D");
			var USER_LICs = new Array("AA","A","B","C","D");
			var USER_GUBUNs = new Array("A","B");
			var createDates = new Array("2008-06-01","2008-06-02","2008-06-03","2008-06-04","2008-06-05","2008-06-06","2008-06-07","2008-06-08","2008-06-09","2008-06-10","2008-06-11","2008-06-12","2008-06-13","2008-06-14","2008-06-15","2008-06-16","2008-06-17","2008-06-18","2008-06-19","2008-06-20","2008-06-21","2008-06-22","2008-06-23","2008-06-24","2008-06-25","2008-06-26","2008-06-27","2008-06-28","2008-06-29","2008-06-30","2008-07-01","2008-07-02","2008-07-03","2008-07-04","2008-07-05","2008-07-06","2008-07-07","2008-07-08","2008-07-09","2008-07-10","2008-07-11","2008-07-12","2008-07-13","2008-07-14","2008-07-15","2008-07-16","2008-07-17","2008-07-18","2008-07-19","2008-07-20","2008-07-21","2008-07-22","2008-07-23","2008-07-24","2008-07-25","2008-07-26","2008-07-27","2008-07-28","2008-07-29","2008-07-30","2008-07-31");
			var USER_BELs = new Array("O","U");
			var USER_DEPs = new Array("002","003","020","030","040","050","060");
			var USER_EMAILs = new Array("foreignexchangedept1@yahoo.com.hk","williamsgeorgeatmcarddept1@gmail.com","ericlim220@yahoo.com","mr.paul.harry08@gmail.com","katblix4@gmail.com","felica4uu@hotmail.com","j.nomvete30@workmail.co.za","paul_ku2@hotmail.com","davis_mark1@outlook.com","sgtamyrhodes@qq.com","dhldelivery@pochta.com","arfinances@live.com","help202@outlook.dk","mrs.gloriamackenie@outlook.com","shand_lee@yahoo.com.hk","franklinosayandescott@gmail.com","pmark5193@gmail.com","westernunion1233@yahoo.fr","iwumt2015@gmail.com","mathewgdfoundation@qq.com","johnpaulpatrick_77@hotmail.com","davidmike_201@yahoo.co.jp","detailsunitednations@gmail.com","newgovernorcbn2014@gmail.com","gordch101@yahoo.com.hk","Petersimonsbacka@swedishmedtech.se.com","dipjsc.dubai@gmail.com","dipjsc.uae@gmail.com","qrtinfoyou@gmail.com","executive.jalloh@gmail.com","unsubemail55@gmail.com","cpiatbariloche@speedy.com.ar","manitoba02@gmail.com","dr.robertp1@hotmail.com","western.union577@qq.com","upsservices9201@outlook.com","mr.jamescornwall@qq.com","frankcartercashflowinvestment@yahoo.com","carlzeichner@email.ch","barristeronyelilian5@gmail.com","mr.paulconnick@hotmail.com","firstbankplcng@accountant.com","mrbenraymond1957@gmx.com","t.pbena1@foxmail.com","ggregor932@gmail.com","america-seafood@hotmail.com","aandmengineering@msn.com","info@maerskoilgroup.com","mrsjanetyellen3@gmail.com","andreidmitrievbulkserver@gmail.com","ousmansoumah003@gmail.com","kushi.alltoit@hotmail.com","addaieric002@gmail.com","moneygram08@foxmail.com","foreignpaymentdepartment@lycos.com","musolinofinancefinco@gmail.com","724479582@qq.com","inf0@pisem.net","adom-thiemele@thiemele-lawfirm.com","hgbfcf9@hotmail.com","serline_klein@hotmail.com","kindlyremove008@gmail.com","mr.andrew_pedro@yahoo.fr","mr.andrew_pedro@yahoo.fr","newlook2k8.bye@gmail.com","cmfinancialservices07@gmail.com","CameronDokodaFinancialServices@consultant.com","tfgiftinvestment2@gmail.com","moneytransferwesternunion75@yahoo.com.vn","leon.hirtle2@hotmail.com","slaveigood1@gmail.com","paull.bben@gmail.com","western.u844@mail.ru","lottowinnerrewards@gmail.com","david.ellis01@outlook.com","raymond.buxton2015@hotmail.com","kw648@yahoo.com.hk","InfoNedbank.Nedbank@yahoo.co.za","alexander.dryano@yahoo.ie","terry.don@live.com","telex@swlft-natwest.com","info.interpol@bigmir.net","aishamummar1@yahoo.com","jamesdabeni@yahoo.com","jamesdabeni777@gmail.com","f.express2015@yandex.com","charlesmillssarb@gmail.com","mrsireneloeinfirm1@gmail.com","waleVCXakande2010@gmail.com","waleakande2010@gmail.com","westerntttuuunnion@outlook.com","homelandsecdpt01@mail.tj","efccfile02@mail.tj","lbetten102@hotmail.com");
			var USER_SEXs = new Array("female","male");
			var resignation_fgs = new Array("1","0");

			var name, address, product, color, color2, qty, price, purchaseDate;
			
			for (var i = 0; i < count; i++) {
				name = names[Math.floor(Math.random() * names.length)];
				address = addresss[Math.floor(Math.random() * addresss.length)];
				product = products[Math.floor(Math.random() * products.length)];
				color = colors[Math.floor(Math.random() * colors.length)];
				color2 = colors[Math.floor(Math.random() * colors.length)];
				qty = qtys[Math.floor(Math.random() * qtys.length)];
				price = Math.floor(Math.random() * 100000);
				purchaseDate = purchaseDates[Math.floor(Math.random() * purchaseDates.length)];
				sendDate = sendDates[Math.floor(Math.random() * sendDates.length)];
				returnDate = returnDates[Math.floor(Math.random() * returnDates.length)];
				
				returnReason = returnReasons[Math.floor(Math.random() * returnReasons.length)];
				USER_GRA = USER_GRAs[Math.floor(Math.random() * USER_GRAs.length)];
				USER_LIC = USER_LICs[Math.floor(Math.random() * USER_LICs.length)];
				USER_LIC1 = USER_LICs[Math.floor(Math.random() * USER_LICs.length)];
				USER_LIC2 = USER_LICs[Math.floor(Math.random() * USER_LICs.length)];
				USER_LIC3 = USER_LICs[Math.floor(Math.random() * USER_LICs.length)];
				USER_LIC4 = USER_LICs[Math.floor(Math.random() * USER_LICs.length)];
				USER_LIC5 = USER_LICs[Math.floor(Math.random() * USER_LICs.length)];
				USER_GUBUN = USER_GUBUNs[Math.floor(Math.random() * USER_GUBUNs.length)];
				USER_GUBUN1 = USER_GUBUNs[Math.floor(Math.random() * USER_GUBUNs.length)];
				
				USER_GUBUN2 = USER_GUBUNs[Math.floor(Math.random() * USER_GUBUNs.length)];
				USER_GUBUN3 = USER_GUBUNs[Math.floor(Math.random() * USER_GUBUNs.length)];
				USER_GUBUN4 = USER_GUBUNs[Math.floor(Math.random() * USER_GUBUNs.length)];
				USER_GUBUN5 = USER_GUBUNs[Math.floor(Math.random() * USER_GUBUNs.length)];
				createDate = createDates[Math.floor(Math.random() * createDates.length)];
				USER_BEL = USER_BELs[Math.floor(Math.random() * USER_BELs.length)];
				USER_DEP = USER_DEPs[Math.floor(Math.random() * USER_DEPs.length)];
				USER_EMAIL = USER_EMAILs[Math.floor(Math.random() * USER_EMAILs.length)];
				USER_SEX = USER_SEXs[Math.floor(Math.random() * USER_SEXs.length)];
				resignation_fg = resignation_fgs[Math.floor(Math.random() * resignation_fgs.length)];
				
				qty1 = qtys[Math.floor(Math.random() * qtys.length)];
				qty2 = qtys[Math.floor(Math.random() * qtys.length)];
				qty3 = qtys[Math.floor(Math.random() * qtys.length)];
				qty4 = qtys[Math.floor(Math.random() * qtys.length)];
				qty5 = qtys[Math.floor(Math.random() * qtys.length)];
				qty6 = qtys[Math.floor(Math.random() * qtys.length)];
				qty7 = qtys[Math.floor(Math.random() * qtys.length)];
				qty8 = qtys[Math.floor(Math.random() * qtys.length)];
				qty9 = qtys[Math.floor(Math.random() * qtys.length)];
				qty10 = qtys[Math.floor(Math.random() * qtys.length)];
				
				qty11 = qtys[Math.floor(Math.random() * qtys.length)];
				qty12 = qtys[Math.floor(Math.random() * qtys.length)];
				qty13 = qtys[Math.floor(Math.random() * qtys.length)];
				qty14 = qtys[Math.floor(Math.random() * qtys.length)];
				qty15 = qtys[Math.floor(Math.random() * qtys.length)];
				qty16 = qtys[Math.floor(Math.random() * qtys.length)];
				qty17 = qtys[Math.floor(Math.random() * qtys.length)];
				qty18 = qtys[Math.floor(Math.random() * qtys.length)];
				qty19 = qtys[Math.floor(Math.random() * qtys.length)];
				qty20 = qtys[Math.floor(Math.random() * qtys.length)];
				
				qty21 = qtys[Math.floor(Math.random() * qtys.length)];
				qty22 = qtys[Math.floor(Math.random() * qtys.length)];
				qty23 = qtys[Math.floor(Math.random() * qtys.length)];
				qty24 = qtys[Math.floor(Math.random() * qtys.length)];
				qty25 = qtys[Math.floor(Math.random() * qtys.length)];
				qty26 = qtys[Math.floor(Math.random() * qtys.length)];
				qty27 = qtys[Math.floor(Math.random() * qtys.length)];
				qty28 = qtys[Math.floor(Math.random() * qtys.length)];
				qty29 = qtys[Math.floor(Math.random() * qtys.length)];
				qty30 = qtys[Math.floor(Math.random() * qtys.length)];
				
				qty31 = qtys[Math.floor(Math.random() * qtys.length)];
				qty32 = qtys[Math.floor(Math.random() * qtys.length)];
				qty33 = qtys[Math.floor(Math.random() * qtys.length)];
				qty34 = qtys[Math.floor(Math.random() * qtys.length)];
				qty35 = qtys[Math.floor(Math.random() * qtys.length)];
				qty36 = qtys[Math.floor(Math.random() * qtys.length)];
				qty37 = qtys[Math.floor(Math.random() * qtys.length)];
				qty38 = qtys[Math.floor(Math.random() * qtys.length)];
				qty39 = qtys[Math.floor(Math.random() * qtys.length)];
				qty40 = qtys[Math.floor(Math.random() * qtys.length)];
				
				qty41 = qtys[Math.floor(Math.random() * qtys.length)];
				qty42 = qtys[Math.floor(Math.random() * qtys.length)];
				qty43 = qtys[Math.floor(Math.random() * qtys.length)];
				qty44 = qtys[Math.floor(Math.random() * qtys.length)];
				qty45 = qtys[Math.floor(Math.random() * qtys.length)];
				qty46 = qtys[Math.floor(Math.random() * qtys.length)];
				qty47 = qtys[Math.floor(Math.random() * qtys.length)];
				qty48 = qtys[Math.floor(Math.random() * qtys.length)];
				qty49 = qtys[Math.floor(Math.random() * qtys.length)];
				qty50 = qtys[Math.floor(Math.random() * qtys.length)];
				
				qty51 = qtys[Math.floor(Math.random() * qtys.length)];
				qty52 = qtys[Math.floor(Math.random() * qtys.length)];
				qty53 = qtys[Math.floor(Math.random() * qtys.length)];
				qty54 = qtys[Math.floor(Math.random() * qtys.length)];
				qty55 = qtys[Math.floor(Math.random() * qtys.length)];
				qty56 = qtys[Math.floor(Math.random() * qtys.length)];
				qty57 = qtys[Math.floor(Math.random() * qtys.length)];
				qty58 = qtys[Math.floor(Math.random() * qtys.length)];
				qty59 = qtys[Math.floor(Math.random() * qtys.length)];
				qty60 = qtys[Math.floor(Math.random() * qtys.length)];
				
				qty61 = qtys[Math.floor(Math.random() * qtys.length)];
				qty62 = qtys[Math.floor(Math.random() * qtys.length)];
				qty63 = qtys[Math.floor(Math.random() * qtys.length)];
				qty64 = qtys[Math.floor(Math.random() * qtys.length)];
				qty65 = qtys[Math.floor(Math.random() * qtys.length)];
				qty66 = qtys[Math.floor(Math.random() * qtys.length)];
				qty67 = qtys[Math.floor(Math.random() * qtys.length)];
				qty68 = qtys[Math.floor(Math.random() * qtys.length)];
				qty69 = qtys[Math.floor(Math.random() * qtys.length)];
				qty70 = qtys[Math.floor(Math.random() * qtys.length)];

				data.push({
					name : name, 
					address : address,
					product : product,
					color : color,
					color2 : color2,
					qty : qty,
					price : price,
					purchaseDate : purchaseDate,
					sendDate : sendDate,
					returnDate : returnDate,
					
					returnReason : returnReason,
					USER_GRA: USER_GRA, 
					USER_LIC: USER_LIC, 
					USER_LIC1: USER_LIC1, 
					USER_LIC2: USER_LIC2, 
					USER_LIC3: USER_LIC3, 
					USER_LIC4: USER_LIC4, 
					USER_LIC5: USER_LIC5, 
					USER_GUBUN: USER_GUBUN, 
					USER_GUBUN1: USER_GUBUN1, 
					
					USER_GUBUN2: USER_GUBUN2, 
					USER_GUBUN3: USER_GUBUN3, 
					USER_GUBUN4: USER_GUBUN4, 
					USER_GUBUN5: USER_GUBUN5, 
					createDate : createDate,
					USER_BEL: USER_BEL, 
					USER_DEP: USER_DEP, 
					USER_EMAIL: USER_EMAIL, 
					USER_SEX: USER_SEX, 
					resignation_fg: resignation_fg, 
					
					qty1 : qty1,
					qty2 : qty2,
					qty3 : qty3,
					qty4 : qty4,
					qty5 : qty5,
					qty6 : qty6,
					qty7 : qty7,
					qty8 : qty8,
					qty9 : qty9,
					qty10 : qty10,
					
					qty11 : qty11,
					qty12 : qty12,
					qty13 : qty13,
					qty14 : qty14,
					qty15 : qty15,
					qty16 : qty16,
					qty17 : qty17,
					qty18 : qty18,
					qty19 : qty19,
					qty20 : qty20,

					qty21 : qty21,
					qty22 : qty22,
					qty23 : qty23,
					qty24 : qty24,
					qty25 : qty25,
					qty26 : qty26,
					qty27 : qty27,
					qty28 : qty28,
					qty29 : qty29,
					qty30 : qty30,

					qty31 : qty31,
					qty32 : qty32,
					qty33 : qty33,
					qty34 : qty34,
					qty35 : qty35,
					qty36 : qty36,
					qty37 : qty37,
					qty38 : qty38,
					qty39 : qty39,
					qty40 : qty40,

					qty41 : qty41,
					qty42 : qty42,
					qty43 : qty43,
					qty44 : qty44,
					qty45 : qty45,
					qty46 : qty46,
					qty47 : qty47,
					qty48 : qty48,
					qty49 : qty49,
					qty50 : qty50,

					qty51 : qty51,
					qty52 : qty52,
					qty53 : qty53,
					qty54 : qty54,
					qty55 : qty55,
					qty56 : qty56,
					qty57 : qty57,
					qty58 : qty58,
					qty59 : qty59,
					qty60 : qty60,

					qty61 : qty61,
					qty62 : qty62,
					qty63 : qty63,
					qty64 : qty64,
					qty65 : qty65,
					qty66 : qty66,
					qty67 : qty67,
					qty68 : qty68,
					qty69 : qty69,
					qty70 : qty70,
				});
			}
			break;
	}	
	
	return data;
}
