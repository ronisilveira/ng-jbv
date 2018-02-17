import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class JbvService {

  errors = new Map<string, string>();

  errorEmitter = new EventEmitter<Map<string, string>>();

  constructor() { }

  addErrors(errors: any) {

    if (errors.status == 400) {
      this.errors.clear();
      errors.errors.forEach(err => this.errors.set(err.field, err.defaultMessage));
      this.errorEmitter.emit(this.errors);
    }
  }
}
