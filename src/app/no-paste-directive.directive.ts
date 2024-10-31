import { Directive, HostListener  } from '@angular/core';

@Directive({
  selector: '[appNoPaste]'
})
export class NoPasteDirectiveDirective {

  @HostListener('paste', ['$event']) onPaste(event: ClipboardEvent) {
    // Prevenir el comportamiento predeterminado de pegar
    event.preventDefault();
  }

}
