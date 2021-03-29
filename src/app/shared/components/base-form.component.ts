import { Directive, Injector, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { BaseModel } from "../models/BaseModel";
import { BaseService } from "../services/base-service";


@Directive()
export abstract class BaseFormComponent<T extends BaseModel> implements OnInit {

    currentAction: string;
    submittingForm: boolean = false;

    protected activatedRoute: ActivatedRoute;
    protected router: Router;
    protected baseForm: FormGroup;
    protected formBuilder: FormBuilder;

    constructor(protected injector: Injector, public entity: T, protected baseService: BaseService<T>) {
        this.router = injector.get(Router);
        this.activatedRoute = injector.get(ActivatedRoute);
        this.formBuilder = injector.get(FormBuilder);
    }

    ngOnInit() {
        this.buildForm();
    }

    create() {
        const entity: T = this.baseForm.value;

        this.baseService.create(entity)
            .subscribe(() => {
                this.createSuccess();
            },
                (error) => this.eventoError('Aconteceu um erro ao fazer a inclusão!'));
    }

    update() {
        const conta: T = this.baseForm.value;

        this.baseService.update(conta)
            .subscribe(() => {
                this.updateSuccess();
            },
            (error) => this.eventoError('Aconteceu um erro ao fazer a atualização!'));
    }

    protected eventoError(msg: string) {
        // this.messageService.add({ severity: 'error', summary: 'Mensagem',  detail: msg});
    }

    protected createSuccess() {
        // this.messageService.add({ severity: 'success', summary: 'Mensagem', detail: 'Inclusão realizada com sucesso!' });
    }

    protected updateSuccess() {
        // this.messageService.add({ severity: 'success', summary: 'Mensagem', detail: 'Atualização realizada com sucesso!' });
    }

    protected abstract buildForm(): void;
}