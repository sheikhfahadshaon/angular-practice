import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UniversityModel } from '../models/university-model';
import { TrainningPeriodModel } from '../models/trainning-period-model';

@Injectable()
export class TrainningPeriodServices {
  
  private apiUrl = 'https://localhost:7198/trainningperiod';

  constructor(private http: HttpClient){}

  getTrainningPeriods():Observable<TrainningPeriodModel[]> {
    return this.http.get<TrainningPeriodModel[]>(this.apiUrl);
  }
}
