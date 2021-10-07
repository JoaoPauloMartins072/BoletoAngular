import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalDePagamentoComponent } from './local-de-pagamento/local-de-pagamento.component';
import { ReciboDoSacadoComponent } from './recibo-do-sacado/recibo-do-sacado.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';

@NgModule({
  declarations: [
    AppComponent,
    LocalDePagamentoComponent,
    ReciboDoSacadoComponent,
    CabecalhoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
