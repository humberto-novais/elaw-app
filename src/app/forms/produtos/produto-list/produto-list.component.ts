import { Component, OnInit } from '@angular/core';
import { Produto } from '../shared/produto.model';
import { ProdutoService } from '../shared/produto.service';


@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {  

  produto: Produto;

  produtos: Produto[] = [];
  
  constructor(private produtoService: ProdutoService){}
  
  ngOnInit(){
    this.produtoService.getAll()
      .subscribe(produtos => this.produtos = produtos);
  } 

  delete(p: Produto) {
    const del = confirm('Deseja fazer a exclusão do item?');       

    if(del) {
        this.produtoService.delete(p)
          .subscribe(produtos => this.produtos = produtos);
    }
  }

  edit(prod: Produto) {
    this.produto = prod;
  }

}
