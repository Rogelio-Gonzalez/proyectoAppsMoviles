import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {
  option1 = {
    loop: true,
    direction: 'vertical'
  };
  constructor( ) {
   
  }

  ngOnInit() {

  }
   Pagar(){
    Swal.fire({
      title:'<span style="color:#05061d">Confirmacion de pago</span>',

      text: 'Pulse el boton verde para pagar y el rojo para cancelar',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#00490B',
      cancelButtonColor: '#d33',
      confirmButtonText: '$350.00 MXN'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          '<span style="color:#05061d">Bienvenido a Forty-Five GYM!</span>',
          'Usted ha pagado los $350.00 MXN del Pase Mamado',
          'success'
        )
      }
    })
  }
  PagarA(){
    Swal.fire({
      title:'<span style="color:#05061d">Confirmacion de pago</span>',
      text: "Pulse el boton verde para pagar y el rojo para cancelar",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#00490B',
      cancelButtonColor: '#d33',
      confirmButtonText: '$3750.00 MXN'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          '<span style="color:#05061d">Bienvenido a Forty-Five GYM!</span>',
          'Usted ha pagado los $3750.00 MXN del Pase Mamadisimo',
          'success'
        )
      }
    })
  }

}

