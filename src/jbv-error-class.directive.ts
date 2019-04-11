import { Directive, OnInit, Input, ElementRef, Renderer } from '@angular/core';
import { JbvFieldDirective } from './jbv-field.directive';
import { JbvService } from './jbv.service';

@Directive({
  selector: '[jbvErrorClass]'
})
export class JbvErrorClassDirective implements OnInit {

  @Input()
  jbvErrorClass: string;

  constructor(
    private jbvField: JbvFieldDirective,
    private jbvService: JbvService, 
    private element: ElementRef,
    private renderer: Renderer
  ) { }

  ngOnInit(): void {
    this.jbvService.errorEmitter.subscribe(errors => {
      if (this.jbvErrorClass) {
        this.jbvErrorClass.split(" ").forEach(value => this.renderer.setElementClass(this.element.nativeElement, value, this.jbvService.errors.has(this.jbvField.jbvField)))
      }
    });
  }
}
