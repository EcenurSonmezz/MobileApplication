import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
isMenuEnabled: any;
selectedIndex: any;
navigate(arg0: string,arg1: number) {
throw new Error('Method not implemented.');
}
close() {
throw new Error('Method not implemented.');
}
  constructor() {}
  ngOnInit(): void {
    document.addEventListener('DOMContentLoaded', () => {
      const menuButtons = document.querySelectorAll('.menu-items ion-item');

      menuButtons.forEach((button: any) => { // Any kullanımı, HTMLElement olarak işaretlemek için kullanılır.
        button.addEventListener('click', () => {
          const menu = document.querySelector('ion-menu');
          (menu as any)?.toggle(); // Any kullanımı, TypeScript'e göstermek için menünün HTMLElement olduğunu
          // ve bu nedenle toggle metodunu kullanabileceğimizi belirtir.
        });
      });
    });
  }
}
