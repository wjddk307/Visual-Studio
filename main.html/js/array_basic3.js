// array_basic3.js
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

 let gender = prompt('Male or Female 을 입력');
 console.log(gender);

let objAry = JSON.parse(data); // 문자열 => 오브젝트
console.log(objAry);

//표(table) 형태로 출력.
let result = objAry.reduce(function (accum, curr, currIdx) {
    if (currIdx == 0) {
        accum += '<table border=1>';
    }
    if (curr.gender == gender) { // 사용자가 입력한 값과 동일한 성별.
        accum += '<tr>';
        for(let field in curr) { // 오브젝트의 속성의 갯수만큼 생성.
            accum += `<td>${curr[field]}</td>`;
        }
        accum += '</tr>';
    }
    if (currIdx == objAry.length-1) {
        accum += '</table>';
    }
    return accum;
}, '');
document.write(result);