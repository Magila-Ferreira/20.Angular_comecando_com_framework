import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    /* DECLARATIONS: declara os componentes da aplicação no Módulo */
    declarations: [AppComponent, NovaTransferenciaComponent],
    imports: [
        BrowserModule,
        /* IMPORTAÇÃO DO MÓDULO_SUBMIT-FORM ANGULAR  */
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
