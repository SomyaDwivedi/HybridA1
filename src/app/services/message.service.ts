import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MessageService {
  private _message = '';
  setMessage(msg: string) {
    this._message = msg;
  }
  getMessage() {
    return this._message;
  }
  clear() {
    this._message = '';
  }
}
