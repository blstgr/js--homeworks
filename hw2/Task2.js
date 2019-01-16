/**
 * Filter array. Only numbers that greater than 0 and less then 10 pass to result.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */

// -В функцию передается массив с числами. Функция должна возвращать массив который содержит только те числа, которые больше нуля и меньше 10 - ти.
// Для этого используйте вспомогательную функцию isNumberInRange, которая проверяет, что число больше нуля и меньше 10. Если это так - функция возвращает true, если не так - false.

function advancedFilter(input) {

    function isNumberInRange(number) {
        return (number > 0 && number < 10);
    }
    return input.filter(isNumberInRange);
}

console.log(advancedFilter([-5, 0, 2, 1, -3, 12]));

module.exports = advancedFilter;