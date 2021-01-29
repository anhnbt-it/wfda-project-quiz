import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private URL = 'http://localhost:8080/admin/group/api';

  constructor(private http: HttpClient) {
  }

  getAll(): any {
    return this.http.get(this.URL);
  }


}
