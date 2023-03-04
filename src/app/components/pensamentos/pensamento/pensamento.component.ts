import { Component, Input } from "@angular/core";
import { Pensamento } from "src/app/interfaces/pensamento";

@Component({
    selector: "app-pensamento",
    templateUrl: "./pensamento.component.html",
    styleUrls: ["./pensamento.component.scss"],
})
export class PensamentoComponent {
    @Input() pensamento!: Pensamento;

    larguraPensamento(): string {
        const response = this.pensamento.conteudo.length >= 256 ? "pensamento-g" : "pensamento-p";
        return response;
    }

    mudarIconeFavorito() {
        return (this.pensamento.favorito = !this.pensamento.favorito);
    }
}
