import { Route, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Pensamento } from "src/app/interfaces/pensamento";
import { PensamentoService } from "src/app/services/pensamento.service";
import { Title } from "@angular/platform-browser";

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
    favorito: boolean = false;
    listaFavoritos: Array<Pensamento> = [];
    pageTitle: string = "";

    constructor(private pensamentoService: PensamentoService, private router: Router, private titleService: Title) {}

    ngOnInit(): void {
        this.titleService.setTitle("Meu mural");
        this.pageTitle = "Meu Mural";
        this.favorito = false;
        this.paginaAtual = 1;
        this.haMaisPensamentos = true;
        this.pensamentoService
            .listar({ page: this.paginaAtual, limit: this.limit, filtro: this.filtro, favorito: this.favorito })
            .subscribe((pensamentos) => (this.pensamentos = pensamentos));
    }

    recarregarComponente(): void {
        this.titleService.setTitle("Meu mural");
        this.pageTitle = "Meu Mural";
        this.router.navigate([this.router.url]);
    }

    carregarMaisPensamentos(): void {
        this.pensamentoService
            .listar({ page: ++this.paginaAtual, limit: this.limit, filtro: this.filtro, favorito: this.favorito })
            .subscribe((pensamentos) => {
                this.pensamentos.push(...pensamentos);
                if (!pensamentos.length) {
                    this.haMaisPensamentos = false;
                }
            });
    }

    carregarFavoritos(): void {
        this.titleService.setTitle("Meus favoritos");
        this.pageTitle = "Meus Favoritos";
        this.paginaAtual = 1;
        this.favorito = true;
        this.haMaisPensamentos = true;

        this.pensamentoService
            .listar({
                page: this.paginaAtual,
                limit: this.limit,
                filtro: this.filtro,
                favorito: this.favorito,
            })
            .subscribe((pensamentos) => {
                this.pensamentos = pensamentos;
                this.listaFavoritos = pensamentos;
            });
    }

    pesquisarPensamentos() {
        // Reinicilizando a paginação e o botão de carregar mais pensamentos ser renderizado
        this.paginaAtual = 1;
        this.haMaisPensamentos = true;

        this.pensamentoService
            .listar({ page: this.paginaAtual, limit: this.limit, filtro: this.filtro, favorito: this.favorito })
            .subscribe((pensamentos) => {
                this.pensamentos = pensamentos;
            });
    }
}
