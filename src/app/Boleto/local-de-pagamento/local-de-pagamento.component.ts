import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-de-pagamento',
  templateUrl: './local-de-pagamento.component.html',
  styleUrls: ['./local-de-pagamento.component.scss']
})
export class LocalDePagamentoComponent implements OnInit {

  @Input()
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

  @Input()
  banco = {
    uso:'',
    carteira:'',
    quantidade:'',
    valor:'',
  }

  @Input()
  beneficiario = {
    nome:'',
    CPFouCNPJ:'',
    endereco:'',
    numeroresidencia:'',
    agencia:'',
    codigoBeneficiario:'',

  }

  @Input()
  pagador = {
    nome:'',
    CPFouCNPJ:'',
    endereco:'',
    sacadorAvalista:'',
    CPFouCNPJsa:'',
  }



  constructor() { }

  ngOnInit(): void {
  }

}
