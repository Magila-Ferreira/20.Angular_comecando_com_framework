import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { BrowserModule } from '@angular/platform-browser';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ExtratoComponent } from './extrato/extrato.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { HttpClientModule } from '@angular/common/http';

registerLocaleData(localePt, 'pt');

@NgModule({
    /* DECLARATIONS: declara os componentes da aplicação no Módulo */
    declarations: [AppComponent, NovaTransferenciaComponent, ExtratoComponent],
    imports: [
        BrowserModule,
        /* IMPORTAÇÃO DO MÓDULO_SUBMIT-FORM ANGULAR  */
        FormsModule,
        HttpClientModule
    ],
    providers: [
        { provide: LOCALE_ID, useValue: 'pt' },
        { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
