var myObject = {
    name: 'foo',
    sayName: function(){
        console.log(this.name);
    }
};

var otherObject = {
    name: 'bar'
};

otherObject.sayName = myObject.sayName;  // otherObject에 myObject의 sayName매서드를 추가한다.

myObject.sayName();  // this가 myObject를 가리킨다.
otherObject.sayName();  // this가 otherObject를 가리킨다.