import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
    /* DECLARATIONS: declara os componentes da aplicação no Módulo */
    declarations: [AppComponent, NovaTransferenciaComponent],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
