import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appAlertdirective]'
})
export class AlertdirectiveDirective {
  @HostListener('click', ['$event']) onClick(event: Event) {
    alert('will sent travel plans through your registered gmail...Thank Yooou ');
  }

  constructor() { }

}
