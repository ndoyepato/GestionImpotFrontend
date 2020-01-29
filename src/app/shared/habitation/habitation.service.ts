import {Injectable} from '@angular/core';
import {HttpHeaders, HttpClient, HttpErrorResponse} from "@angular/common/http";
import {throwError} from "rxjs";
import {Habitation} from './habitation.model';


@Injectable({
    providedIn: 'root'
})
export class AlerteService {

    constructor(private http: HttpClient) {
    }

    send(habitation: Habitation) {
        return this.http.post(
            "url",
            JSON.stringify(habitation),
            {
                headers: AlerteService.getCommonHeaders()
            }
        )
    }

    private static getCommonHeaders() {
        return new HttpHeaders({
            "Content-Type": "application/json",
            //"Authorization": "Bearer " + Config.getUser().token,
        });
    }

    private handleErrors(error: HttpErrorResponse) {
        //console.log("requestCodeError");
        //console.log(JSON.stringify(error));
        return throwError(error);
    }
}
