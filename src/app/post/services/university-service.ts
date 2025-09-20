import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UniversityModel } from '../models/university-model';

@Injectable()
export class UniversityService {
  
  private apiUrl = 'https://localhost:7198/university';

  constructor(private http: HttpClient){}

  getUniversities():Observable<UniversityModel[]> {
    return this.http.get<UniversityModel[]>(this.apiUrl);
  }
}
