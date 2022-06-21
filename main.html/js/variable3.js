//variable3.js
let str = '<table border=1>';
let num = 2;
for (let i = 1; i <= 9; i++) {
    str += '<tr>' + '<td>' + num + '</td>' + '<td>' + '*' + '</td>' + '<td>' + i + '</td>' + '<td>' + '=' + '</td>' + '<td>' + (num * i) + '</td>' + '</tr>';
}
str += '</table>';
document.write(str);

str = '<table border=1>';
str += '<tr>';
for (let i = 1; i <= 31; i++) {
    str += '<td>' + i + '</td>';
    if (i % 7 == 0) {
        str += '</tr><tr>';
    }
}
str += '</tr></table>';


//달력.
let month = 5;
showCalender(7); 

function showCalender(month) {
    let days = ['일', '월', '화', '수', '목', '금', '토'];

    str = '<table border=1><caption>' + month + '월달력</caption><tr>';
    for (let day of days) {
        str += '<th>' + day + '</th>';
    }
    str += '</tr><tr>';
    let vtd = getFirstDay(month); //1
    for (let i = 1; i < vtd; i++) {
        str += '<td></td>';
    }
    for (let i = 1; i <= getLastDate(month); i++) {
        str += '<td>' + i + '</td>';
        if ((vtd - 1 + i) % 7 == 0) { //7의배수
            str += '</tr><tr>';
        }
    }
    str += '</tr></table>';
    document.write(str);

}

function getLastDate(mon) {
    //1,3,5,7,8,19,12 => 31
    //4,6,9,11 =>30
    //2 => 28
    switch (mon) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return 31;
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
        case 2:
            return 28;
    }
}

function getFirstDay(mon) {
    switch (mon) {
        case 1:
            return 7;
        case 2:
            return 3;
        case 3:
            return 3;
        case 4:
            return 6;            
        case 5:
            return 1;
        case 6:
            return 4;
        case 7:
            return 6;
        default:
            0;
    }
}