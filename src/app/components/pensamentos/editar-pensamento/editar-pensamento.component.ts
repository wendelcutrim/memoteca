import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Pensamento } from "src/app/interfaces/pensamento";
import { PensamentoService } from "src/app/services/pensamento.service";

@Component({
    selector: "app-editar-pensamento",
    templateUrl: "./editar-pensamento.component.html",
    styleUrls: ["./editar-pensamento.component.scss"],
})
export class EditarPensamentoComponent {
    pensamento!: Pensamento;

    constructor(
        private pensamentoService: PensamentoService,
        private router: Router,
        private route: ActivatedRoute,
    ) {}

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get("id");
        this.pensamentoService
            .buscarPorId(Number(id))
            .subscribe((pensamento) => {
                this.pensamento = pensamento;
            });
    }

    editarPensamento() {
        this.pensamentoService.editar(this.pensamento).subscribe(() => {
            this.router.navigate(["/listar"]);
        });
    }

    cancelarPensamento() {
        this.router.navigate(["/listar"]);
    }
}
