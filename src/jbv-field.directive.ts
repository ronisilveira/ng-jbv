import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[jbvField]'
})
export class JbvFieldDirective {

  @Input()
  jbvField: string;

  constructor() { }

}
