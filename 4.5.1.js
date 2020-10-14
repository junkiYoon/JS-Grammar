// prototype property와 [[prototype]]링크 구분
function Person(name){
    this.name = name
}

var foo = new Person('foo');

console.dir(Person);
console.dir(foo);

// 모든 객체는 자신을 생성한 함수의 prototype property가 가리키는
// 프로토타입 객체를 자신의 부모 객체로 설정한다 [[prototype]](=__proto__)