import { Component } from '@angular/core';
import { CommanApiCallServicesService } from '../comman/comman-api-call-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-arebic',
  templateUrl: './arebic.component.html',
  styleUrls: ['./arebic.component.scss']
})
export class ArebicComponent {

  isSidenavOpen: boolean = true;
  public user: any;


  constructor(private router: Router, private commanService : CommanApiCallServicesService) {
    commanService.apiCall2().subscribe((val)=>{this.user=val; console.log(this.user);
    })
  }

  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }
  home(){
    this.router.navigateByUrl('home')
    this.commanService.successToaster('Switched To English Language', 'Success', {
      timeOut: 2000,
      positionClass: 'toast-top-center'
    });
  }
}
