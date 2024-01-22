import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-modal-map',
  standalone: true,
  imports: [],
  templateUrl: './modal-map.component.html',
  styleUrl: './modal-map.component.scss'
})
export class ModalMapComponent  implements OnInit {

  constructor(public readonly renderer: Renderer2, @Inject(DOCUMENT) private _document: Document){

  }
  ngOnInit(): void {

  }

  loadMapSdk(): void {
    const element = this._document.getElementById('elementId');
    let script = this.renderer.createElement('script');
    script.type = 'application/javascript';
    script.src = 'http://somedomain.com/somescript';
    this.renderer.appendChild(element, script);
  }
}
