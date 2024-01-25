import { Component, OnInit, afterNextRender } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: '<router-outlet/>',
})
export class AppComponent implements OnInit {
  title = 'ecommerce-starter';

  constructor() {
    console.log(window.location.pathname);
    afterNextRender(() => {});
  }

  ngOnInit(): void {}
}
