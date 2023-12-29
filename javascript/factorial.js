console.log('hello from js')

function fectorialOfNumber(n){
    let factorial = 1

    for(let i=2; i<=n; i++){
        factorial = factorial * i
    }   

    return factorial
}

// Time complexity = O(n)

console.log(fectorialOfNumber(10))