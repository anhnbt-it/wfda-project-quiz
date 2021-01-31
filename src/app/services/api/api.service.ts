import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { LocalStorageService } from '../localStorage/local-storage.services';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ApiService {


  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) { }

  get = (url: string) => {
    return this.http.get(url);
  }

  post = (url: string, data: any) => {
    return this.http.post(url, data);
  }

  postWithToken = (url: string, data: any): Observable<any> => {
    const user = this.localStorageService.get('student');
    const token = user ? user.token : null;
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);
    return this.http.post(url, data, { headers });
  }

  getWithToken = (url: string): Observable<any> => {
    const user = this.localStorageService.get('student');
    const token = user ? user.token : null;
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);
    return this.http.get(url, { headers });
  }

  uploadFileWithToken = (url: string, file: string | Blob): Observable<any> => {
    const user = this.localStorageService.get('student');
    const token = user ? user.token : null;
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);
    const form = new FormData();
    form.append('file', file);
    return this.http.post(url, form, { headers });
  }
}
