var colorArray = ['orange', 'yellow', 'green'];
console.log(colorArray[0]);
console.log(colorArray[1]);
console.log(colorArray[2]);

var colorsObj = {
    '0': 'orange',
    '1': 'yellow',
    '2': 'green'
}

console.log(colorsObj[0]);
console.log(colorsObj[1]);
console.log(colorsObj[2]);

console.log(typeof colorArray);
console.log(typeof colorsObj);

console.log(colorArray.length);
console.log(colorsObj.length);

colorArray.push('red');
colorsObj.push('red');  // 모객체인 object.prototype에 push() 메서드가 없어서 오류.