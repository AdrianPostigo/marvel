import { ILoginHash } from "../../interfaces/login-hash/ilogin-hash";

export interface IHashService {
    generateHash(loginHashObject: ILoginHash): string;
}
