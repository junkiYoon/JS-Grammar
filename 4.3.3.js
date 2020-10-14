// // 내부 함수
// function parent(){
//     var a = 100;
//     var b = 200;

//     function child(){
//         var b = 300;
//         console.log(a);  // 부모함수의 변수에 접근이 가능하다.
//         console.log(b);
//     }
//     child();
// }
// parent();
// child();  // 내부 함수 호출이 불가능하다.



// 함수 외부에서 특정 함수 스코프 안에 선언된 내부 함수 호출하기
// (부모 함수에서 내부 함수를 외부로 리턴)
function parent(){
    var a = 100;
    var child = function(){
        console.log(a);
    }
    return child;  // 내부 함수를 리턴
}
var inner = parent();
inner();
// inner()와 같은 함수를 closure라 한다.