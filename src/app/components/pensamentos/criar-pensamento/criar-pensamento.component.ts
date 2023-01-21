import { Component } from "@angular/core";
import { Pensamento } from "src/app/interfaces/pensamento";

@Component({
    selector: "app-criar-pensamento",
    templateUrl: "./criar-pensamento.component.html",
    styleUrls: ["./criar-pensamento.component.scss"],
})
export class CriarPensamentoComponent {
    pensamento: Pensamento = {
        id: "1",
        conteudo: "Aprendendo Angular",
        autoria: "Dev",
        modelo: "",
    };

    criarPensamento() {
        alert("Novo pensamento criado!");
    }

    cancelarPensamento() {
        alert("Pensamento cancelado!");
    }
}
