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

    constructor(private pensamentoService: PensamentoService) {}

    ngOnInit(): void {
        this.pensamentoService
            .listar()
            .subscribe((pensamentos) => (this.pensamentos = pensamentos));
    }
}
