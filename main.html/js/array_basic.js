// array_basic.js

let arr = []; //new Array(); new Object()/ {}
arr[0] = 'Hello';
arr[1] = 100;
arr[2] = true;

delete arr[1]; //비어있음.

console.log(arr.length);
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
//확장 for
for (let val of arr) {
    console.log(val);
}
// forEach
arr.forEach((val, idx) => {
    console.log(`${idx} => ${val}`); // 배열의 값 underfined 이면 반복에서 제외.
});

console.clear();
arr.push('Apple'); //추가.
arr.unshift('Banana') //추가
arr.pop(); //마지막 삭제.
arr.shift(); //첫번째 삭제.
arr.splice(0, 0, 'Apple'); //추가, 수정, 삭제 //인덱스 0번째 부터 1개 Apple로 대체.
//arr.splice(0, 1) 0번째부터 1가지 삭제.
arr.forEach((val,idx) => {
    console.log(`${idx} => ${val}`); //배열의 값 unndefind 이면 반복에서 제외.
});