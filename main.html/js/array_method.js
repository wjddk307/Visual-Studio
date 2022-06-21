// array_method.js

// some: 조건을 만족하는 요소 하나 true/false, every: 요소가 조건을 다 만족 true/false 
// find: 해당되는 요소중 첫번째 값 찾기, findIndex : 인덱스.
// indexOf: 배열요소 => 인덱스 값 반환.
// sort(); 정렬(가나다순)
//split(구분자) : 문자열 => 배열.
//join() : 배열 => 문자열

let idx = "This is a story".indexOf("st");
idx = [1, 2, 3, 4, 5].indexOf(8);

let str = `We are going to eat a breakfast at the Embassy coffee shop. Besides we'll lunch and dinner at fancier places. Anyway, after breakfast we're going to go to the Metropolitan Museum of Art. Then we'ill take a bus across Central Park and go to the Museum of Natural History. Then we'll head downtown and go shopping`;
let strAry = str.split(' '); // split: 반환타입이 배열로 변경.
idx = strAry.indexOf('Art'); // lastIndexOf(); : 뒤에서 부터
let names = ['박은지', '윤정은', '박지혜', '김나희'];
idx = names.indexOf('김나희');

let result = names.find(function (elem, idx, ary) {
    return elem == "김나희"
});
result = [6, 4, 3, 21, 14].find(elem => {
    return elem > 100;
});
result = [6, 4, 3, 21, 14].some((elem, idx, ary) => {
    //console.log(elem, idx, ary);
    return elem > 20; // 만족하는 요소(값)이 하나라도 있으면 true;
})
result = [6, 4, 3, 21, 14].every((elem, idx, ary) => {
    console.log(elem, idx, ary);
    return elem % 2 == 0;
});
console.log(result);

let tempAry = [];
for (let i = 0; i < 15; i++) {
    let temp = parseInt(Math.random() * 10) + 1; //0 <= x < 1 => 1~10까지의 임의의 수.
    console.log(temp);
    tempAry.push(temp);
}

// 1. tempAry 배열의 값이 다 짝수인지 확인.
result = tempAry.every((elem, idx, ary) => {
    // console.log(elem, idx, ary);
    return elem % 2 == 0;
});
console.log('1번문제 : ' + result);

// 2. tempAry 배열의 값 중에 3의 배수 존재 확인.
result = tempAry.some((elem, idx, ary) => {
    return elem % 3 == 0;
});
console.log('2번문제 : ' + result);

// 3. 5보다 큰값이 있으면 그 값을 반환.
result = tempAry.find((elem, idx, ary) => {
    return elem > 5;
})
console.log('3번문제 : ' + result);

result = [6, 4, 3, 21, 14].sort(function (a, b) {
    //return b - a; //6, 4 양. -오름차순, +내림차순
    // if(a < b) {
        //     return -1; // 오름차순.
    // } else {
    //     return 1; //
    // }
});

let objAry = [{
    name: "권유정",
    age: 22
},
{
    name: "손희숙",
    age: 34
},
{
    name: "권순태",
    age: 51
}
];

console.clear();
console.log("권" < "손"); 
result = objAry.sort(function (a, b) {
    // if(a.name > b.name) {
    //     return -1;
    // } else {
    //     return 1;
    // }
    //return a.nama < b.name ? -10 : 10; //이름 오름차순.
    return a.age < b.age ? -1 : 1;
});
result =['홍길동', '백민규', '김상우'].join('-'); // ,

names = '권소정, 김하은, 유선희, 김가윤';
strAry = names.split(`, `);
result = strAry.sort(function (a, b) {
    if(a < b) {
        return -1;
    } else {
        return 1;
    }
});
result = result.join('-');
console.log(result);

strAry = `Littering`.split(``);
let cnt = 0;
strAry.forEach((elem) => {
    cnt += elem == 't' ? 1 : 0;
    // console.log(cnt);
});

cnt = strAry.reduce((accum, curr) => {
    accum += curr == 't' ? 1 : 0;
    return accum;
}, 0)
// console.log('cnt: ' + cnt);