import { UsuarioModel } from './../../models/usuario.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  usuario: UsuarioModel;
  recordarme = false;

  constructor( private auth: AuthService,
               private router: Router ) { }

  ngOnInit() {
    this.usuario = new UsuarioModel();
  }

  onSubmit( form: NgForm ) {

    if ( form.invalid ) { return; }

    Swal.fire({  
      allowOutsideClick: false,
       icon: 'info', 
       text: 'Espera por Favor..'
      }); 
    Swal.showLoading();
    this.auth.nuevoUsuario( this.usuario )
      .subscribe( resp => {

        Swal.close();

        if ( this.recordarme ) {
          localStorage.setItem('email', this.usuario.email);
        }

        this.router.navigateByUrl('/home/info');

      }, (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Error al autenticar',
          text: err.error.error.message
        });
      });
  }
}
