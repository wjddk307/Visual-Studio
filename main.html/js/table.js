// table.js

let data = [{
    sname:'Hong',
     age:15,
     height:158, 
     weight:58
    },
    {
        sname:'Hwang',
         age:20,
         height:175,
         weight:74
        }
]

class Table {
    //생성자.
    constructor(ary) {
       this.aryData = ary; //[{},{}]
    }
    //메소드.
    createTable() { // {sname:'Hong', age:15}
        this.tag = '<table border=1><tr>';

        // 해더 정보. <thead>...</thead>
        for(let field in this.aryData[0]) {
            this.tag += '<th>' + field + '</th>';
        }; 
        //this.tag += '<th>이름</th><th>나이</th>';
        this.tag += '</tr>';

        // 바디정보. <tbody>...</tbody>
        this.aryData.forEach((val) => {
            //console.log(val);
            this.tag +='<tr>';
            for (let field in val) {
                this.tag += '<td>' + val[field] + '</td>';
            }
            this.tag += '</tr>'
        });
        
        this.tag += '</table>';

        return this.tag;
    }
}

let table = new Table(data);
let str = table.createTable(); // => 표현식으로 화면출력.
console.log(str);
document.write(str);

console.log('HongKildong'.length); //11
let names = ['Hong', 'Hwang', 'Kim', 'Park'];
names.push('Choi');

let searchName = names.find(function(val) {
    // return val == 'Hwag'; // true => 반환.
    return val.length == 4;
});
console.log(searchName);


