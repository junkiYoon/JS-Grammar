// 프로토타입의 체이닝은 읽기, 매서드 호출에서만 발생한다.
function Person(name){
    this.name = name;
}

Person.prototype.country = 'korea';

var foo = new Person('foo');
var bar = new Person('bar');
console.log(foo.country);
console.log(bar.country);
foo.country = 'USA';

console.log(foo.country);
console.log(bar.country);