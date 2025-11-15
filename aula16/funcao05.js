// RECURSIVIDADE

function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))

/*

n * fatorial(n - 1)
5 * 4 = 20
4 * 3 = 12
3 * 2 = 6
2 * 1 = 2 
if(n == 1) acabou o cálculo

2 * 1 = 2
3 * 2 = 6 
4 * 6 = 24
5 * 24 = 120

*/

