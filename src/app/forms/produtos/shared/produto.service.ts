import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Observable, of } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { Produto } from './produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  http: HttpClient;

  messageService: MessageService;

  constructor(public app: AppComponent) { }

  getAll(): Observable<Produto[]> {
    return of(this.app.produtos);  
  }

  create(p: Produto): Observable<any> {
    p.id = this.app.produtos.length + 1;

    this.app.produtos.push(p);

    return of(this.app.produtos);
  }

  update(p: Produto): Observable<any> {
    const index = this.app.produtos.findIndex(x => x.id == p.id);

    this.app.produtos.splice(index, 1, p);

    return of(this.app.produtos);
  }

  delete(p: Produto): Observable<any> {    
    this.app.produtos = this.app.produtos.filter(produto => produto != p);

    return of(this.app.produtos);
  } 
}
