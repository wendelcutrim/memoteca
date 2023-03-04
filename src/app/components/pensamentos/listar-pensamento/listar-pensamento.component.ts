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
    filtro: string = "";
    limit: number = 6;

    constructor(private pensamentoService: PensamentoService) {}

    ngOnInit(): void {
        this.pensamentoService
            .listar(this.paginaAtual, this.limit, this.filtro)
            .subscribe((pensamentos) => (this.pensamentos = pensamentos));
    }

    carregarMaisPensamentos(): void {
        console.log(this.haMaisPensamentos);
        this.pensamentoService
            .listar(++this.paginaAtual, this.limit, this.filtro)
            .subscribe((pensamentos) => {
                this.pensamentos.push(...pensamentos);
                if (!pensamentos.length) {
                    this.haMaisPensamentos = false;
                }
            });
    }

    pesquisarPensamentos() {
        // Reinicilizando a paginação e o botão de carregar mais pensamentos ser renderizado
        this.paginaAtual = 1;
        this.haMaisPensamentos = true;

        this.pensamentoService
            .listar(this.paginaAtual, this.limit, this.filtro)
            .subscribe((pensamentos) => {
                this.pensamentos = pensamentos;
            });
    }
}
