import { Directive ,ElementRef,HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appFirstDir]'
})
export class FirstDirDirective {

  @Input('appFirstDir')color:any;

  constructor(public ref:ElementRef){

  }

  @HostListener('click') click(){
    this.ref.nativeElement.style.color = this.color.text
    this.ref.nativeElement.style.backgroundColor = this.color.bg
  }
}
