import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Componente} from '../../models/ayuda.model'
@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})

export class HelpPage implements OnInit {
  
  componentes: Componente[] =[
    {
      icon: 'help-circle',
      name: 'Preguntas Frecuentes',
      redirectTo: 'questions',
    },
    {
      icon: 'person',
      name: 'Contáctanos',
      redirectTo: 'contact',
    },
    {
      icon: 'today',
      name: 'Terminos y Condiciones',
      redirectTo: 'terms',
    },
 
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  salir() {

    this.router.navigateByUrl('/login');

  }
  
}
