import { Directive, ElementRef } from '@angular/core';


@Directive({
  selector: '[appRedblack]'
})
export class RedblackDirective {

  constructor(private el:ElementRef) {
      el.nativeElement.style.backgroundColor="pink";
     el.nativeElement.style.textTransform="uppercase"

    }
}
