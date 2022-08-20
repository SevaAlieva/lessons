// console.log("Hello World")
// console.log("123")
// console.log(123)

// alert("hi")


// var number = 1;
// number = 5;
// console.log(number);

// let num = 123;
// num = 321;
// console.log(num);

// const happy = "09.03.2006";
// happy = "2006.03.09"
// console.log(happy);

// Number
let number = 12345;
console.log(number);
// Дополнения к Number
console.log(1/0);
console.log(-1/0);
console.log(Infinity);
console.log(-Infinity);
console.log("hello" / 123);
console.log(NaN + 5);
console.log(NaN ** 0);

// BigInt
let bigi = 1234567n;
console.log(bigi);

// string(строка - объект, помещенный в кавычки)

let str1 = "hello" + " " + "The Wardo!";
let str2 = 'hello ${str1}';
// ``имеют более расширенную функциональность, в отличие от тех двух. В неё можно вставить какое-то выражение при помощи $ и {}
let str3 = `hello ${str1}`;
console.log(str1);
console.log(str2);
console.log(str3);

// (булевый-логический. Boolean) Logic - True/False
let dotCheck = true;
console.log(dotCheck);
let notDotCheck = false;
console.log(notDotCheck);

let one = 5
let two = 10

console.log(one < two);

// Null(специальное значение, которое не относится ни к одному из типов данных, описанных выше) Отдельный тип данных.
//  Не будет ссылкой на несуществующий обЪект(в других ЯП так, нулевой указатель) . Просто показывает, что тут пусто

let nuller = null;
console.log(nuller);

// undefined(специальное значение. Отдельный тип, говорит о том, что не было присвоено значений)
let text
// let text = undefined(можем такое значение просто присвоить, но так лучше не делать) 
// Обычно используем null, если хотим, чтобы переменная была пустая. Undefined используем для проверки, типо, была ли наша переменная назначена
console.log(text);
alert("hi")