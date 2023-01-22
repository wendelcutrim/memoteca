import { EditarPensamentoComponent } from "./components/pensamentos/editar-pensamento/editar-pensamento.component";
import { CriarPensamentoComponent } from "./components/pensamentos/criar-pensamento/criar-pensamento.component";
import { ExcluirPensamentoComponent } from "./components/pensamentos/excluir-pensamento/excluir-pensamento.component";
import { ListarPensamentoComponent } from "./components/pensamentos/listar-pensamento/listar-pensamento.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    { path: "", redirectTo: "listar", pathMatch: "full" },
    { path: "criar", component: CriarPensamentoComponent },
    { path: "listar", component: ListarPensamentoComponent },
    { path: "pensamentos/excluir/:id", component: ExcluirPensamentoComponent },
    { path: "pensamentos/editar/:id", component: EditarPensamentoComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
