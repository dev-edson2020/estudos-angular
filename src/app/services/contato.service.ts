import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { ContatoModel } from '../models/ContatoModel';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(private localStorage: LocalStorageService) { }

  save(contato: ContatoModel) {
    this.localStorage.set(contato.id, JSON.stringify(contato));
  }
  

}
