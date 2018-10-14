import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from '../../environments/environment';
import { Person } from '../model/person';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  
  urlRoot: String;
  constructor(private http:HttpClient) { 
    this.urlRoot = environment.urlRoot;
  }

  getPeople() {

    return this.http.get(this.urlRoot + '/Person',
    );
  }

  getPerson(id: number) {
    return this.http.get(this.urlRoot + '/Person/' + id,
    );
  }

  createPerson(person) {
    let body = JSON.stringify(person);
    return this.http.post(this.urlRoot + '/Person', body, httpOptions);
  }

  getPersonByUserName(userName: String): Observable<Person> {
    return this.http.get<Person>(this.urlRoot + '/Person/userName/' + userName,
    );
  }


}
