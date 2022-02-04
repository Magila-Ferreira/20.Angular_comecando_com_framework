import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'bytebank';
    transferencias: any[] = [];

    transferir($event) {
        console.log($event);
        /* ... -> STRAP_OPERATOR: "desmonta" o OBJETO_TRANSFERENCIA para utilizar   apenas suas PROPRIEDADES_VALOR_DESTIONO separadamente */
        const transferencia = {...$event, data: new Date()};
        this.transferencias.push(transferencia);
    }
}
