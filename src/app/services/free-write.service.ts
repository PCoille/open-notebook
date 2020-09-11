import { Injectable } from '@angular/core';
import { FreeWrite } from 'src/model/free-write.model';

@Injectable({
  providedIn: 'root'
})
export class FreeWriteService {

  public getFreeWrites() {
    return JSON.parse(localStorage.getItem('free-write'));
  }

  public clearFreeWrites() {
    localStorage.removeItem('free-write');
  }

  public setFreeWrites(freeWrite: FreeWrite) {
    localStorage.setItem('free-write', JSON.stringify(freeWrite));
    console.log(freeWrite);
    console.log(JSON.stringify(freeWrite));
  }

  constructor() { }
}
