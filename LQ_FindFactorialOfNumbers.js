// Find the Factorial of any numbers
// FACTORIl 5! = 5 * 4 * 3 * 2 * 1 = 120

function finfFactorialRecursive(num) {
    if (num === 0) return 0;
    if (num === 1) return num

    return num * finfFactorialRecursive(num - 1);

}

finfFactorialRecursive(2);


function finfFactorialIterative(num) {
    var fact = 1;
    for(let i=2; i<=num; i++) {
        fact = fact * i;
    }
    return fact;
}

finfFactorialIterative(2)