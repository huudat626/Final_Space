import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable() // provide service in module
export class Service {

  constructor(private http: HttpClient) { /*empty*/ }

  public getQuery(query: string) {
    // define common url
    const url: string = `https://finalspaceapi.com/api/v0/${query}`;

    // define header to specify token

    // execute request
    return this.http.get(url);

  }
  // public postQuery(query: string){

  // }
}
