import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})

export class Grafica1Component implements OnInit {

  public labels1: string[] = ['Harina','Arroz','Azúcar'];
  public data1 = [72,48,24];

  constructor() { }

  ngOnInit(): void {
  }

}
