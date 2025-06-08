import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Ec2Service {

  constructor(private http: HttpClient) { }

  describeInstances(data:any) {
    return this.http.post<any>('https://z8cxowyzx6.execute-api.us-east-2.amazonaws.com/dev/instance',{"action":"describe"});
  }
  instances(data:any) {
    return this.http.post<any>('https://z8cxowyzx6.execute-api.us-east-2.amazonaws.com/dev/instance',data);
  }



}
