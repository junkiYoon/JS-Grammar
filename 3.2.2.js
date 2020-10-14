var foo = {
    name: 'foo',
    major: 'computer science'
};

console.log(foo.name);
console.log(foo['name']);
console.log(foo.nickname);

foo.major = 'electronics engineering'
console.log(foo.major);
console.log(foo['major']);

foo.age = 27;
console.log(foo.age);

foo['full-name'] = 'foo bar';
console.log(foo.full-name);  // (foo.full) -(마이너스) (name)으로 인식하기 때문에 오류.
console.log(foo['full-name']);