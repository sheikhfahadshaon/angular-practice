import { Injectable } from '@angular/core';
import { Trainee } from '../interfaces/trainee';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  apiUrl = 'https://localhost:7198/trainee';
  constructor(private httpClient: HttpClient) { }

  getUsers(page: number = 1, pageSize: number = 10): Observable<{ trainees: Trainee[], totalCount: number }> {
  let params = new HttpParams()
    .set('pageNumber', page.toString())
    .set('pageSize', pageSize.toString());

  return this.httpClient.get<{ trainees: Trainee[], totalCount: number }>(this.apiUrl, { params });
}

}
