import { Directive, OnInit, ViewContainerRef, TemplateRef } from '@angular/core';
import { JbvFieldDirective } from './jbv-field.directive';
import { JbvService } from './jbv.service';

@Directive({
  selector: '[jbvShowOnError]'
})
export class JbvShowOnErrorDirective implements OnInit {

  constructor(
    private jbvField: JbvFieldDirective,
    private jbvService: JbvService,
    private template: TemplateRef<any>,
    private container: ViewContainerRef
  ) { }

  ngOnInit(): void {
    this.jbvService.errorEmitter.subscribe(errors => {
      if (errors.has(this.jbvField.jbvField)) {
        this.container.createEmbeddedView(this.template);
      } else {
        this.container.clear();
      }
    });
  }
}
