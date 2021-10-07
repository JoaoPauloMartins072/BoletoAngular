import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'boletoAngular';
//pasta-cabecalho
  numero: any  = {
    boleto1: '123',
    boleto2: '456',
  };
//pasta-local-de-pagamento
  documento = {
    dataVencimento: '',
    data: '',
    num:'',
    especie:'',
    aceite:'',
    dataProcessamento:'',
    carteira:'',
    numero:'',
    valor:'',
    desconto:'',
    acrescimo:'',
    valorPago:'',
  }

  banco = {
    uso:'',
    carteira:'',
    quantidade:'',
    valor:'',
  }

  beneficiario = {
    nome:'',
    CPFouCNPJ:'',
    endereco:'',
    numeroresidencia:'',
    agencia:'',
    codigoBeneficiario:'',

  }

  pagador = {
    nome:'',
    CPFouCNPJ:'',
    endereco:'',
    sacadorAvalista:'',
    CPFouCNPJsa:'',
  }

//pasta-recibo-do-sacado

 documento2 = {
  numero:'',
  vencimento:'',
  agencia:'',
  codigoCedente:'',
  nossoNumero:'',

}

valor = {
  documento:'',
  descontos:'',
  multa:'',
  cobrado:'',
}


}
