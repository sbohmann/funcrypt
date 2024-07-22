import * as crypto from 'crypto'
import * as fs from 'fs'

import { encryptBlock } from './cipher'

let plainText = fs.readFileSync(0)

if (plainText.length !== 8) {
    console.error("Currently, only a single block is supported.")
}

let key = crypto.randomBytes(32)

let cipherText = encryptBlock(plainText, key)

fs.writeFileSync(1, cipherText)
