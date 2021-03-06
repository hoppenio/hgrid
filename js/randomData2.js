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
function createRandomData2(type, count) {
	var data = [];

	switch (type) {
		case 'phone':
			var names = new Array("이강원","박진화","이소영","김명환","김남순","김만중","이초이","엄기헌","곽영석","유연희","이재균","박명자","김영곤","허병활","김태근","김미경","정재원","이영복","김도영","김종율","정동환","이한성","안정균","이광호","황정석","김덕원","이성철","한병수","천확삼","안대호","김귀애","손봉한","유재훈","박진화","김영숙","김성희","이미숙","이두성","오현숙","박기덕","박진화","이현서","정갑균","조성재","조명호","이종진","김준식","임영근","조정희","김갑중","양우승","송상민","김계환","신수인","강민곤","장연수","박현배","윤환","박민길","염규홍","정민우","김진우","최형모","이은애","이태우","임정태","이수진","지영식","장삼현","오원기","박성자","유승수","김대성","박성자","정정용","이미옥","김혜옥","유호근","정선영","정재영","정윤호","우주동","유정희","김준호","한충언","김동민","김창환","정수지","김정희","이천희","황정환","박필입","박순분","정신영","오성현","최옥화","박영숙","이한성","유석원","장이준");
			var addresss = new Array("서울특별시 관악구 봉천동","경기도 광주시 퇴촌면 관음리","경기도 고양시 일산서구 대화동","충청북도 제천시 하소동","경기도 부천시 오정구 고강동","서울특별시 양천구 목동","서울특별시 관악구 신림동","서울특별시 관악구 봉천동","서울특별시 양천구 목동","서울특별시 은평구 응암동","서울특별시 중구 신당동","서울특별시 관악구 신림동","서울특별시 관악구 신림동","대구광역시 북구 산격동","서울특별시 관악구 신림동","서울특별시 강서구 화곡동","대구광역시 달서구 감삼동","서울특별시 금천구 시흥동","서울특별시 금천구 독산동","서울특별시 영등포구 여의도동","강원도 원주시 태장동","서울특별시 관악구 신림동","서울특별시 동작구 상도동","인천광역시 부평구 부개동","경기도 성남시 분당구 정자동","경기도 부천시 오정구 원종동","인천광역시 남구 주안동","경기도 부천시 원미구 원미동","서울특별시 양천구 목동","경기도 성남시 중원구 상대원동","인천광역시 연수구 청학동","인천광역시 서구 검암동","서울특별시 관악구 봉천동","경기도 광주시 퇴촌면 관음리","서울특별시 관악구 봉천동","서울특별시 영등포구 대림동","서울특별시 관악구 봉천동","서울특별시 관악구 봉천동","서울특별시 구로구 고척동","경기도 부천시 원미구 역곡동","경기도 광주시 퇴촌면 관음리","서울특별시 강서구 방화동","경기도 안양시 동안구 관양동","경기도 남양주시 오남읍 오남리","경기도 평택시 이충동","경기도 의정부시 의정부동","경기도 평택시 진위면 견산리","서울특별시 구로구 궁동","서울특별시 관악구 봉천동","경기도 부천시 소사구 심곡본동","서울특별시 관악구 봉천동","서울특별시 관악구 신림동","충청남도 당진군 당진읍 원당리","서울특별시 관악구 신림동","서울특별시 강서구 화곡동","경기도 성남시 중원구 은행동","서울특별시 금천구 독산동","서울특별시 동작구 사당동","서울특별시 강동구 천호동","충청남도 금산군 금산읍 하옥리","서울특별시 동대문구 휘경동","서울특별시 동작구 상도동","서울특별시 금천구 시흥동","서울특별시 종로구 익선동","충청북도 충주시 연수동");
			var products = new Array("IPhone 5S", "IPhone 5S","IPhone 5S","IPhone 5S","IPhone 5S","Galaxy S5", "IPad Air", "Galaxy Note3", "LG G3", "Nexus 10", "Nexus 10", "Nexus 10", "LG G3", "LG G3","Galaxy S5", "IPad Air", "Galaxy Note3", "Galaxy Note3", "Galaxy Note3", "Galaxy Note3");
			var colors = new Array("Blue", "Blue","Gray", "Gray", "Blue","Blue","Blue", "Gray", "Orange", "Orange", "Orange", "Orange", "Orange", "Pink", "Pink", "Red", "Red", "Red", "Orange", "Orange", "Pink");
			var qtys = new Array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20);
			var purchaseDates = new Array("2014-10-01","2014-09-30","2014-09-29","2014-09-28","2014-09-27","2014-09-26","2014-09-25","2014-09-24","2014-09-23","2014-09-22","2014-09-21","2014-09-20","2014-09-19","2014-09-18","2014-09-17","2014-09-16","2014-09-15","2014-09-14","2014-09-13","2014-09-12","2014-09-11","2014-09-10","2014-09-09","2014-09-08","2014-09-07","2014-09-06","2014-09-05","2014-09-04","2014-09-03","2014-09-02","2014-09-01","2014-08-31","2014-08-30","2014-08-29","2014-08-28","2014-08-27","2014-08-26","2014-08-25","2014-08-24","2014-08-23","2014-08-22","2014-08-21","2014-08-20","2014-08-19","2014-08-18","2014-08-17","2014-08-16","2014-08-15","2014-08-14","2014-08-13","2014-08-12","2014-08-11","2014-08-10","2014-08-09","2014-08-08");
			
			var name, address, product, color, color2, qty, price, purchaseDate;
			
			for (var i = 0; i < count; i++) {
				name = names[i];
				address = addresss[i];
				product = products[i];
				color = colors[i];
				color2 = colors[i];
				qty = qtys[i];
				price = Math.floor(Math.random() * 100000);
				purchaseDate = purchaseDates[i];
				
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
		case 'phone2':
			var names = new Array("이강원","박진화","이소영","김명환","김남순","김만중","이초이","엄기헌","곽영석","유연희","이재균","박명자","김영곤","허병활","김태근","김미경","정재원","이영복","김도영","김종율","정동환","이한성","안정균","이광호","황정석","김덕원","이성철","한병수","천확삼","안대호","김귀애","손봉한","유재훈","박진화","김영숙","김성희","이미숙","이두성","오현숙","박기덕","박진화","이현서","정갑균","조성재","조명호","이종진","김준식","임영근","조정희","김갑중","양우승","송상민","김계환","신수인","강민곤","장연수","박현배","윤환","박민길","염규홍","정민우","김진우","최형모","이은애","이태우","임정태","이수진","지영식","장삼현","오원기","박성자","유승수","김대성","박성자","정정용","이미옥","김혜옥","유호근","정선영","정재영","정윤호","우주동","유정희","김준호","한충언","김동민","김창환","정수지","김정희","이천희","황정환","박필입","박순분","정신영","오성현","최옥화","박영숙","이한성","유석원","장이준");
			var addresss = new Array("서울특별시 관악구 봉천동","경기도 광주시 퇴촌면 관음리","경기도 고양시 일산서구 대화동","충청북도 제천시 하소동","경기도 부천시 오정구 고강동","서울특별시 양천구 목동","서울특별시 관악구 신림동","서울특별시 관악구 봉천동","서울특별시 양천구 목동","서울특별시 은평구 응암동","서울특별시 중구 신당동","서울특별시 관악구 신림동","서울특별시 관악구 신림동","대구광역시 북구 산격동","서울특별시 관악구 신림동","서울특별시 강서구 화곡동","대구광역시 달서구 감삼동","서울특별시 금천구 시흥동","서울특별시 금천구 독산동","서울특별시 영등포구 여의도동","강원도 원주시 태장동","서울특별시 관악구 신림동","서울특별시 동작구 상도동","인천광역시 부평구 부개동","경기도 성남시 분당구 정자동","경기도 부천시 오정구 원종동","인천광역시 남구 주안동","경기도 부천시 원미구 원미동","서울특별시 양천구 목동","경기도 성남시 중원구 상대원동","인천광역시 연수구 청학동","인천광역시 서구 검암동","서울특별시 관악구 봉천동","경기도 광주시 퇴촌면 관음리","서울특별시 관악구 봉천동","서울특별시 영등포구 대림동","서울특별시 관악구 봉천동","서울특별시 관악구 봉천동","서울특별시 구로구 고척동","경기도 부천시 원미구 역곡동","경기도 광주시 퇴촌면 관음리","서울특별시 강서구 방화동","경기도 안양시 동안구 관양동","경기도 남양주시 오남읍 오남리","경기도 평택시 이충동","경기도 의정부시 의정부동","경기도 평택시 진위면 견산리","서울특별시 구로구 궁동","서울특별시 관악구 봉천동","경기도 부천시 소사구 심곡본동","서울특별시 관악구 봉천동","서울특별시 관악구 신림동","충청남도 당진군 당진읍 원당리","서울특별시 관악구 신림동","서울특별시 강서구 화곡동","경기도 성남시 중원구 은행동","서울특별시 금천구 독산동","서울특별시 동작구 사당동","서울특별시 강동구 천호동","충청남도 금산군 금산읍 하옥리","서울특별시 동대문구 휘경동","서울특별시 동작구 상도동","서울특별시 금천구 시흥동","서울특별시 종로구 익선동","충청북도 충주시 연수동");
			var colors = new Array("Blue", "Blue","Gray", "Gray", "Blue","Blue","Blue", "Gray", "Orange", "Orange", "Orange", "Orange", "Orange", "Pink", "Pink", "Red", "Red", "Red", "Orange", "Orange", "Pink");
			var colors2 = new Array("Gray", "Gray", "Blue","Blue","Blue", "Gray", "Orange", "Blue", "Blue","Orange", "Orange", "Orange", "Orange", "Pink", "Pink", "Red", "Red", "Red", "Orange", "Orange", "Pink");
			var qtys = new Array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20);
			var purchaseDates = new Array("2014-10-01","2014-09-30","2014-09-29","2014-09-28","2014-09-27","2014-09-26","2014-09-25","2014-09-24","2014-09-23","2014-09-22","2014-09-21","2014-09-20","2014-09-19","2014-09-18","2014-09-17","2014-09-16","2014-09-15","2014-09-14","2014-09-13","2014-09-12","2014-09-11","2014-09-10","2014-09-09","2014-09-08","2014-09-07","2014-09-06","2014-09-05","2014-09-04","2014-09-03","2014-09-02","2014-09-01","2014-08-31","2014-08-30","2014-08-29","2014-08-28","2014-08-27","2014-08-26","2014-08-25","2014-08-24","2014-08-23","2014-08-22","2014-08-21","2014-08-20","2014-08-19","2014-08-18","2014-08-17","2014-08-16","2014-08-15","2014-08-14","2014-08-13","2014-08-12","2014-08-11","2014-08-10","2014-08-09","2014-08-08");
			
			var name, address, product, color, color2, qty, price, purchaseDate;
			
			for (var i = 0; i < count; i++) {
				name = names[i];
				address = addresss[i];
				color = colors[i];
				color2 = colors2[i];
				qty = qtys[i];
				price = Math.floor(Math.random() * 100000);
				purchaseDate = purchaseDates[i];
				
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
	}	
	
	return data;
}
