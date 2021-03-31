import { Component } from '@angular/core';
import { Produto } from './forms/produtos/shared/produto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'elaw-app';

  // produto: Produto = { id: 1, nome: 'Produto 01', modelo: 'Modelo 01', descricao: 'Descricao 01', valor: 1 };

  produtos: Produto[] = [
    { id: 1, nome: 'Produto 01', modelo: 'Modelo 01', descricao: 'Descricao 01', valor: 1 },
    { id: 2, nome: 'Produto 02', modelo: 'Modelo 02', descricao: 'Descricao 02', valor: 2 },
    { id: 3, nome: 'Produto 03', modelo: 'Modelo 03', descricao: 'Descricao 03', valor: 3 },
    { id: 4, nome: 'Produto 04', modelo: 'Modelo 04', descricao: 'Descricao 04', valor: 4 },
    { id: 5, nome: 'Produto 05', modelo: 'Modelo 05', descricao: 'Descricao 05', valor: 5 },
  ];

  constructor() {}
}
