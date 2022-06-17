// object_constuctor.js

// 객체 생성.
function Student(sno, sname, age) { //sno, sname, age : 매개값
    this.sno = sno; //this :객체자신
    this.sname = sname;
    this.age = age;
    this.showInfo = function () {
        return '이름은 ' + this.sname + ', 나이는 ' + this.age;
    }
}
let s1 = new Student('22-1111', '홍길동', 19);
let s2 = s1;
s2.sno = '22-2222';
console.log(s1.showInfo());









function Table(param) {
    this.data = param; //this
    this.tag = '';
    this.fields = ['sname', 'age', 'height', 'weight'];


    this.createTable = function () {
        this.tag += '<table border=1>';
        this.createHead();
        this.createBody();
        this.tag += '</table>';
        return this.tag;
    }

    this.createHead = function () {
        this.tag += '<thead><tr>';
        // let str = this.tag;
        this.fields.forEach((val) => {
            this.tag += '<th>' + val + '</th>';
        });
        this.tag += '</tr></thead>';
    }

    this.createBody = function () {
        this.tag += '<tbody>';
        this.data.forEach((val) => {
            this.tag += '<tr>';
            for (let field in val) {
                this.tag += '<td>' + val[field] + '</td>';
            }
            this.tag += '</tr>';
        });
        this.tag += '</tbody>';
    }

}
 //function() {this => window} / new 함수 => this :객체(object), 
 // 이벤트 => this : 이벤트 대상.
let data = [{
        sname: '홍길동',
        age: 15,
        height: 158,
        weight: 58
    },
    {
        sname: '이찬희',
        age: 20,
        height: 175,
        weight: 74
    },
    {
        sname: '김민수',
        age: 25,
        height: 178,
        weight: 77
    }
]

let t1 = new Table(data);
let str = t1.createTable();
document.write(str);