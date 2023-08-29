import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommanApiCallServicesService } from 'src/app/comman/comman-api-call-services.service';
import { CommanService } from 'src/app/comman/comman.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  SignupForm!: FormGroup;
  journey!: string;
  postResponse: any;
  user: any = {};
  formdata: any;
  dataId!: any;
  editData: any;
  userById:any;
  compnies = ['Trishala', 'Shanti', 'F-31'];

  constructor(
    private router: Router,
    private formbuilder: FormBuilder,
    private commanservice: CommanService,
    private commanapicallservice: CommanApiCallServicesService
  ) {}

  ngOnInit() {
    this.editData = this.commanservice.id;
    console.log('id--', this.editData);
    this.userById=this.commanservice.dataByUserId 

    // this.dataId = this.commanservice.dataByUserId;
    if(this.editData){
      // this.getUserById();
      this.SignupFormDetails();

    }else{
      this.SignupFormDetails();
    }
    
  }
  async getUserById(){
    this.userById=await this.commanapicallservice.getApiCallById('Users', this.editData).toPromise();
    console.log(this.userById);
    
  }

  // async postHoteldata(){
  //   console.log(this.SignupForm.value, 'signupform');
  //   this.formdata=this.SignupForm.value;
  //   this.commanservice.storeData=await this.commanservice.postApi(this.formdata).toPromise()
  // alert('data update sucessfully')
  // }

  SignupFormDetails() {
    this.SignupForm = this.formbuilder.group({
      Username: [
        this.userById ? this.userById.Username : '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12),
          Validators.pattern('^[a-z0-9]{8,15}$'),
        ],
      ],
      Address: [
        this.userById ? this.userById.Address : '',
        [Validators.required],
      ],
      MobNumber: [
        this.userById ? this.userById.MobNumber : '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(12),
          Validators.pattern('[7-9]\\d{9}'),
        ],
      ],
      Email: [
        this.userById ? this.userById.Email : '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      UserCompany: [
        this.userById ? this.userById.UserCompany : '',
        [Validators.required],
      ],
      Password: [
        this.userById ? this.userById.Password : '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(
            '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
          ),
        ],
      ],
    });
  }

  SubmitDetails() {
    let endpoint = 'Users';
    console.log('form data', this.SignupForm.value);
    this.router.navigateByUrl('/home');
    this.commanservice.sucessToaster(
      'Congratulations , You Have Signin Sucessfully',
      'success',
      {
        timeOut: 5000,
        positionClass: 'toast-top-center',
      }
    );

    // {
    //     timeOut: 10000,
    //     positionClass: 'toast-top-center'
    //    }

    let Request = {
      Username: this.SignupForm.value.Username,
      Address: this.SignupForm.value.Address,
      MobNumber: this.SignupForm.value.MobNumber,
      Email: this.SignupForm.value.Email,
      UserCompnany: this.SignupForm.value.UserCompany,
      Password: this.SignupForm.value.Password,
      
    };
    


    if (this.dataId) {
      this.commanapicallservice
        .patchApiCall(endpoint, Request, this.dataId)
        .subscribe((resp: any) => {
          console.log(resp);
        });
    } else {
      this.commanapicallservice
        .postApiCall(endpoint, Request)
        .subscribe((resp: any) => {
          console.log(resp);
        });
    }

    this.router.navigateByUrl('home/dashboard');

    // this.commanapicallservice
    //   .postApiCall(endpoint, Request)
    //   .subscribe((data: any) => {
    //     console.log('data', data);
    //   });
    // console.log('data',Request);
  }

  // Initialize an empty object

  // ngOnDestroy(){
  //   this.commanservice.dataByUserId = {};
  //   this.commanservice.id = '';
  // }
}
