// function_table.js

//테이블 전체를 생성해주는 함수.
function createTable(aryData) {
    let fields = ['sname', 'age', 'height', 'weight'];
    let tag = '<table border=1>';

    let head  = createHead(fields); // <thead><tr><td>값</td>...</tr></thead>
    tag += head;
   
    let body = createBody(aryData); // <tbody><tr><td>값</td>...</tr></tbody>
    tag += body;

    tag +='</table>'
    // <table>...</table> 
    return tag;
}
//헤더부분 함수.
function createHead(ary){
    let tag = '<tr>';
    for (let field in ary) {
        tag += '<td>' + ary[field] + '</td>';
    }
    tag += '</tr>'
    return tag;
}

//바디부분 함수.   function(num) {}
function createBody(ary) {  //[{sname:?, age:?, height:?}, {}, {}]
    let tag = '<tr>';
    ary.forEach((values) => {
        for (let field in values) {
            tag += '<td>' + values[field] + '</td>';
        }
        tag += '</tr>'
    });
    return tag;
}


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

let str = createTable(data);
document.write(str);