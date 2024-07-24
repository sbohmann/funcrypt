export function shuffleKey(key) {
    let originalKey = Array.from(key)
    if (key.length !== 32) {
        throw new RangeError(`Key length ${key.length} != 32`)
    }
    for (let index = 0; index < 16; ++index) {
        key[index] ^= originalKey[index + 16]
        key[index + 16] ^= originalKey[15 - index]
    }
}
