import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Pensamento } from "../interfaces/pensamento";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class PensamentoService {
    private readonly API_BASE_URL = environment.apiUrl;

    constructor(private http: HttpClient) {}

    listar(): Observable<Pensamento[]> {
        return this.http.get<Pensamento[]>(`${this.API_BASE_URL}/pensamentos`);
    }

    buscarPorId(id: number): Observable<Pensamento> {
        const url = `${this.API_BASE_URL}/pensamentos/${id}`;
        return this.http.get<Pensamento>(url);
    }

    criar(pensamento: Pensamento): Observable<Pensamento> {
        return this.http.post<Pensamento>(
            `${this.API_BASE_URL}/pensamentos`,
            pensamento,
        );
    }

    editar(pensamento: Pensamento): Observable<Pensamento> {
        const url = `${this.API_BASE_URL}/pensamentos/${pensamento.id}`;
        return this.http.put<Pensamento>(url, pensamento);
    }

    excluir(id: number): Observable<Pensamento> {
        const url = `${this.API_BASE_URL}/pensamentos/${id}`;
        return this.http.delete<Pensamento>(url);
    }
}
