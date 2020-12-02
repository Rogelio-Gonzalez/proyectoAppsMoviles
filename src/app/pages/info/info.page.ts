import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
  
  option1 = {
    loop: true,
    direction: 'vertical'
  };
  
  git1(){
    this.iab.create('https://github.com/angeltorres6868', '_blank');
  }
  git2(){
    this.iab.create('https://github.com/Rogelio-Gonzalez', '_blank');
  }
  git3(){
    this.iab.create('https://github.com/MarcoCisneros', '_blank');
  }
  git4(){
    this.iab.create('https://github.com/daniehruiz', '_blank');
  }
  git5(){
    this.iab.create('https://github.com/ricardonlo', '_blank');
  }
  git6(){
    this.iab.create('https://github.com/EsmeGHdz', '_blank');
  }
 
  constructor(private iab: InAppBrowser) { }

  ngOnInit() {
  }

}
