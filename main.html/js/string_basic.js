// string_basic.js

let str = 'Hello'; // 문자열
let str1 = new String('Hello'); // 문자열 객체

console.log(str == str1); // 값
console.log(str == str1.valueOf()); // 타입 & 값

let num = new Number(123); // number => object
let num1 = 123; //number;
console.log(num.valueOf === num1); // valueOf객체 => 기본 데이터 타입으로 변환.

// 원시타입 : strng, number, boolean, undefind, 
// 객체타입 : 함수, object( {name:?, age:?}), 배열, null

console.log(" Hello ".trimStart());
console.log("This is the only story".substr(10, 5))
 
// only, story
let ary = [];
let obj = {};
let reg = /good/; //new FrgExp();
let regStr ="bad MORNING, GOOD AFTERNOON, goodevening, and good night";
console.log(regStr.replace(/good\s/gi, 'bad '));

//p155 ~ p172
const calc1 = '1 + 2 * 3';
const calc2 = new String('1 + 2 * 3');
console.log(eval(calc1));
console.log(eval(calc2));
console.log(eval(calc2.valueOf()));

var str0 = '문자열';
var str2 = new String('문자열');
var str3 = new String('문자열데이터');
var str4 = str3.valueOf();

console.log("-- 변수타입");
console.log(typeof(str0));
console.log(typeof(str2));
console.log(typeof(str3));
console.log(typeof(str4));

console.log("-- 문자열 변수/객체비교")
console.log(str0 == str2);
console.log(str0 ===str2);
console.log(str2 == str3);
console.log(str2 ===str3);
console.log(str2==str3.valueOf());




