import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment.development";

@Injectable()
export class ServiceFiles{
    constructor(
        private _http: HttpClient
    ) {
    }
    sendFile(fileN: string, fileC: string): Observable<any>{
        let dataJSON = JSON.stringify({
            fileName: fileN,
            fileContent: fileC
        })
        let headers = new HttpHeaders({
            'Content-Type': 'application/json'
        })
        let url = environment.urlFiles + "api/TestingFiles"
        return this._http.post(url, dataJSON, { headers: headers })
    }
}