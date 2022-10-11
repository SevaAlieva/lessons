// console.log("Hello World")
// console.log("123")
// console.log(123)

// alert("hi")
// alert("20.08.2022")


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
// исключение, в результате выдает 1
console.log ("123" + 123);

// BigInt
let bigi = 1234567n;
console.log(bigi);

// string(строка - объект, помещенный в кавычки)

let str1 = "Welcome" + " " + "on cours" + "," + " "+ "Seva!";
let str2 = 'hello ${str1}';
// ``имеют более расширенную функциональность, в отличие от тех двух. В неё можно вставить какое-то выражение при помощи $ и {}
let str3 = `Hello ${str1}`;
console.log(str1);
console.log(str2);
console.log(str3);

// (Boolean, булевый-логический) Logic - True/False
let dotCheck = true;
console.log(dotCheck);
let notDotCheck = false;
console.log(notDotCheck);

let one = 5
let two = 10

console.log(one < two);

// Null(специальное значение, которое не относится ни к одному из типов данных, описанных выше) Отдельный тип данных.
//  Не будет ссылкой на несуществующий обЪект(в других ЯП так; нулевой указатель) . Просто показывает, что тут пусто

let nuller = null;
console.log(nuller);

// undefined(специальное значение. Отдельный тип, говорит о том, что не было присвоено значений)
let text
//  let text = undefined(можем такое значение просто присвоить, но так лучше не делать) 
// Обычно используем null, если хотим, чтобы переменная была пустой. Undefined используем для проверки, типо, была ли наша переменная назначена
console.log(text);

// typeof(предназначен для того, чтобы мы узнали текущий тип агрумента. Возвращает тип аргумента)
// полезен, когда мы хотим обработать различные типы значений по-разному; хотим сделать какое-то тестирование(напр:что за тип д-х нах-ся в перем-й
// как выглядит форма синтаксического понятия typeof:
typeof(x)
// x - значение, которое мы пытаемся вызвать
typeof x

str1 = false

// console.log(typeof (nuller));
// console.log(typeof (dotCheck));
// console.log(typeof ("something"));
// console.log(typeof (str1));

// document.getElementById("one").innerHTML = "CIRCUS"
// document.getElementById("one").innerHTML = 1234
// document.getElementById("one").innerHTML = '<h1>Stay</h1>'

// document.querySelector(".black").innerHTML = '<b>BLACK</b>';

let inputIN = document.querySelector(".text-in");
let button = document.querySelector(".check-in");
let div = document.querySelector(".result");

button.onclick = function() {
    // кнопка будет нажата
    console.log("да")

    // console.log(inputIN.value);
    
    // let e = inputIN.value; //строка по умолчанию
    let e = +inputIN.value; //перевод в число

    console.log(e)

    let h = e + 15;
    console.log(h);
    
    // div.innerHTML = h;
}



