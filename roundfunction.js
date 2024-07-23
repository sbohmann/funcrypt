import {substitutions} from "./substitutions.js";

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
    return (key[byteIndex] >>> shift) & 0x0f;
}

// half = 16 bits (half of a1)
// 0xxx ror by 1-9
// 10xx apply one out of 4 sets of 8 fixed or provided substitutions
// 11xx shuffle using one out of 2 fixed or provided shuffles
function performSubRound(state, key) {
    if ((key & 0b1000) === 0) {
        // 0xxx
        let rotationAmount = (key & 0b0111) + 1
        return rotateRight(state, rotationAmount)
    } else if ((key & 0b1100) === 0b1000) {
        // 10xx
        let substitutionIndex = key & 0b0011
        return substitute(state, substitutionIndex)
    } else if ((key & 0b1110) === 0b1100) {
        // 10xx
        // TODO shuffle
    } else {
        throw new RangeError("Programming error. This block should be unreachable")
    }
}

function rotateRight(value, n) {
    return (value >>> n) | (value << (4 - n))
}

function substitute(value, substitutionIndex) {
    let substitution = substitutions[substitutionIndex]
    let result = 0
    for (let nibbleIndex = 0; nibbleIndex < 4; ++nibbleIndex) {
        let originalNibbleValue = value & 0xf0000000
        value <<= 4
        result <<= 4
        result |= substituteNibble(originalNibbleValue, substitution, nibbleIndex)
    }
    return result
}

function substituteNibble(nibble, substitution, nibbleIndex) {
    if (nibble < 0 || nibble >= 16 || !Number.isInteger(nibble)) {
        throw new RangeError(`Not a valid nibble value: ${nibble}`)
    }
    let substitutionForPart = substitution[nibbleIndex];
    return substitutionForPart[nibble]
}
