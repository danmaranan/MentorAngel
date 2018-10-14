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
export class ActivityService {
  
  urlRoot: String;
  constructor(private http:HttpClient) {  
    this.urlRoot = environment.urlRoot;
  }

  getActivities() {
    return this.http.get(this.urlRoot + '/Activity');
  }

  getActivity(id: number) {
    return this.http.get(this.urlRoot + '/Activity/' + id);
  }

  createActivity(activity) {
    let body = JSON.stringify(activity);
    return this.http.post(this.urlRoot + '/Activity', body, httpOptions);
  }

}
