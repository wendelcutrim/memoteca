import { Component, Input } from "@angular/core";
import { Pensamento } from "src/app/interfaces/pensamento";
import { PensamentoService } from "src/app/services/pensamento.service";

@Component({
    selector: "app-pensamento",
    templateUrl: "./pensamento.component.html",
    styleUrls: ["./pensamento.component.scss"],
})
export class PensamentoComponent {
    @Input() pensamento!: Pensamento;

    constructor(private pensamentoService: PensamentoService) {}

    larguraPensamento(): string {
        const response = this.pensamento.conteudo.length >= 256 ? "pensamento-g" : "pensamento-p";
        return response;
    }

    mudarIconeFavorito() {
        return this.pensamentoService.mudarFavorito(this.pensamento).subscribe();
    }
}
