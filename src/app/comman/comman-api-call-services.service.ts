import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CommanApiCallServicesService {
  url = 'http://localhost:3000/';
  // userUrl='http://localhost:3000/Users';

  constructor(private httpclient: HttpClient) {}

  postApiCall(endPoint: string, Request: any) {
    let url = this.url + endPoint;
    return this.httpclient.post(url, Request);
  }

  getApiCall(endPoint: string, id?: number) {
    let url = this.url + endPoint;
    return this.httpclient.get(url);
  }

  patchApiCall(endPoint: any, data: any, id: number): any {
    let url = this.url + endPoint + '/' + id;
    return this.httpclient.patch(url, data);
  }

  deleteApiCall(endPoint: string, id: number) {
    let url = this.url + endPoint + '/' + id;
    console.log(url);
    return this.httpclient.delete(url);
  }

  getApiCallById(endPoint: string, id: number) {
    let url = this.url + endPoint + '/' + id;
    return this.httpclient.get(url);
  }
}
