import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { newUser } from '../auth/newUser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewUserService {

  

  constructor(private http: HttpClient) {}

  createUser(user: newUser): Observable<newUser> {
    return this.http.post<newUser>(environment.urlRegistry, user);
  }

}
