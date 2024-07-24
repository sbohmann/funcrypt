export function shuffleKey(key) {
    if (key.length !== 32) {
        throw new RangeError(`Key length ${key.length} != 32`)
    }
    for (let index = 0; index < 16; ++index) {
        key[index] ^= key[index + 16]
        key[index + 16] ^= key[16 - index]
    }
}
