/**
 * Checks string is polindrome or not
 * @param {string} input
 * @returns {boolean} Returns is string polindroe or not.
 */

// -В википедии прочитать что такое палиндромы. Функция должна принимать строку и выдавать true если строка является палиндромом и false если она таковой не является. Игнорировать большие и малые буквы.


function isPolindrome(input) {

    function removeSpace(element) {
        return element !== ' ';
    }

    const str = input.toLowerCase().split('').filter(removeSpace);
    const strReverse = str.reverse();

    let i = 0;

    for (let j = 0; j < strReverse.length; j++) {
        if (str[i] !== strReverse[j]) {
            return false;
        }
        i += 1;
    }

    return true;
}

console.log(isPolindrome('А роза упала на лапу азора'));

module.exports = isPolindrome;