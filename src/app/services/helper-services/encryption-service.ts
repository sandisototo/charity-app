import * as crypto from 'crypto-js';
import { Injectable } from '@angular/core';

@Injectable()
export class EncryptionService {
    private secret: string;


    constructor() {
        this.secret = 'SwipeIX 123'
    }
    
    encrypted(val: number) {
        return crypto.AES.encrypt(val.toString(), this.secret).toString();
    }
    
    decrypted(val: number) {
        const bytes  = crypto.AES.decrypt(val.toString(), this.secret);
        return bytes.toString(crypto.enc.Utf8);
    }
}
