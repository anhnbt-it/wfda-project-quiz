import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService{

  constructor(private http: HttpClient) {
  }
  createUser(value: any): Observable<any>{
    return this.http.post('http://localhost:8080/register', value);
  }

  login(value: any): Observable<any>{
    return this.http.post('http://localhost:8080/login', value);
  }
}
