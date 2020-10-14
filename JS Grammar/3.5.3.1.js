// 배열의 push 매서드
var arr = ['zero', 'one', 'two'];  // length = 3

arr.push('three');  // push 매서드 : lenght가 가르키는 인덱스에 값을 넣는다.
console.log(arr);
console.log(arr.length);  // length = 4

arr.length = 5;
arr.push('four');  // lenght = 6
console.log(arr);
console.log(arr.length)