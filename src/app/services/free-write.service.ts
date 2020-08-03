import { Injectable } from '@angular/core';
import { FreeWrite } from 'src/model/free-write.model';

@Injectable({
  providedIn: 'root'
})
export class FreeWriteService {

  public getFreeWrites() {
    return localStorage.getItem('free-write');
  }

  public clearFreeWrites() {
    localStorage.removeItem('free-write');
  }

  public setFreeWrites(freeWrite: string) {
    localStorage.setItem('free-write', freeWrite);
  }

  constructor() { }
}
