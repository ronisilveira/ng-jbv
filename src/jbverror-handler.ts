import { Injectable, ErrorHandler } from "@angular/core";
import { JbvService } from "./jbv.service";

@Injectable()
export class JBVErrorHandler implements ErrorHandler {
    
    constructor(private jbvService: JbvService) {}

    handleError(response: any): void {

        if (response.status == 400) {
            if (response.has("error"))
                this.jbvService.addErrors(response.error.errors);
            else
                this.jbvService.addErrors(response.json().errors);
        } else
            console.error(response);
    }
}
