import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverdirective]'
})
export class HoverdirectiveDirective {

  constructor(private el:ElementRef) {
    console.log(this.el)
   }

   @HostListener('mouseenter') onMouseEnter(){
    this.highlight('skyblue')
   }
   
   @HostListener('mouseleave') onMouseLeave(){
    this.highlight('')
   }

   private highlight(color:string){
    this.el.nativeElement.style.backgroundColor=color
   }
}
