let values = []
for (let n = 0; n < 4; ++n) {
    values.push(n)
}
console.log(values)

function shuffledArray(input) {
    let pool = Array.from(input)
    let result = []
    for (let index = 0; index < 4; ++index) {
        let poolIndex = Math.floor(Math.random() * pool.length)
        result.push(pool[poolIndex])
        pool.splice(poolIndex, 1)
    }
    return result
}

process.stdout.write(`const shuffles = [`)
for (let block = 0; block < 8; ++block) {
    process.stdout.write(block === 0 ? '\n  [' : ',\n  [')
    process.stdout.write(`  ${shuffledArray(values)}`)
    process.stdout.write('  ]')
}
process.stdout.write(`\n]\n`)
