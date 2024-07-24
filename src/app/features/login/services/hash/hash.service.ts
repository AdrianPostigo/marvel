import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { LoginModule } from '../../login.module';
import { ILoginHash } from '../../models/interfaces/login-hash/ilogin-hash';
import { IHashService } from '../../models/contracts/hashService/ihash-service';

@Injectable({
  providedIn: LoginModule
})
export class HashService implements IHashService {

  generateHash(loginHashObject: ILoginHash): string {
    const value = loginHashObject.timestamp+loginHashObject.privateKey+loginHashObject.publicKey;
    const hashValue = CryptoJS.MD5(value).toString();
    return hashValue;
  }
}
