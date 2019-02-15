import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {
  // tslint:disable-next-line:no-input-rename
  @Input('appResaltado') nuevocolor: string;
  constructor(private el: ElementRef) {
  // el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseenter')mouse() {
    this.resaltar(this.nuevocolor || 'yellow');
  }
  @HostListener('mouseleave')mousesalio() {
   this.resaltar(this.nuevocolor || 'yellow');
   }
   private resaltar(color: string ) {
    this.el.nativeElement.style.backgroundColor = color;
   }
}
