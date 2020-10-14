var arr = ['zero', 'one', 'two', 'three'];
console.log(arr.length);
delete arr[2];
console.log(arr);
console.log(arr.length);
// delete는 값만 제거하므로 property는 그대로고 length값도 그대로

var arr = ['one', 'two', 'three', 'four'];
arr.splice(2, 1);
console.log(arr);
console.log(arr.length);
// splice는 property를 완전히 제거하므로 length값도 줄어든다.
// splice(시작위치(인덱스), 삭제할 개수, 삭제한 위치에 추가할 요소(생략 가능))