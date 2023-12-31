function primeNumber(n){
    if(n < 2){
        return false
    }

    for(let i = 2; i<n; i++){
        if(n%i === 0){
            return false
        }
    }

    return true
}

// Time complexity = O(n)

console.log(primeNumber(0))
console.log(primeNumber(1))
console.log(primeNumber(5))
console.log(primeNumber(4))
