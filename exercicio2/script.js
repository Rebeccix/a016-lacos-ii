let num = +prompt('Digite um numero');
let arrNum = []

for ( let i = 0; i <= 10; i++ ) {
    arrNum.push(i)
}

// for in -------------------------

for ( j in arrNum ) {
    console.log(`${num} X ${j} = ${num * j}`)
}