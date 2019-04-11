import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JBVErrorHandler } from './jbverror-handler';
import { JbvService } from './jbv.service';
import { JbvFieldDirective } from './jbv-field.directive';
import { JbvErrorClassDirective } from './jbv-error-class.directive';
import { JbvErrorMessageDirective } from './jbv-error-message.directive';
import { JbvShowOnErrorDirective } from './jbv-show-on-error.directive';

let instance: JbvService = null;

export function jbvServiceFactory(): JbvService {
  if (instance == null)
    instance = new JbvService();
  return instance;
} 

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    JbvFieldDirective,
    JbvErrorClassDirective,
    JbvErrorMessageDirective,
    JbvShowOnErrorDirective
  ],
  providers: [
    {provide: JbvService, useFactory: jbvServiceFactory},
    {provide: ErrorHandler, useClass: JBVErrorHandler}
  ],
  exports:[
    JbvFieldDirective,
    JbvErrorClassDirective,
    JbvErrorMessageDirective,
    JbvShowOnErrorDirective
  ]
})
export class JbvModule { }
