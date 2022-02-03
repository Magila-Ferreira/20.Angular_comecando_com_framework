import { Component } from '@angular/core';

@Component({
    selector: 'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
    // MÉTODO_TRANSFERIR: invocado pelo BOTÃO_SUBMIT do FORM_TRANSFERÊNCIA

    valor: number;
    destino: string;

    transferir() {
        console.log('Nova transferência solicitada');
        console.log("Valor: ", this.valor);
        console.log("Destino: ", this.destino);
    }
}
