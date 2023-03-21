import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css'],
})
export class PruebaComponent implements OnInit {
  numeroAleatorio: number;
  numeroIngresado: number;
  estado: string;

  constructor() {}

  ngOnInit() {}

  compararNumero() {
    this.numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    console.log(this.numeroAleatorio, this.numeroIngresado);
    if (this.numeroAleatorio === this.numeroIngresado) {
      // this.estado = '¡Has acertado!';
      Swal.fire('¡Has acertado!');
    } else {
      //this.estado = 'Lo siento, inténtalo de nuevo.';
      Swal.fire('Lo siento, inténtalo de nuevo.');
    }
  }
}
