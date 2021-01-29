import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  constructor(private http: HttpClient) { }
public getAll(id: number){
  return this.http.get('http://localhost:8080/user/assign/api?id=' + id);
}
  public getById(id: number){
    return this.http.get('http://localhost:8080/user/assign/api/his?id=' + id);
  }
}
