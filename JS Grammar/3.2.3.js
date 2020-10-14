var foo = {
    name: 'foo',
    age: 27,
    major: 'computer science'
};

var prop;
for(prop in foo){  // prop이 foo안의 property값들로 계속 변경.
    console.log(prop, foo[prop]);
}