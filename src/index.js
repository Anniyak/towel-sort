
// You should implement your task here.

module.exports = function towelSort(matrix) {
    let answer = [];
    if (!matrix) return answer;
    let toRight = true;
    matrix.forEach(element => {
        if (toRight) {
            for (let i = 0; i < element.length; i++)
                answer.push(element[i]);
        }
        else {
            for (let i = element.length - 1; i >= 0; i--)
                answer.push(element[i]);
        }
        toRight = !toRight;
    });
    return answer;
}
