export function xor(a, b) {
    if (a.length !== b.length) {
        throw new RangeError(`Lengths of buffers a [${a.length}] and b [${b.length}] are not equal`)
    }
    let length = a.length
    let result = new Buffer(length)
    for (let index = 0; index < length; ++index) {
        result[index] = a[index] ^ b[index]
    }
    return result
}
