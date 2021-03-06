import { Transferencia } from './../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

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

    constructor(private service: TransferenciaService, private router: Router) {}

    // MÉTODO_TRANSFERIR: invocado pelo BOTÃO_SUBMIT do FORM_TRANSFERÊNCIA
    transferir() {
        console.log('Nova transferência solicitada');

        const valorEmitir: Transferencia = {
            valor: this.valor,
            destino: this.destino,
        };

        this.service.adicionar(valorEmitir).subscribe(
            (resultado) => {
                console.log(resultado);
                this.limparCampos();
                this.router.navigateByUrl('extrato');
            },
            (error) => console.error(error)
        );
    }
    limparCampos() {
        this.valor = 0;
        this.destino = 0;
    }
}
