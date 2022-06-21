// array_basic1.js

let names = [];
names.push('이희수');
names.push('인은지');
names.unshift('박소현') //
names.splice(1, 0, '오지민'); //크기가 0이면 추가
names.splice(4, 0, '김가윤', '박경아');

let newNames = [];
names.forEach(function(val, idx) {
    if (idx % 2 == 0)
    newNames.push(val);
});

console.log(names);

let mapAry = names.map(function(val, idx, ary) {
    if(idx %2 ==0) {
        return val; //반환.
    }
}); // mapping A -> B : 1대1
console.log(mapAry);

let filAry = mapAry.filter(function(val, idx) {
    return val;
}); //조건을 만족하는 값들만 새로운 배열 요소.
console.log(filAry);

let resultAry = names.map((val, idx) => {
    if(idx %2 ==0) {
        return val;
    }
}).filter((val, idx) => {
    return val;
});
console.log(resultAry);

let lastAry = names.filter(function(val,idx) {
    if(idx %2 ==0) {
        return val;
    }
});
console.log(lastAry);