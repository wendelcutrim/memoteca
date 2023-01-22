import { Component, OnInit } from "@angular/core";
import { Pensamento } from "src/app/interfaces/pensamento";
import { PensamentoService } from "src/app/services/pensamento.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: "app-excluir-pensamento",
    templateUrl: "./excluir-pensamento.component.html",
    styleUrls: ["./excluir-pensamento.component.scss"],
})
export class ExcluirPensamentoComponent {
    pensamento!: Pensamento;

    constructor(
        private pensamentoService: PensamentoService,
        private router: Router,
        private route: ActivatedRoute,
    ) {}

    ngOnInit(): void {
        const id = Number(this.route.snapshot.paramMap.get("id"));
        this.pensamentoService.buscarPorId(id).subscribe((pensamento) => {
            this.pensamento = pensamento;
        });
    }

    excluirPensamento() {
        this.pensamentoService
            .excluir(Number(this.pensamento.id))
            .subscribe(() => {
                this.router.navigate(["/listar"]);
            });
    }

    cancelar() {
        this.router.navigate(["/"]);
    }
}
