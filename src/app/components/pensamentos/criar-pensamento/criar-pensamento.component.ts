import { Component, OnInit } from "@angular/core";
import { PensamentoService } from "src/app/services/pensamento.service";
import { Pensamento } from "src/app/interfaces/pensamento";
import { Router } from "@angular/router";
import { FormGroup } from "@angular/forms";
import { FormBuilder } from "@angular/forms";

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
            conteudo: [""],
            autoria: [""],
            modelo: [""],
        });
    }

    criarPensamento() {
        this.pensamentoService.criar(this.formulario.value).subscribe(() => {
            this.router.navigate(["/"]);
        });
    }

    cancelarPensamento() {
        this.router.navigate(["/"]);
    }
}
