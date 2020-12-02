import { AumentarPage } from './../aumentar/aumentar.page';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.page.html',
  styleUrls: ['./exercises.page.scss'],
})
export class ExercisesPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
aumentar(){
  this.router.navigateByUrl('/home/exercises/aumentar');
}
adelgazar(){
  this.router.navigateByUrl('/home/exercises/adelgazar');

}
}
