import { Directive, OnInit } from "@angular/core";
import { BaseModel } from "../../models/BaseModel";
import { BaseService } from "../../services/base-service";

@Directive()
export abstract class BaseListComponent<T extends BaseModel> implements OnInit {

    entities: T[] = [];

    constructor(private baseService: BaseService<T>){}

    ngOnInit() {
        this.baseService.getAll()
            .subscribe(e => this.entities = e.sort((a, b) => b.id - a.id),
            error => alert('Erro ao carregar a lista')
        )
    }

    delete(entity: T) {
        const mustDelete = confirm('Deseja fazer a exclusão do item?');

        if(mustDelete) {
            this.baseService.delete(entity).subscribe(
                () => this.entities = this.entities.filter(ele => ele != entity),
                () => alert('Erro ao fazer a exclusão!')
            )
        }
    }
}