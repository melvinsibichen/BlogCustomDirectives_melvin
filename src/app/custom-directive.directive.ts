import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

  @Input()string=""

  constructor(private el:ElementRef) {
    console.log(this.el)
    this.el.nativeElement.style.color="green"
    this.el.nativeElement.style.backgroundColor="lightgray"
   }

   

   ngOninit(){
    this.el.nativeElement.innerText += this.string
    this.el.nativeElement.align="center"
   }

}
