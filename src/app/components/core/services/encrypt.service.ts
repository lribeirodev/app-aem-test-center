import { Injectable } from "@angular/core";
import JSEncrypt from "jsencrypt";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root',
})
export class EncryptService {

  private _encrypt! : JSEncrypt;

  constructor(){
    this._encrypt = new JSEncrypt();
  }

  public setKey(key: string): void {
    this._encrypt.setKey(key);
  }

  public encryptObj(data: any): any {
    return this._encrypt.encrypt(JSON.stringify(data));
  }

  public encryptStr(data: string): any {
    return this._encrypt.encrypt(data);
  }

  public decrypt(data: any): any {
    return this._encrypt.decrypt(data);
  }

}
