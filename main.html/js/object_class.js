//object_class.js

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