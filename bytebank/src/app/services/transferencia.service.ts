import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class TransferenciaService {
    private listaTransferencia: any[];

    constructor() {
        this.listaTransferencia = [];
    }

    get transferencias() {
        return this.listaTransferencia;
    }

    adicionar(transferencia: any) {
        this.hidratar(transferencia);
        this.transferencias.push(transferencia);
    }

    private hidratar(transferencia: any) {
        /* ... -> STRAP_OPERATOR: "desmonta" o OBJETO_TRANSFERENCIA para utilizar   apenas suas PROPRIEDADES_VALOR_DESTIONO separadamente */
        transferencia.data = new Date();
    }
}
