import { Component ,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CommanService } from '../comman/comman.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  userName : any ;
  hideButton! : boolean;
  isSidenavOpen: boolean = true;

  constructor(private router : Router , private commanService : CommanService,) {}

ngOnInit(){ 
  this.userName=this.commanService.userName;
  this.hideButton=this.commanService.hideSignUpButton;
}
  signup(){
    this.router.navigateByUrl('signup');
  }
  login(){
    this.router.navigateByUrl('login');
  }

  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }
}
