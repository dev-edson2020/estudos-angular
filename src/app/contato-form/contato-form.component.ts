import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContatoModel } from '../models/ContatoModel';
import { ContatoService } from '../services/contato.service';

@Component({
  selector: 'app-contato-form',
  templateUrl: './contato-form.component.html',
  styleUrls: ['./contato-form.component.css']
})
export class ContatoFormComponent implements OnInit {

  contato: ContatoModel = new ContatoModel();
  contatos: ContatoModel[] = [];

  constructor(private contatoService: ContatoService) { }

  onSubmit(form: NgForm) {
    this.contato = form.value;
    this.contato.id = new Date().getTime().toString();
    this.contatoService.save(this.contato);
  }

  ngOnInit() {
    this.contato = new ContatoModel();
    console.log("Recuperando contato por ID  ", this.getContatoId());
    // console.log("Recuperando lista de todos os contatos  " , this.getALLContatos());

  }

  getContatoId() {
    this.contatoService.getContato(this.contato.id)
  }

  getALLContatos() {
    this.contatoService.getAll();
  }



}
