export function xor(a, b) {
    if (a.length !== b.length) {
        throw new RangeError(`Lengths of blocks a [${a.length}] and b [${b.length}] are not equal`)
    }
    let length = a.length
    let result = []
    for (let index = 0; index < length; ++index) {
        result.push(a[index] ^ b[index])
    }
    return result
}
