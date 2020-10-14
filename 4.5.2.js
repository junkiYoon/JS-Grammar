// 객체 리터럴 방식으로 생성된 객체의 프로토타입 체이닝
var myObject = {
    name: 'foo',
    sayName: function(){
        console.log(`My Name Is ${this.name}`);
    }
};
myObject.sayName();
console.log(myObject.hasOwnProperty('name'));
console.log(myObject.hasOwnProperty('nickName'));
myObject.sayNickName();