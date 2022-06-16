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


class Estimate { //class 한개엔  생성자 한개
   constructor(param) { //생성자 //constructor: 필수함수
      this.unit = param;
   }
   //견적가.
   getEstimate(unitType, width, height) {
       let priceInfo = this.unit.find(item => item.type == unitType); //{type:'wood', price:100}
       return priceInfo.price * width * height;
   }
   //새로운 요소 추가.
   addUnit(unit) {
       this.unit.push(unit);
   }
}

let unitInfo = [{type:'wood', price:100}, {type:'iron',price:300}, {type:'plastic',price:200}];
const estimator = new Estimate(unitInfo);
estimator.addUnit({type: 'glass', price: 500}); //새로운 단위 추가

let amt = estimator.getEstimate('glass', 20, 20);
console.log(amt);

//object 타입으로 가능.
let obj = {
    //unit: unitInfo,
    //getEstimate: funtion(){},
    //addUnit: funtion(){}
}; 
obj.unit = unitInfo;
obj.getEstimate = function(unitType, width, height) {
    let priceInfo = this.unit.find(item => item.type == unitType);
    return priceInfo.price * width * height;
}
obj.addUnit = function(unit) {
    this.unit.push(unit);
}
let result = obj.getEstimate('wood', 20, 20);
console.log(result);