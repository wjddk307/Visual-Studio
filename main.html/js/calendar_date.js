// calendar_date.js

let today = new Date('2022-06');
today = new Date(2022, 5, 0); // 5월 말일.
console.log(`올해는 ${today.getFullYear()} 년도`);
console.log(`이번달은 ${today.getMonth()+1} 월 입니다.`); // 0 ~ 11
console.log(`오늘은 ${today.getDate()}일 입니다.`);
console.log(`오늘은 ${today.getDay()}요일 입니다.`); // 요일정보. 0 ~ 6

// 달력 작성. 6월 작성. 6월1일의 요일. 6월의 마지막날..
let year = 2021; //2021년..
let month = 6; //6월달..

makeCalendar(year, month);

function makeCalendar(y,m) {
    let firstDay = new Date(y, m-1, 1).getDay();
    let lastDate = new Date(y, m, 0).getDate();

    // 년도, 월 달력 정보생성.
    let days = ['일', '월', '화', '수', '목', '금', '토'];
    str = `<table border=1><caption> [ ${y}년 ${m}월]</caption><tr>`;
    for (let day of days) {
        str += '<th>' + day + '</th>';
  }
    str = '</tr><tr>';
    for (let i = 0; i < lastDate ; i++) {
        str += '<td></td>';
    }
    for (let i = 1; i ; i++) {
        str += '<td>' + i + '</td>';
        if ((firstDay + i) % 7 == 0) { // 7의 배수.
            str += '</tr><tr>';
        }
    }
    str += '</tr></table>';
    document.write(str);
}

