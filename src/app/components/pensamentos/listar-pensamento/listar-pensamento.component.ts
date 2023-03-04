import { Component, OnInit } from "@angular/core";
import { Pensamento } from "src/app/interfaces/pensamento";
import { PensamentoService } from "src/app/services/pensamento.service";

@Component({
    selector: "app-listar-pensamento",
    templateUrl: "./listar-pensamento.component.html",
    styleUrls: ["./listar-pensamento.component.scss"],
})
export class ListarPensamentoComponent {
    pensamentos: Array<Pensamento> = [];
    paginaAtual: number = 1;
    haMaisPensamentos: boolean = true;

    constructor(private pensamentoService: PensamentoService) {}

    ngOnInit(): void {
        this.pensamentoService
            .listar(this.paginaAtual)
            .subscribe((pensamentos) => (this.pensamentos = pensamentos));
    }

    carregarMaisPensamentos(): void {
        console.log(this.haMaisPensamentos);
        this.pensamentoService
            .listar(++this.paginaAtual)
            .subscribe((pensamentos) => {
                this.pensamentos.push(...pensamentos);
                if (!pensamentos.length) {
                    this.haMaisPensamentos = false;
                }
            });
    }
}
