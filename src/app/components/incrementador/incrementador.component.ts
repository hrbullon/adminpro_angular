import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})

export class IncrementadorComponent implements OnInit {
  
  ngOnInit() {
    this.btnClass = `btn ${ this.btnClass }`;
  }

  @Input('valor') progreso: number = 40;
  @Input() btnClass: string = "btn-primary";

  @Output() valorCambiado: EventEmitter<Number> = new EventEmitter();

  get getPorcentaje() {
    return `${ this.progreso}%`;
  }
  
  cambiarValor( valor: number){

    if (this.progreso >= 100 && valor > 0) {
      this.valorCambiado.emit(100);
      return this.progreso = 100;
    }

    if (this.progreso <= 0 && valor < 0) {
      this.valorCambiado.emit(0);
      return this.progreso = 0;
    }

    this.progreso = this.progreso + valor;
    this.valorCambiado.emit(this.progreso);

  }

  onChange( nuevoValor: number){

    if( nuevoValor >= 100){
      this.progreso = 100;
    }else if(nuevoValor <= 0) {
      this.progreso = 0;
    }else {
      this.progreso = nuevoValor;
    }

    this.valorCambiado.emit(this.progreso);

  }

}
