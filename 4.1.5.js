// console.log(add(1, 2));

// function add(x, y){  // 함수 선언문으로 선언한 함수는 어디 쓰든 사용 가능
//     return x + y;
// }


console.log(add(3, 4));

var add = function(x, y){  // 함수 표현식으로 선언한 함수는 선언 후에 사용 가능
    return x + y;
};

console.log(add(3, 4));