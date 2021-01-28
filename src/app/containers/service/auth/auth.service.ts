import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from '../localStorage/local-storage.service';
import { ApiService } from '../api/api.service';
import { API_URL } from '../../constants/configs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    private localStorageService: LocalStorageService,
    private httpClient: HttpClient,
    private apiService: ApiService
  ) { }

  // tslint:disable-next-line:ban-types
  login = (username: string, password: string): Promise<Object> => {
    return new Promise((resolve, reject) => {
      const url = `${API_URL}user/login`;
      this.httpClient.post(url, { username, password })
        .subscribe(res => {
          resolve(res);
        }, err => {
          reject(err);
        });
    });
  }

  logout = () => {
    this.localStorageService.delete('student');
  }

  isLogin = () => {
    const user = this.localStorageService.get('student');
    if (user && typeof user === 'object') {
      return user.employeeId && user.userName && user.token;
    }
    return false;
  }

  saveLocal = (employee: any) => {
    this.localStorageService.set('student', employee);
  }

  getLocal = () => {
    return this.localStorageService.get('student');
  }

  getToken = (): string => {
    const user = this.getLocal();
    return user ? user.token : null;
  }

  changePassword = (oldPassword: any, newPassword: any, confirmPassword: any, id: any) => {
    return new Promise((resolve, reject) => {
      const url = `${API_URL}user/change-password`;
      this.apiService.postWithToken(url, { oldPassword, newPassword, confirmPassword, id })
        .subscribe(res => {
          resolve(res);
        }, err => {
          reject(err);
        });
    });
  }
}
