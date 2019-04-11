import { Injectable, ErrorHandler } from "@angular/core";
import { JbvService } from "./jbv.service";

@Injectable()
export class JBVErrorHandler implements ErrorHandler {
    
    constructor(private jbvService: JbvService) {}

    handleError(response: any): void {

        if (response.status == 400)
            this.jbvService.addErrors(response.error.errors);
        else
            console.error(response);
    }
}
