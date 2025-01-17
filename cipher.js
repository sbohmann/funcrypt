import {roundFunction} from './roundfunction.js'
import {xor} from './bitwiseoperations.js'

export function encryptBlock(plainText, key) {
    if (plainText.length < 8) {
        throw new RangeError(`plainText length [${plainText.length}] < 8`)
    }
    if (key.length !== 32) {
        throw new RangeError(`key length [${key.length}] != 32`)
    }
    let state = plainText
    for (let round = 0; round < 8; ++round) {
        let roundKey = extractRoundKey(round, key);
        state = processRound(
            state,
            state => roundFunction(state, roundKey))
    }
    return state
}

function extractRoundKey(round, rawKey) {
    let roundKeyLength = 4;
    let start = round * roundKeyLength
    return rawKey.slice(start, start + roundKeyLength)
}

function processRound(state, f) {
    let aIn = state.slice(0, 4)
    let bIn = state.slice(4, 8)

    let aOut = bIn
    let bOut = xor(aIn, f(bIn))

    return [...aOut, ...bOut]
}
