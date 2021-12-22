
// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let alf = [8, 65, 87, 112, 911];
let book = ['father', 'mother', 'desk', 'road', 'sitizen'];
let they = [ true, false,'window', 54, 'vivaldi', 'three'];
console.log(alf);
console.log(book);
console.log(they);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let mass=[];
mass[0]='mister';
mass[1]='anderson';
mass[2]='welcom';
mass[3]='back';
console.log(mass);
document.write(mass);



let array = [];
array[0] = 'Rybka';
array[1] = 'plavayet';
array[2] = 'po';
array[3] = 'dnu';
array[4] = 'vypiem';
array[5] = 'stopochku';
array[6] = 'odnu';
console.log(array);
document.write(array);


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.



for (let i = 0; i <= 9; i++)
{
    document.write(`<div>mery cristmass</div>`);
}

for (let i = 0; i < 10; i++)
{
    document.write(`<div>${i} - count chickens</div>`);
}

let f =0;
while(f<20)
{
    document.write(`<h1>i'll definitely make it</h1>`);
    f++;
}

let x=1;
while(x<=20)
{
    document.write(`<h1>${x} - apples</h1>`);
    x++;
}


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let numArray = [2,4,7,9,15,26,47,55,111,800];
for (i = 0; i < numArray.length; i++) {
    console.log(numArray[i]);

}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let stringArray = ['cow', 'yellov', 'fish', 'desk', 'beautifly', 'book', '2022', 'mons', 'skoda', 'exel'];
for (i = 0; i < stringArray.length; i++) {
    console.log(stringArray[i]);
}


// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let allArray = [false, 'two', 1996, true, 'okten',23,45,'vasia',{},[],'hi'];
for (i = 0; i < allArray.length; i++) {
    console.log(allArray[i]);
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

let arrayBoolean = [false, 'two', 1996, true, 'okten', 23, 45, 'vasia', {}, [], 'hi'];
for (i = 0; i < arrayBoolean.length; i++) {
    if (typeof arrayBoolean[i] === 'boolean') {
        console.log(arrayBoolean[i]);
    }
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

let arrayNumber = [false, 'two', 1996, true, 'okten', 23, 45, 'vasia', {}, [], 'hi'];
for (i = 0; i < arrayNumber.length; i++) {
    if (typeof arrayNumber[i] === 'number') {
        console.log(arrayNumber[i]);
    }
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

let arrayString = [false, 'two', 1996, true, 'okten', 23, 45, 'vasia', {}, [], 'hi'];
for (i = 0; i < arrayString.length; i++) {
    if (typeof arrayString[i] === 'string') {
        console.log(arrayString[i]);
    }
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.

let newEmptyArray = [];
newEmptyArray[0] = 'Happy';
newEmptyArray[1] = 'New';
newEmptyArray[2] = 2022;
newEmptyArray[3] = 'Chto';
newEmptyArray[4] = 'Gde';
newEmptyArray[5] = 'Kuda';
newEmptyArray[6] = 'Sinho Faza Tron';
newEmptyArray[7] = true;
newEmptyArray[8] = 2019;
newEmptyArray[9] = false;

for (let i = 0; i < newEmptyArray.length; i++) {
    console.log(newEmptyArray[i]);
}


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 10; i++) {
    console.log('поточний крок циклу : ' + i + ' ');
    document.write('поточний крок циклу : ' + i + ' ');
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i++) {
    console.log('поточний крок циклу : ' + i + ' ');
    document.write('поточний крок циклу : ' + i + ' ');
}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 100; i+=2) {
    console.log('поточний крок циклу : ' + i + ' ');
    document.write('поточний крок циклу : ' + i + ' ');
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
    if(i % 2 === 0){
        console.log('поточний крок циклу : ' + i + ' ');
        document.write('поточний крок циклу : ' + i + ' ');
    }
}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (let i = 0; i < 100; i++) {
    if(i % 2 === 1){
        console.log('поточний крок циклу : ' + i + ' ');
        document.write('поточний крок циклу : ' + i + ' ');
    }
}

