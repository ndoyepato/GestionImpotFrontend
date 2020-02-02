import {Injectable} from '@angular/core';
import {HttpHeaders, HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {throwError} from "rxjs";
import {Habitation} from './habitation.model';


@Injectable({
    providedIn: 'root'
})
export class HabitationService {

    constructor(private http: HttpClient) {
    }

    getAllHI() {
        var url = "http://localhost/api/all-habitation-ind";
        return this.http.get(
            url,
            {
                headers: HabitationService.getCommonHeadersGet(), observe: 'response'
            }
        )
    }

    getAllHP() {
        var url = "http://localhost/api/all-habitation-pro";
        return this.http.get(
            url,
            {
                headers: HabitationService.getCommonHeadersGet(), observe: 'response'
            }
        )
    }

    add(habitation: Habitation) {
        var url = "";
        habitation.isIndividual ? url = "http://localhost/api/add-habitation-ind" : "http://localhost/api/add-habitation-pro";
        return this.http.post(
            url,
            JSON.stringify(habitation),
            {
                headers: HabitationService.getCommonHeaders(), observe: 'response'
            }
        )
    }

    edit(habitation: Habitation) {
        var url = "";
        habitation.isIndividual ? url = "http://localhost/api/edit-habitation-ind" : "http://localhost/api/edit-habitation-pro";

        return this.http.post(
            url,
            JSON.stringify(habitation),
            {
                headers: HabitationService.getCommonHeaders(), observe: 'response'
            }
        )
    }

    delete(habitation: Habitation) {
        var url = "";
        habitation.isIndividual ? url = "http://localhost/api/add-habitation-ind" : "http://localhost/api/add-habitation-pro";

        return this.http.post(
            url,
            JSON.stringify(habitation),
            {
                headers: HabitationService.getCommonHeaders(), observe: 'response'
            }
        )
    }

    private static getCommonHeaders() {
        return new HttpHeaders({
            "Content-Type": "application/x-www-form-urlencoded"
        });
    }

    private static getCommonHeadersGet() {
        return new HttpHeaders({
            "Content-Type": "application/json"
        });
    }

    private handleErrors(error: HttpErrorResponse) {
        return throwError(error);
    }
}
