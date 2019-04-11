import { Injectable, ErrorHandler } from "@angular/core";
import { JbvService } from "./jbv.service";

@Injectable()
export class JBVErrorHandler implements ErrorHandler {
    
    constructor(private jbvService: JbvService) {}

    handleError(error: any): void {

        console.log(error);
        
        if (error.status == 400)
            this.jbvService.addErrors(error.errors);
        else
            console.error(error);
    }
}
