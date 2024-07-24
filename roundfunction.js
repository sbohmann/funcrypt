import {substitutions} from "./substitutions.js"
import {shuffles} from "./shuffles.js"

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
    let byteIndex = Math.floor(index / 2)
    let shift  = (index % 2  === 0)
        ? 4
        : 0
    return (key[byteIndex] >>> shift) & 0xf
}

// half = 16 bits (half of an)
// 0xxx ror by 1-9
// 10xx apply one out of 4 sets of 8 fixed or provided substitutions
// 11xx shuffle using one out of 2 fixed or provided shuffles
function performSubRound(state, key) {
    let parameter = key
    for (let value of state) {
        let shortValue = ((value >> 4) ^ value) & 0xf
        parameter ^= shortValue
    }
    if ((parameter & 0b1000) === 0) {
        // 0xxx
        let rotationAmount = (parameter & 0b0111) + 1
        return rotateRight(state, rotationAmount)
    } else if ((parameter & 0b1100) === 0b1000) {
        // 10xx
        let substitutionIndex = parameter & 0b0011
        return substitute(state, substitutionIndex)
    } else if ((parameter & 0b1100) === 0b1100) {
        // 10xx
        let shuffleIndex = parameter & 0b0011
        return shuffleBytes(state, shuffleIndex)
    } else {
        throw new RangeError("Programming error. This block should be unreachable")
    }
}

function rotateRight(state, n) {
    let value = (((((state[0] << 8) | state[1]) << 8) | state[2]) << 8) | state[3]
    let result = (value >>> n) | (value << (4 - n))
    return [(result >>> 24) & 0xff, (result >>> 16) & 0xff, (result >>> 8) & 0xff, result & 0xff]
}

function substitute(state, substitutionIndex) {
    let substitution = substitutions[substitutionIndex]
    let result = []
    for (let byteIndex = 0; byteIndex < 4; ++byteIndex) {
        let highNibbleIndex = byteIndex * 2;
        let highNibble = substituteNibble(
            nibbleForIndex(state, highNibbleIndex),
            substitution,
            highNibbleIndex)
        let lowNibbleIndex = byteIndex * 2 + 1;
        let lowNibble = substituteNibble(
            nibbleForIndex(state, lowNibbleIndex),
            substitution,
            lowNibbleIndex)
        result.push(highNibble << 4 | lowNibble)
    }
    return result
}

function nibbleForIndex(state, nibbleIndex) {
    let originalByteIndex = nibbleIndex / 2
    let originalByte = state[originalByteIndex]
    return (nibbleIndex % 2 === 0
        ? (originalByte >>> 4) & 0xf
        : originalByte & 0xf)
}

function substituteNibble(nibble, substitution, nibbleIndex) {
    if (nibble < 0 || nibble >= 16 || !Number.isInteger(nibble)) {
        throw new RangeError(`Not a valid nibble value: ${nibble}`)
    }
    let substitutionForPart = substitution[nibbleIndex]
    return substitutionForPart[nibble]
}

function shuffleBytes(state, shuffleIndex) {
    let shuffle = shuffles[shuffleIndex]
    let result = []
    for (let byteIndex = 0; byteIndex < 4; ++byteIndex) {
        let shuffledIndex = shuffle[byteIndex];
        result.push(state[shuffledIndex])
    }
    return result
}
