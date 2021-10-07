import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recibo-do-sacado',
  templateUrl: './recibo-do-sacado.component.html',
  styleUrls: ['./recibo-do-sacado.component.scss']
})
export class ReciboDoSacadoComponent implements OnInit {

  @Input("documento2")
  documento2 = {
    numero:'',
    vencimento:'',
    agencia:'',
    codigoCedente:'',
    nossoNumero:'',
  }


  @Input()
  valor = {
    documento:'',
    descontos:'',
    multa:'',
    cobrado:'',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
