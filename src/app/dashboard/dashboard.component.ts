import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CommanService } from '../comman/comman.service';
import { DialogComponent } from '../dialog/dialog.component';
import { CommanApiCallServicesService } from '../comman/comman-api-call-services.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  public userData: any;
  public userName!: string;
  public showTable: any;
  public dataById: any;
  public userFormDetails: any[] = [];

  constructor(
    private commanService: CommanService,
    public dialog: MatDialog,
    private commanApiCallService: CommanApiCallServicesService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.userName = 'tushar123';
    this.getUserData();
  }

  displayedColumns: string[] = [
    'id',
    'Username',
    'MobNumber',
    'Address',
    'Email',
    'UserCompnany',
  ];
  // dataSource = ELEMENT_DATA;

  async getUserData() {
    this.showTable = !this.showTable;
    this.commanService.getUserData().subscribe((Response) => {
      this.userData = Response;
      console.log(this.userData);
    });
  }

  userDetailsByUser() {
    this.userData.forEach((element: any) => {
      if (element.username === this.userData) {
        this.userFormDetails.push(element);
      }
    });
  }

  public delete(id: number): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      panelClass: 'dialog-container',
    });
    dialogRef.afterClosed().subscribe((yesValue: any) => {
      if (yesValue === 'YES') {
        this.deleteData(id);
        (this.showTable = !this.showTable), this.getUserData();
      }
    });
  }

  async deleteData(id: number) {
    await this.commanApiCallService.deleteApiCall('Users', id).toPromise();
  }

  async edit(id: number) {
    this.commanService.id = id;
    this.dataById = await this.commanApiCallService
      .getApiCallById('Users', id)
      .toPromise();
    this.commanService.dataByUserId = this.dataById;
    this.router.navigateByUrl('signup');
  }

  back() {
    this.router.navigateByUrl('home');
  }
}

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];
