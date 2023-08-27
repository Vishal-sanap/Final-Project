import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommanService } from '../comman/comman.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  userName : any ;
  address!: string;
  id:any;
  mobileNo:any;
  emailId:any;
  companyName:any;

  constructor( private commanService : CommanService,){}

  ngOnInit(){
    this.address=this.commanService.address;
    this.userName=this.commanService.userName;
    this.id=this.commanService.id;
    this.mobileNo=this.commanService.mobileNo;
    this.emailId=this.commanService.emailId;
    this.companyName=this.commanService.companyName;
    
  }

}
