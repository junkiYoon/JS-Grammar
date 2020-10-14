// 디폴트 프로토타입 객체의 변경
function Person(name){
    this.name = name;
}

console.log(Person.prototype.constructor);

var foo = new Person('foo');
console.log(foo.country);

Person.prototype = {
    country: 'korea',
};
console.log(Person.prototype.constructor);
foo.prototype = Person.prototype;

var bar = new Person('bar');
console.log(foo.country);
console.log(bar.country);
console.log(foo.constructor);
console.log(bar.constructor);