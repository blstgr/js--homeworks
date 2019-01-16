/**
 * Encode string into number array by Stirlitz method
 * @param {string} input string for encoding
 * @param {string} key key for encoding
 * @returns {Array<number>} Returns encoded array of numbers.
 */

// -Шифровка по методу Штирлица.Есть строка "Буря мглою недо кроет, вихри снежные крутя, то как зверь оа завоет то заплачет как дитя".Написать две функции - первая будет кодировать строку и возвращать массив номеров букв.Пробел тоже символ.Принимает функция первым параметром строку для кодирования, вторым фразу ключ.Сделать возмоность передачи фразы по умлчанию.фраза по умолчанию "абвгдеёжзийклмнопрстуфхцчшщъыьэюя ".Буква может иметь несколько значений - например буква у может быть представлена как 2 и 40. разделения на большие и малые буквы нет.
// Вторая функция принимает массив чисел и возвращает строку.

function encode(input, key = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя ,') {
    const ENCODER = key.toLowerCase().split('');
    const STR = input.toLowerCase().split('');

    let stack = {};
    let encodedStr = [];

    for (i = 0; i < STR.length; i++) {
        let index = ENCODER.indexOf(STR[i]);
        let indexRepeated = ENCODER.indexOf(STR[i], stack[STR[i]] + 1);

        if (!stack.hasOwnProperty(STR[i])) {
            stack[STR[i]] = index;
            encodedStr.push(index);

        } else if (indexRepeated !== -1) {
            encodedStr.push(indexRepeated);

        } else {
            encodedStr.push(index);

        }
    }

    return encodedStr;
}

console.log(encode('Буря мглою небо кроет, вихри снежные крутя, то как зверь она завоет, то заплачет как дитя'));

/**
 * Decode array of numbers to string by Stirlitz method
 * @param {Array<number>} input Array of numbers
 * @param {string} key key for decoding
 * @returns {string} Returns decoded string.
 */


function decode(input, key = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя ,') {

    const ENCODER = key.toLowerCase().split('');
    let decodedStr = [];

    for (i = 0; i < input.length; i++) {
        decodedStr.push(ENCODER[input[i]]);
    }

    return decodedStr.join('');
}



console.log(decode([1,
    20,
    17,
    32,
    33,
    13,
    3,
    12,
    15,
    31,
    33,
    14,
    5,
    1,
    15,
    33,
    11,
    17,
    15,
    5,
    19,
    34,
    33,
    2,
    9,
    22,
    17,
    9,
    33,
    18,
    14,
    5,
    7,
    14,
    28,
    5,
    33,
    11,
    17,
    20,
    19,
    32,
    34,
    33,
    19,
    15,
    33,
    11,
    0,
    11,
    33,
    8,
    2,
    5,
    17,
    29,
    33,
    15,
    14,
    0,
    33,
    8,
    0,
    2,
    15,
    5,
    19,
    34,
    33,
    19,
    15,
    33,
    8,
    0,
    16,
    12,
    0,
    24,
    5,
    19,
    33,
    11,
    0,
    11,
    33,
    4,
    9,
    19,
    32
]));


module.exports = {
    encode,
    decode,
};