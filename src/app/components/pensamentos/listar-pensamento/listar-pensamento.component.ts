import { Component } from "@angular/core";
import { Pensamento } from "src/app/interfaces/pensamento";

@Component({
    selector: "app-listar-pensamento",
    templateUrl: "./listar-pensamento.component.html",
    styleUrls: ["./listar-pensamento.component.scss"],
})
export class ListarPensamentoComponent {
    pensamentos: Array<Pensamento> = [
        {
            id: "1",
            conteudo: "I love angular",
            autoria: "Wendel",
            modelo: "3",
        },
        {
            id: "2",
            conteudo: "Passo informações par ao componente filho",
            autoria: "Componente pai",
            modelo: "2",
        },
        {
            id: "3",
            conteudo: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore quas culpa aut sed cum? Tenetur excepturi reiciendis corporis harum iusto iure illo facere officiis? Voluptates est commodi in esse dolorum!
            Commodi laborum perferendis incidunt distinctio odio deleniti fugit natus voluptatum adipisci in nisi inventore nihil dignissimos ipsam autem doloribus iste asperiores dolore vel, rem sit, harum sint. Sit, rem excepturi?`,
            autoria: "Componente pai",
            modelo: "3",
        },
    ];
}
