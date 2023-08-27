import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommanService {
  
  journey! : string;
  getApiData:any;
  storeData:any;
  newUser:boolean=false;
  userDataByUsername:any;
  id!:any;
  userName! : string;
  address! : string;
  mobileNo!:string;
  emailId!:string;
  companyName!:string;
  url!: string;
  userDetails = 'http://localhost:3000/Users';
  dataByUserId: any;
  hideSignUpButton: boolean = false;

  constructor(private toastrService: ToastrService, private http: HttpClient) {}

  postApi(user: any) {
    return this.http.post(this.url, user);
  }

  getUserData() {
    return this.http.get('http://localhost:3000/Users');
  }

  sucessToaster(msg: any, title: any, configuration: any) {
    this.toastrService.success(msg, title, configuration);
  }

  error(msg: any, title: any, configuration: any) {
    this.toastrService.error(msg, title, configuration);
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>('db.json');
  }

  getApiCallById(id: any) {
    return this.http.get(this.userDetails + '/' + id);
  }
}
