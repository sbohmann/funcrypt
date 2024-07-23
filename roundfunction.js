export function roundFunction(inputState, key) {
    if (inputState.length !== 4) {
        throw new RangeError(`expected state length 4, provided: ${inputState.length}`)
    }
    let state = inputState
    for (let index = 0; index < 8; ++index) {
        state = performSubRound(state, subRoundKey(key, index))
    }
    return state
}

function subRoundKey(key, index) {
    let byteIndex = index / 2
    let shift  = (index % 2  === 0)
        ? 4
        : 0
    return (key[byteIndex] >> shift) & 0x0f;
}

// half = 16 bits (half of a1)
// 0xxx ror by 1-9
// 10xx xor the halves after negating none/left/right/both
// 110x xor the halves after optionally counter-rotating by 8 bits
// 111x shuffle by one out of two provided shuffles

function performSubRound(state, key) {
    if ((key & 0b1000) === 0) {
        // 0xxx
        let rotationAmount = (key & 0b0111) + 1
        return rotateRight(state, rotationAmount)
    } else if ((key & 0b1100) === 0b1000) {
        // 10xx
        return undefined // TODO
    }
}

function rotateRight(value, n) {
    return (value >> n) | (value << (4 - n))
}
