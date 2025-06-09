import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class AwsCostService {

  constructor(private http: HttpClient) { }
  private url= environment.url+'/aws-cost'
  getMonthlyCost() {
    return this.http.get<any>(`${this.url}`+'?type=total');
  }

  getCostByService() {
  return this.http.get<any>(`${this.url}`+'?type=byservice');
}

}
