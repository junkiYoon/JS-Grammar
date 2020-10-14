// 프로토타입 객체의 동적 매서드 생성
function Person(name){
    this.name = name;
}

var foo = new Person('foo');

// foo.sayHello();

Person.prototype.sayHello = function(){
    console.log('Hello');
}

foo.sayHello();
console.dir(Person.prototype);
var baz = new Person('baz');
baz.sayHello();