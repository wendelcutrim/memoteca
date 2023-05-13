import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { Pensamento } from "src/app/interfaces/pensamento";
import { PensamentoService } from "src/app/services/pensamento.service";

@Component({
    selector: "app-editar-pensamento",
    templateUrl: "./editar-pensamento.component.html",
    styleUrls: ["./editar-pensamento.component.scss"],
})
export class EditarPensamentoComponent implements OnInit, OnChanges {
    formulario!: FormGroup;

    constructor(
        private pensamentoService: PensamentoService,
        private router: Router,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder,
    ) {}

    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes);
    }

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get("id");
        this.pensamentoService.buscarPorId(Number(id)).subscribe(
            (pensamento: Pensamento) =>
                (this.formulario = this.formBuilder.group({
                    id: [pensamento.id],
                    conteudo: [pensamento.conteudo, Validators.compose([Validators.required])],
                    autoria: [pensamento.autoria, Validators.compose([Validators.required, Validators.minLength(3)])],
                    modelo: [pensamento.modelo],
                    favorito: [false],
                })),
        );
        console.log(this.formulario);
    }

    editarPensamento(): void {
        this.pensamentoService.editar(this.formulario.value).subscribe(() => this.router.navigate(["/listar"]));
    }

    cancelarPensamento(): void {
        this.router.navigate(["/listar"]);
    }

    mostrarBotao(): string {
        if (!this.formulario.valid) {
            return "botao__desabilitado";
        }

        return "botao";
    }
}
