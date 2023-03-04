import { Component } from "@angular/core";
import { PensamentoService } from "src/app/services/pensamento.service";
import { Router } from "@angular/router";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
@Component({
    selector: "app-criar-pensamento",
    templateUrl: "./criar-pensamento.component.html",
    styleUrls: ["./criar-pensamento.component.scss"],
})
export class CriarPensamentoComponent {
    formulario!: FormGroup;

    constructor(
        private pensamentoService: PensamentoService,
        private router: Router,
        private formBuilder: FormBuilder,
    ) {}

    ngOnInit(): void {
        this.formulario = this.formBuilder.group({
            conteudo: ["", Validators.compose([Validators.required, Validators.pattern(/(.|\s)*\S(.|\s)*/)])],
            autoria: ["", Validators.compose([Validators.required, Validators.minLength(3)])],
            modelo: [""],
            favorito: [false],
        });
    }

    criarPensamento(): void {
        console.log(this.formulario.status);
        console.log(this.formulario.get("autoria")?.errors);

        if (this.formulario.valid) {
            this.pensamentoService.criar(this.formulario.value).subscribe(() => {
                this.router.navigate(["/"]);
            });
        }
    }

    cancelarPensamento(): void {
        this.router.navigate(["/"]);
    }

    habilitarBotao(): string {
        if (this.formulario.valid) {
            return "botao";
        } else {
            return "botao__desabilitado";
        }
    }
}
