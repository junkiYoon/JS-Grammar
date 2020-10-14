var foo = function(){
    return function(){
        console.log('this function is the return value')
    };
};
// foo는 내부 함수의 function을 참조하고 있다.
var bar = foo();  // bar에 foo함수의 리턴값인 함수가 들어간다.
bar();