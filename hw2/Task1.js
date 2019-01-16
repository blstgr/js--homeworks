/**
 * Filter negative numbers from array
 * @param {Array<number>} input
 * @returns {Array<number>} Returns array that contains positive numbers only.
 */

//-В функцию передается массив с числами. Функция должна возвращать из него новый массив, где останутся только положительные числа.
// Создайте для этого вспомогательную функцию isPositive(), которая параметром будет принимать число и возвращать true, если число положительное, и false если отрицательное.

function negativeFilter(input) {

    function isPositive(number) {
        return number > 0;
    }
    return input.filter(isPositive);
}

console.log(negativeFilter([-5, 6, 2, 1, -3]));

module.exports = negativeFilter;