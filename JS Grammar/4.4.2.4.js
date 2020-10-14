// apply()매서드를 이용한 명시적인 this 바인딩
// 형식 : function.apply(thisArg, argArray)
function Person(name, age, gender){
    this.name= name;
    this.age = age
    this.gender = gender;
}

var foo = {};

Person.apply(foo, ['foo', 30, 'man']);
console.dir(foo);

// apply()매서드를 활용한 arguments 객체의 배열 표준 매서든 slice()활용 코드
function myFunction(){
    console.dir(arguments);
    // arguments.shift(); 에러 발생
    var args = Array.prototype.slice.apply(arguments);
    // 배열의 매서드인 slice를  arguments에 적용시킨 것이다. (apply를 사용하여 this를 arguments에 바인딩시킴)
    console.dir(args);
}
myFunction(1, 2, 3);

// slice()매서드 사용 예제
var arrA = [1, 2, 3, 4, 5, 6, 7];
var arrB = arrA.slice(0);
var arrC = arrA.slice();
var arrD = arrA.slice(1);
var arrE = arrA.slice(1, 4);  // slice(시작인덱스, 끝인덱스-1);

console.log(arrA);
console.log(arrB);
console.log(arrC);
console.log(arrD);
console.log(arrE);