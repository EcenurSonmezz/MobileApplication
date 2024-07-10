import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    autoplay: {
      delay: 3000,
    },
    loop: true,

      
  };

  constructor() {}

  openLink() {
    window.open('https://drive.google.com/file/d/1w9z_gjXeMUNKYLqIVGvmnQwscmVz6xPA/view?usp=sharing', '_blank');
  }
}
