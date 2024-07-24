import * as crypto from 'crypto'
import * as fs from 'fs'

import { encryptBlock } from './cipher.js'

let plainText = Array.from(fs.readFileSync(0))

if (plainText.length !== 8) {
    console.error(`Currently, only a single block is supported. Input length ${plainText.length} != 8`)
    process.exit(1)
}

let key = crypto.randomBytes(32)

let cipherText = encryptBlock(plainText, key)

fs.writeFileSync(1, Buffer.from(cipherText))
