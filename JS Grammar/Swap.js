// SWAP함수 만들기
var obj1 = {value : 10};
var obj2 = {value : 100};

function SWAP(objA, objB){
    var temp = {};
    temp.value = objA.value;
    objA.value = objB.value;
    objB.value = temp.value;
}

console.log(obj1.value);
console.log(obj2.value);

SWAP(obj1, obj2);

console.log(obj1.value);
console.log(obj2.value);