var foo = {
    name: 'foo',
    nickname: 'babo'
};

console.log(foo.nickname);
delete foo.nickname  // foo 객체의 nickname property를 삭제
console.log(foo.nickname);

delete foo;
console.log(foo.name);  // 객체는 삭제할 수 없다.