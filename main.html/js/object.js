// object.js
// 객체 = 인스턴스(클래스의 구조를 실체하나로 만든것.)
const student = {
    sno: '22-0123',
    sname: '홍길동',
    mathScore: 80,
    engScore: 90,
    age: 20,
    showInfo: function () {
        return '이름은' +  this.sname + ', 나이는' + this.age;
    }
}

const student2 = {
    sno: '22-0124',
    sname: '김길동',
    mathScore: 88,
    engScore: 99,
    age: 21,
    showInfo: function () {
        return '이름은' +  this.sname + ', 나이는' + this.age;
    }
}

class Student {
      constructor(sno, sname, age) { //생성자.
         this.sno = sno;
         this.sname = sname;
         this.age = age;
      }
      //메소드. 
      setMathScore(mathScore) {
          this.mathScore = mathScore;
      }
      setEngScore(engScore) {
          this.engScore = engScore;
      }
      showInfo() {
        return '이름은' +  this.sname + ', 나이는' + this.age;
      }
      showScore() {
          return '영어점수는' + this.engScore + ' 수학점수는' + this.mathScore;
      }
}

const student3 = new Student('22-0111', '김익수', '23');
student3.setMathScore(88);
student3.setEngScore(90);

console.log(student.showInfo());
console.log(student2.showInfo());
console.log(student3.showInfo(),student3.showScore());