import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class CommanApiCallServicesService {
  url1 = 'http://localhost:3000/Users';
  url2 = 'http://localhost:3000/arabiclang';
 

  constructor(private httpclient: HttpClient, private toastrService:ToastrService) {}
  apiCall1(){
    return this.httpclient.get(this.url1);
  }
  apiCall2(){
    return this.httpclient.get(this.url2);
  }
  successToaster( msg:any, title:any, configuration:any ){
    this.toastrService.success( msg, title, configuration)
}
}
