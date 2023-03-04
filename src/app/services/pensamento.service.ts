import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Pensamento } from "../interfaces/pensamento";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class PensamentoService {
    private readonly API_BASE_URL = environment.apiUrl;

    constructor(private http: HttpClient) {}

    listar(page: number, limit?: number, filtro?: string | null): Observable<Pensamento[]> {
        let params = new HttpParams().set("_page", page).set("_limit", limit ? limit : (limit = 6));

        if (typeof filtro === "string" && filtro.trim().length > 2) {
            params = params.set("q", filtro);
        }

        console.log(params);

        return this.http.get<Pensamento[]>(`${this.API_BASE_URL}/pensamentos`, {
            params,
        });
    }

    buscarPorId(id: number): Observable<Pensamento> {
        const url = `${this.API_BASE_URL}/pensamentos/${id}`;
        return this.http.get<Pensamento>(url);
    }

    criar(pensamento: Pensamento): Observable<Pensamento> {
        return this.http.post<Pensamento>(`${this.API_BASE_URL}/pensamentos`, pensamento);
    }

    editar(pensamento: Pensamento): Observable<Pensamento> {
        const url = `${this.API_BASE_URL}/pensamentos/${pensamento.id}`;
        return this.http.put<Pensamento>(url, pensamento);
    }

    mudarFavorito(pensamento: Pensamento): Observable<Pensamento> {
        pensamento.favorito = !pensamento.favorito;
        return this.editar(pensamento);
    }

    excluir(id: number): Observable<Pensamento> {
        const url = `${this.API_BASE_URL}/pensamentos/${id}`;
        return this.http.delete<Pensamento>(url);
    }
}
