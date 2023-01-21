import { Component } from "@angular/core";
interface Pensamento {
    id: string;
    conteudo: string;
    autoria: string;
    modelo: string;
}

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
