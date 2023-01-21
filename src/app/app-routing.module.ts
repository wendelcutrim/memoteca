import { CriarPensamentoComponent } from "./components/pensamentos/criar-pensamento/criar-pensamento.component";
import { ListarPensamentoComponent } from "./components/pensamentos/listar-pensamento/listar-pensamento.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    { path: "", redirectTo: "listar", pathMatch: "full" },
    { path: "listar", component: ListarPensamentoComponent },
    { path: "criar", component: CriarPensamentoComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
