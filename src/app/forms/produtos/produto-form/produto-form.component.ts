import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Produto } from '../shared/produto.model';
import { ProdutoService } from '../shared/produto.service';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit, OnChanges {
  
  @Input() produto: Produto;

  baseForm: FormGroup;

  constructor(private produtoService: ProdutoService, 
              private formBuilder: FormBuilder,
              private messageService: MessageService){}
  
  ngOnChanges(changes: SimpleChanges): void {
    this.baseForm?.patchValue(this.produto);    
  }
 
  ngOnInit(): void {
    this.buildForm();   
  }

  protected buildForm() {
    this.baseForm = this.formBuilder.group({
      id:[null],
      nome: [null, [Validators.required, Validators.maxLength(50)]],
      modelo: [null, [Validators.required, Validators.maxLength(15)]],
      valor: [null, [Validators.required]],
      descricao: [null],
    })
  }
  
  salvar() {

    let produto: Produto = this.baseForm.value;

    if(!produto.id){
      this.produtoService.create(produto);
      this.messageSuccess("Inlusão realizada com sucesso.");
    }else {
      this.produtoService.update(produto);
      this.messageSuccess("Atualização realizada com sucesso.");
    }
    
    this.baseForm.reset();
  }

  cancelar() {
    this.baseForm.reset();
  }

  protected messageSuccess(mensagem: string) {
    this.messageService.add({ severity: 'success', summary: 'Mensagem', detail: mensagem });
  }
}
