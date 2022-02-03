import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
    selector: 'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
    // MÉTODO_TRANSFERIR: invocado pelo BOTÃO_SUBMIT do FORM_TRANSFERÊNCIA

    @Output() aoTransferir = new EventEmitter<any>();

    valor: number;
    destino: string;

    transferir() {
        console.log('Nova transferência solicitada');

        const valorEmitir = { valor: this.valor, destino: this.destino };
        this.aoTransferir.emit(valorEmitir);
        
        this.limparCampos();
    }
    limparCampos() {
        this.valor = 0;
        this.destino = "";
    }
}
