let data = `[{"id":1,"first_name":"Ginevra","last_name":"Lorkins","email":"glorkins0@elpais.com","gender":"Female","salary":1672},
{"id":2,"first_name":"Ailyn","last_name":"Caldecourt","email":"acaldecourt1@storify.com","gender":"Female","salary":2136},
{"id":3,"first_name":"Savina","last_name":"Liptrod","email":"sliptrod2@delicious.com","gender":"Female","salary":3663},
{"id":4,"first_name":"La verne","last_name":"Santos","email":"lsantos3@cloudflare.com","gender":"Bigender","salary":3440},
{"id":5,"first_name":"Bartie","last_name":"Pepineaux","email":"bpepineaux4@discovery.com","gender":"Genderqueer","salary":2902},
{"id":6,"first_name":"Petronella","last_name":"Seebert","email":"pseebert5@uiuc.edu","gender":"Female","salary":4750},
{"id":7,"first_name":"Sibeal","last_name":"Stanners","email":"sstanners6@vinaora.com","gender":"Female","salary":2420},
{"id":8,"first_name":"Seumas","last_name":"O'Cullinane","email":"socullinane7@freewebs.com","gender":"Male","salary":4148},
{"id":9,"first_name":"Clarinda","last_name":"Dodell","email":"cdodell8@umn.edu","gender":"Female","salary":3654},
{"id":10,"first_name":"Jeremias","last_name":"Hitter","email":"jhitter9@slideshare.net","gender":"Male","salary":1313},
{"id":11,"first_name":"James","last_name":"Mollatt","email":"jmollatta@netlog.com","gender":"Male","salary":1156},
{"id":12,"first_name":"Sibilla","last_name":"Danilin","email":"sdanilinb@github.io","gender":"Female","salary":4376},
{"id":13,"first_name":"Clarine","last_name":"Rosenbush","email":"crosenbushc@t-online.de","gender":"Female","salary":2404},
{"id":14,"first_name":"Mitchell","last_name":"Saltern","email":"msalternd@nsw.gov.au","gender":"Male","salary":4098},
{"id":15,"first_name":"Rebeka","last_name":"Bartle","email":"rbartlee@globo.com","gender":"Female","salary":4369}]`

let objAry = JSON.parse(data); // JSON.parse() : 문자열 => 오브젝트.
console.log(data);
console.log(objAry);
console.clear();

let over3000 = objAry.filter((val, idx) => { //{id:?, fname:?, salary:?....}
    return val.salary >= 3000; //filtering 처리.
}).map((val, idx) => {
    let obj = {}; // A -> B
    obj.name = `${val.last_name}, ${val.first_name}`;
    obj.sal = val.salary;
    return obj;
});
console.log(over3000);

// Female 값 평균값을 구하는 기능 구현.
let vag, sum, cnt;
sum = 0;
cnt = 0;
objAry.filter(val => val.gender == 'Female') //배열
    .forEach(val => {
        sum += val.salary;
        cnt++;
    });
vag = sum / cnt;
console.log(`여사원의 급여평균 ${vag}`);

let salaries = [];
objAry.forEach(val => salaries.push(val.salary));
//salaries = objAry.map(val => val.salary);

console.log(salaries);

function getMaxValue(ary = []) {
    //배열요소에서 제일 큰값을 반환하는 함수.
    let max = Number.MIN_SAFE_INTEGER;
    ary.forEach(val => {
        if (max < val) {
            max = val;
        }
    })
    return max;
}
let maxVal = getMaxValue(salaries);
console.log(`가장 큰 값 : ${maxVal}`);

function getMinValue(ary = []) {
    //배열요소에서 제일 작은값을 반환하는 함수.
    let min = Number.MAX_SAFE_INTEGER;
    ary.forEach(val => {
        if(min > val) {
            min = val;
        }
    })
    return min;
}
//console.log(getMinValue(salaries));
let minVal = getMinValue(salaries);
console.log(`가장 작은 값 : ${minVal}`);

function sortAscend(ary = []) {
    //오름차순 정렬하는 함수.
    let numAry = ary;
    let newAry = [];

    return newAry;
}
result = sortAscend(salaries);

//console.log(salaries);
//console.clear();

//reduce 메소드. [1, 2, 3, 4]
result = salaries.reduce(function (accum, curr) {
    console.log(`누적: ${accum},  current 값:${curr} => 두수의 합: ${accum + curr}`); //b : 배열요소
    return curr + accum;
}, 0); // map, filter 메소드
console.log(`최종 결과 : ${result}`);

result = [1, 2, 3, 4].reduce(function (accum, curr) {
    if (curr % 2 == 0)
        accum.push(curr); //배열에 추가.
    return accum; //return값에 따라 다음 초기값 정해짐
}, []); // accum = [1]. [1,2], [1,2,3], [1,2,3,4];

// result = [1, 2, 3, 4].map(val => val);
//  result = [1, 2, 3, 4].filter(val => {
//      if (val %2 ==0) {
//          return val;
//      }
//  })

// <ul><li>Apple</li><li>Banana</li><li>Cherry</li></ul>
result = ['Apple', 'Banana', 'Cherry'].reduce((accum, curr, currIdx, ary) => {
    if (currIdx == 0) {
        accum = '<ul>';
    }
    accum += `<li>${curr}</li>`;
    if (currIdx == ary.length - 1) {
        accum += '</ul>';
    }
    console.log(accum); // <ul><li>Apple</li><li>Banana</li><li>Cherry</li></ul>
}, '');
console.log(result);
document.write(result);

result = [3, 2, 4, 1, 5].reduce(function (accum, curr) {
    if (accum < curr)
        return accum;
    else return curr;
}, Number.MAX_SAFE_INTEGER); // max 값을 반환.

result = [3, 2, 4, 1, 5].reduce((accum, curr) => {
    return accum + curr;
}); //합을 구하기.
console.log(result);

result = [3, 2, 4, 1, 5, 7].reduce((accum, curr, currIdx, ary) => {
    if (currIdx == ary.length - 1) { // 마지막 순번일 경우에
        return (accum + curr) / ary.length;
    }
    return accum + curr;
}); //평균구하기.
console.log(result);