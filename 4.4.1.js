function func(arg1, arg2){
    console.log(arg1, arg2);
}
func();  // 넘기는 인자가 없을 경우 undefined
func(1);
func(1, 2);
func(1, 2, 3);  // 초과된 인자는 무시한다.

// argument객체는 함수가 호출될 때 인자들과 함께 암묵적으로 전달된다.
function add(a, b){
    console.dir(arguments);
    return a + b;
}
console.log(add(1));
console.log(add(1, 2));
console.log(add(1, 2, 3));

// 인자를 arguments 객체로 넘김으로써 유용한 예제
// (매개변수 개수가 정확하게 정해지지 않은 함수를 구현하거나
// 전달된 인자의 개수에 따라 다른 처리를 해야하는 함수를 정의할 때 유용)
function sum(){
    var result = 0;
    for(var i = 0; i < arguments.length; i++){
        result += arguments[i];
    }
    return result;
}
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));