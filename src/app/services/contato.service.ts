import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { ContatoModel } from '../models/ContatoModel';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(private localStorage: LocalStorageService) { }

  delete(contato: ContatoModel) {
    this.localStorage.remove(contato.id)
  }

  save(contato: ContatoModel) {
    this.localStorage.set(contato.id, contato);
  }

  getContato(id: string): ContatoModel {
    return this.localStorage.get(id);
  }

  getAll(): ContatoModel[] {
    return this.localStorage.keys().map(id => this.getContato(id));
  }

}