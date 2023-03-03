import { Observable } from "rxjs";
import { TestBed } from "@angular/core/testing";

import { PensamentoService } from "./pensamento.service";

import { Pensamento } from "../interfaces/pensamento";

describe("PensamentoService", () => {
    let service: PensamentoService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(PensamentoService);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });
});
