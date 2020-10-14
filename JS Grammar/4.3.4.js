// 함수를 리턴하는 함수
// -> 함수를 호출함과 동시에 다른 함수로 바꾸거나,
//    자기 자신을 재정의 할 수 있다!
var self = function(){
    console.log('a');
    return function(){
        console.log('b');
    };
}
self = self();
self();