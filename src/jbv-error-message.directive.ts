import { Directive, Input, OnInit, ElementRef } from '@angular/core';

import { JbvService } from './jbv.service';
import { JbvFieldDirective } from './jbv-field.directive';

@Directive({
  selector: '[jbvErrorMessage]'
})
export class JbvErrorMessageDirective implements OnInit {

  constructor(
    private jbvField: JbvFieldDirective,
    private jbvService: JbvService, 
    private element: ElementRef
  ) { }

  ngOnInit(): void {
    this.jbvService.errorEmitter.subscribe(errors => {
      this.element.nativeElement.textContent = errors.get(this.jbvField.jbvField);
    });
  }
}
