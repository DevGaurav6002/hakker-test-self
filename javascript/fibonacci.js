// function fibonacci(n){
//     var fiboArr = []
//     let sum = 0
//     for(let i=0; i<n;i++){
//        if(i < 2){
//         fiboArr.push(i)
//        }
//         if(i >= 2 && fiboArr.length >= 2){
//             sum = fiboArr[i-2] + fiboArr[i-1]
//             fiboArr.push(sum)
//         }
//     }
//     return fiboArr
// }

function fibonacci(n){
    var fiboArr = [0,1]
    for(let i=2; i<n;i++){
        fiboArr[i] = fiboArr[i-1] + fiboArr[i-2]
    }
    return fiboArr
}

// Time complexity = O(n)

console.log('Fibonacci', fibonacci(7))