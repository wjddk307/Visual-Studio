// string_literal.js
let str = 'Hello'; // "Hello";
str = `Hello`; // 빽팁 :문자열 표현.

let person = {
    name : "hong",
    age : 20,
    showInfo : function () {
        // return '이름은 ' + this.name + ', 나이는 ' + this.age;
        return `이름은 ${this.name}, 나이는 ${this.age}`;
    }
}
console.log(person.showInfo());

console.log('나의 이름은 ${person.name}');

console.log(`${person.age >= 20 ? '성인' : '청소년'}`);

let strings = 'This\nis\na\nboy';
strings = `This
is
a
boy`;
console.log(strings);

"This is an apple".indexOf('apple');
"This is an apple".charAt(10);

let jm = '950101-1234567';
jm = '9803022341234';

function checkGender(num = '') {
     let jnum = num.replace('-','');
     jnum = num.substr(-7,1); //1,2 //3,4
     console.log(jnum);
    //체크.
    switch(jnum) {
        case '1':
        case '3':
            return '남자';
        case '2':
        case "4":
            return '여자';        
    }
    
   // return '남자' || '여자';
}

let result = checkGender(jm);
console.log(result);