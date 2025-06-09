import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class Ec2Service {

  constructor(private http: HttpClient) { }
  private url = environment.url + '/instance';
  describeInstances(data:any) {
    return this.http.post<any>(this.url,{"action":"describe"});
  }
  instances(data:any) {
    return this.http.post<any>(this.url,data);
  }



}
