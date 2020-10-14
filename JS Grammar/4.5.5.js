// 기본 데이터 타입의 확장
String.prototype.testMethod = function(){
    console.log('This is the String.prototype.testMethod()');
}

var str = 'this is test'

str.testMethod();

console.dir(String.prototype);

// 사용자가 직접 정의한 매서드들을 추가하는 것을 허용한다.