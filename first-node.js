// console.log('a');

// console.log('b');

// setTimeout(() => console.log('c'), 3000)

// setTimeout(() => console.log('d'), 0)

// console.log('e');

async function print()
{
    const printA = new Promise((resolve,reject) => {
        resolve(console.log('a'))
    })

    const printB = printA.then(() => {
        return new Promise((resolve,reject) => {
            resolve(console.log('b'))
        })
    })
    const printC = printB.then(() => {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve(console.log('c'))
            },3000)
        })
    })
    const printD = printC.then(() => {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve(console.log('d'))
            },0)
        })
    })
    const printE = printD.then(() => {
        return new Promise((resolve,reject) => {
            resolve(console.log('e'));
        })
    })
    let a = await printA;
    let b = await printB;
    let c = await printC;
    let d = await printD;
    return a;
}
print();
