import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ContatoService } from '../services/contato.service';
import { ContatoModel } from '../models/ContatoModel';

@Component({
  selector: 'app-contato-list',
  templateUrl: './contato-list.component.html',
  styleUrls: ['./contato-list.component.css']
})
export class ContatoListComponent implements OnInit {

  @Input() contato!: ContatoModel[];
  @Output() editContato = new EventEmitter();
  

  contatos: ContatoModel[] | undefined;

  constructor(private contatoSevice: ContatoService) { }

  ngOnInit(): void {    
     this.getAllContatos();
  }

  getAllContatos() {
    this.contatos = this.contatoSevice.getAll();
  }



}
