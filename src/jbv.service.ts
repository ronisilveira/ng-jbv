import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class JbvService {

  errors = new Map<string, string>();

  errorEmitter = new EventEmitter<Map<string, string>>();

  constructor() { }

  addErrors(errors: any[]) {

      this.errors.clear();
      errors.forEach(err => this.errors.set(err.field, err.defaultMessage));
      this.errorEmitter.emit(this.errors);
  }
}
