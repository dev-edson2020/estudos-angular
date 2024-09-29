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

  contato: ContatoModel = new ContatoModel(); // Inicializa o modelo diretamente
  contatos: ContatoModel[] = [];

  constructor(private contatoService: ContatoService) { }

  onSubmit(form: NgForm) {
    this.contato = form.value;
    this.contato.id = new Date().getTime().toString();
    this.contatoService.save(this.contato)
    console.log("Valores do formulário: ", form.value); // Exibe os valores do formulário
  }

  ngOnInit() {
    this.contato = new ContatoModel(); // Inicialização de um novo objeto de contato
  }
}
