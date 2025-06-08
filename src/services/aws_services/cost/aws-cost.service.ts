import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AwsCostService {

  constructor(private http: HttpClient) { }

  getMonthlyCost() {
    // return this.http.get<any>('https://z8cxowyzx6.execute-api.us-east-2.amazonaws.com/dev/aws-cost');
    return this.http.get<any>('https://z8cxowyzx6.execute-api.us-east-2.amazonaws.com/dev/aws-cost?type=total');
  }

  getCostByService() {
  return this.http.get<any>('https://z8cxowyzx6.execute-api.us-east-2.amazonaws.com/dev/aws-cost?type=byservice');
}

}
