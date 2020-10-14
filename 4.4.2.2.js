// 전역 객체와 전역 변수와의 관계
var foo = "I'm foo";
console.log(foo);
console.log(window.foo);
// foo라는 변수는 전역객체 window의 프로퍼티이다.

// 함수를 호출할 때 this 바인딩
var test = 'This is test';
console.log(window.test);
var sayFoo = function(){
    console.log(this.test);  // 이는 console.log(window.test); 와 같다.
    // 왜냐하면 함수를 호출할 때 this는 전역객체 window에 바인딩되기 때문
}
sayFoo();

// // 내부 함수의 this 바인딩 동작
// var value = 100;
// var myObject = {
//     value: 1,
//     func1: function(){
//         this.value += 1;
//         console.log(`func() called. this.value : ${this.value}`);
//         func2 = function(){
//             this.value += 1;
//             console.log(`func2() called. this.value : ${this.value}`);
//             func3 = function(){
//                 this.value += 1;
//                 console.log(`func3() called. this.value : ${this.value}`);
//             }
//             func3();
//         }
//         func2();
//     }
// };
// myObject.func1();
// // 내부함수만 fun2와 fun3의 this는 window를 가리킨다.

// 내부 함수의 this 바인딩 문제를 해결
var value = 100;
var myObject = {
    value: 1,
    func1: function(){
        var that = this;
        this.value += 1;
        console.log(`func1() called. value : ${this.value}`);

        func2 = function(){
            that.value += 1;
            console.log(`fun2() called. this.value : ${that.value}`);

            func3 = function(){
                that.value += 1;
                console.log(`func3() called. this.value : ${that.value}`);
            }
            func3();
        }
        func2();
    }
};
myObject.func1();