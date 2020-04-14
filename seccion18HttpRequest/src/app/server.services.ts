import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable()
export class ServerService {

    constructor(private http: HttpClient) { }

    storeServers(servers: any[]) {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        // aqui todavia no se envia la request
        // return this.http.post('https://udemy-http-angularcourse.firebaseio.com/data.json', servers,
        //     {headers});
        return this.http.put('https://udemy-http-angularcourse.firebaseio.com/data.json', servers,
            { headers });
    }

    // getServers() {
    //     return this.http.get('https://udemy-http-angularcourse.firebaseio.com/data.json');
    // }
    //better approach, to reuse this method all around the app
    getServers() {
        return this.http.get('https://udemy-http-angularcourse.firebaseio.com/data')
            .pipe(map(
                (response: any[]) => {
                    for (const server of response) {
                        server.name = 'FETCHED_' + server.name;
                    }
                    return response;
                }),
                catchError(
                    (error) => {
                        // console.log(error);
                        throw ('Something went wrong');
                    }
                )
            );
    }
    getAppName() {

        return this.http.get('https://udemy-http-angularcourse.firebaseio.com/data/appName.json')
            .pipe(map(
                (response) => {
                    return response;
                })
            );


    }
}
