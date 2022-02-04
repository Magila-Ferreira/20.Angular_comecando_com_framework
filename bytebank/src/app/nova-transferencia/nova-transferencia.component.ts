import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
    selector: 'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
    // @Output() -> METADATA: exporta os valores do componente para o MÉTODO CHAMADO
    // EVENTEMITTER: classe responsável por propagar os dados para outros componentes
    @Output() aoTransferir = new EventEmitter<any>();

    valor: number;
    destino: number;

    // MÉTODO_TRANSFERIR: invocado pelo BOTÃO_SUBMIT do FORM_TRANSFERÊNCIA
    transferir() {
        console.log('Nova transferência solicitada');

        const valorEmitir = { valor: this.valor, destino: this.destino };
        // CHAMADA DO MÉTODO_AOTRANSFERIR
        // EMIT: emite o evento, propagando-o em outras classes
        this.aoTransferir.emit(valorEmitir);

        this.limparCampos();
    }
    limparCampos() {
        this.valor = 0;
        this.destino = 0;
    }
}
