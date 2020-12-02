import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from '../../services/auth.service';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: UsuarioModel = new UsuarioModel();
  recordarme = false;

  
  constructor(private router: Router,  private auth: AuthService) { }

  ngOnInit() {
    if ( localStorage.getItem('email') ) {
      this.usuario.email = localStorage.getItem('email');
      this.recordarme = true;
    }
  }
  login( form: NgForm ) {

    if (  form.invalid ) { return; }
    Swal.fire({  
      allowOutsideClick: false, 
      icon: 'info', 
      text: 'Espera por Favor..'
    }); 
    Swal.showLoading();
    


    this.auth.login( this.usuario )
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
