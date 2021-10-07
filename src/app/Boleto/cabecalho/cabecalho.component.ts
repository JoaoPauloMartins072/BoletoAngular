import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss']
})
export class CabecalhoComponent implements OnInit {

  @Input("numero")
  numero: any  = {
    boleto1: '',
    boleto2: '',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
