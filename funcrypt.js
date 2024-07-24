import * as fs from 'fs'

import {encryptBlock} from './cipher.js'
import {shuffleKey} from "./shufflekey.js";

let plainText = Array.from(fs.readFileSync(0))

if (plainText.length !== 8) {
    console.error(`Currently, only a single block is supported. Input length ${plainText.length} != 8`)
    process.exit(1)
}

if (process.argv.length !== 4 || process.argv[2] !== '-key') {
    exitWithArgumentSyntaxDescription()
}

const expectedKeyStringLength = 64;
let key = []
let keyString = process.argv[3]
if (keyString.length !== expectedKeyStringLength) {
    exitWithArgumentSyntaxDescription(`Key description length ${keyString.length} != ${expectedKeyStringLength}`)
}
for (let index = 0; index < expectedKeyStringLength; index += 2) {
    let keyByteSubstring = keyString.slice(index, index + 2);
    let keyByte = Number.parseInt(keyByteSubstring, 16)
    if (Number.isNaN(keyByte)) {
        exitWithArgumentSyntaxDescription(`Found invalid sequence ${keyByteSubstring} in key`)
    }
    key.push(keyByte)
}
shuffleKey(key)

function exitWithArgumentSyntaxDescription(message) {
    console.error(message)
    console.error("Expected arguments: -key <key>, key being 256 bytes in hexadecimal notation")
    process.exit(1)
}

let cipherText = encryptBlock(plainText, key)

fs.writeFileSync(1, Buffer.from(cipherText))
