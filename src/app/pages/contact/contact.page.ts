import { ContactenosModel } from './../../models/contacto.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  contacto: ContactenosModel = new ContactenosModel();

  constructor(private router: Router) { }

  ngOnInit() {
    this.contacto= new ContactenosModel();

  }
  onSubmit(form : NgForm){
    if(form.valid){
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Tu problema fue enviado con exito',
        html: '<b>Nos pondremos en contacto con usted en su correo</b>',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigateByUrl('/home/help');

     }
     if(form.invalid){
      return;
 
     }
  }
}
