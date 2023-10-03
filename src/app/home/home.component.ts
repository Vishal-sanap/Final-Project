import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommanApiCallServicesService } from '../comman/comman-api-call-services.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  isSidenavOpen: boolean = true;
  public userData: any;
  public user: any;

  constructor(
    private router: Router,
    private commanService: CommanApiCallServicesService,
  ) {
    commanService.apiCall1().subscribe((val) => {
      this.userData = val;
    });
    commanService.apiCall2().subscribe((val) => {
      this.user = val;
    });
  }

  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }
  arebic() {
    this.router.navigateByUrl('arebic');
    this.commanService.successToaster('تحولت إلى اللغة الإنجليزية', 'نجاح', {
      timeOut: 2000,
      positionClass: 'toast-top-center',
    });
  }
}
