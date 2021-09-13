
let value1 = parseInt(prompt('Минимальное значение числа для игры', '0'));
let minValue = value1 || '0';
minValue = (value1 < -999) ? -999: value1;

let value2 = parseInt(prompt('Максимальное значение числа для игры', '100'));
let maxValue = value2 || '100';
maxValue = (value2 > 999) ? 999: value2;

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');



orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;


let BelowTwenty = ['ноль', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять', 'одинадцать', 'двенадцадь', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать' ];
    let Tens = [ 'сто', 'десять', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто' ];

if (answerNumber < 20) {
    answerNumber = (BelowTwenty[int]);
    answerField.innerText = answerNumber;

}



//кнопка заново

document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = 0;
    maxValue = 100;
    orderNumberField.innerText = 1;
    prompt('Минимальное знание числа для игры', '0');
    prompt('Максимальное знание числа для игры', '100');
    answerNumber = Math.floor((minValue + maxValue) / 2);
    const answerRandom = Math.round(Math.random() * 4);
            if (answerRandom === 2) {
                answer = `Вы загадали число ${answerNumber }?`;
            } else if (answerRandom === 3) {
                answer = `Легко! Это число ${answerNumber }?`;
            } else {
                answer = `Кажется, я знаю - это ${answerNumber }?`;
            }
            answerField.innerText = answer;
    gameRun = true;
})

// кнопка больше

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue) {
            const phraseRandom = Math.round(Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber + 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;

            const answerRandom = Math.round(Math.random() * 4);
            if (answerRandom === 2) {
                answer = `Вы загадали число ${answerNumber }?`;
            } else if (answerRandom === 3) {
                answer = `Легко! Это число ${answerNumber }?`;
            } else {
                answer = `Кажется, я знаю - это ${answerNumber }?`;
            }
            answerField.innerText = answer;
        }

    }
})

// кнопка меньше

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue) {
            const phraseRandom = Math.round(Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber = Math.floor((maxValue + minValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;

            const answerRandom = Math.round(Math.random() * 4);
            if (answerRandom === 2) {
                answer = `Вы загадали число ${answerNumber }?`;
            } else if (answerRandom === 3) {
                answer = `Легко! Это число ${answerNumber }?`;
            } else {
                answer = `Кажется, я знаю - это ${answerNumber }?`;
            }
            answerField.innerText = answer;
        }
    }
})






document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun) {
        if (answerNumber === 0) {
            answerField.innerText = `Очень банально`;
        } else if (answerNumber < 0) {
            answerField.innerText = `Не люблю отрицательные числа!`;
        } else if (answerNumber > 100) {
            answerField.innerText = `С вами приятно иметь дело!`;
        } else if (answerNumber > 10) {
            answerField.innerText = `Какой я молодец!`;
        }
        gameRun = false;
    }
})


