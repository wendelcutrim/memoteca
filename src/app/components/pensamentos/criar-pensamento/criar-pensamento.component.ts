import { Component, OnInit } from "@angular/core";
import { PensamentoService } from "src/app/services/pensamento.service";
import { Pensamento } from "src/app/interfaces/pensamento";
import { Router } from "@angular/router";

@Component({
    selector: "app-criar-pensamento",
    templateUrl: "./criar-pensamento.component.html",
    styleUrls: ["./criar-pensamento.component.scss"],
})
export class CriarPensamentoComponent {
    pensamento: Pensamento = {
        conteudo: "",
        autoria: "",
        modelo: "modelo2",
    };

    constructor(
        private pensamentoService: PensamentoService,
        private router: Router,
    ) {}

    ngOnInit(): void {}

    criarPensamento() {
        this.pensamentoService.criar(this.pensamento).subscribe(() => {
            this.router.navigate(["/"]);
        });
    }

    cancelarPensamento() {
        this.router.navigate(["/"]);
    }
}
