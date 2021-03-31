import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TableModule } from 'primeng/table';
import { AppComponent } from 'src/app/app.component';
import { ProdutoFormComponent } from './produto-form/produto-form.component';
import { ProdutoListComponent } from './produto-list/produto-list.component';
import { ProdutosRoutingModule } from './produtos-routing.module';
import {ToastModule} from 'primeng/toast';



@NgModule({
  declarations: [    
    ProdutoListComponent,
    ProdutoFormComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    InputTextareaModule,
    InputNumberModule,        
    ToastModule
  ],
  exports: [
    ProdutoListComponent
  ],
  providers: [
    AppComponent
  ]
})
export class ProdutosModule { }
