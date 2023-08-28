import { Component } from '@angular/core';
import { FormGroup , FormBuilder , Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommanService } from '../comman/comman.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  LoginForm!: FormGroup;
  userData : any;

  constructor( private commanService : CommanService,  
    private router : Router,
    private formBuilder: FormBuilder, private http: HttpClient) {
    this.LoginForm = this.formBuilder.group({
      Email: ['', Validators.required],
      Password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.LoginForm.valid) {
      const Email = this.LoginForm.value.Email;
      const Password = this.LoginForm.value.Password;

      this.http.get<any[]>(`http://localhost:3000/Users?Email=${Email}&Password=${Password}`)

        .subscribe(Users => {
          console.log(Users);
       
          if (Users.length === 1) {

            this.userData=Users[0];
            this.commanService.userName=this.userData.Username;
            this.commanService.address=this.userData.Address;
            this.commanService.mobileNo=this.userData.MobNumber;
            this.commanService.emailId=this.userData.Email;
            this.commanService.companyName=this.userData.UserCompnany;
            this.commanService.id=this.userData.id;
            
            this.commanService.sucessToaster('You Have Login Sucessfully !','success',
            {
             timeOut: 3000,
             positionClass: 'toast-top-center'
            });

            this.commanService.hideSignUpButton=true;
            this.router.navigateByUrl('home');
          } else {
            
            this.commanService.error('Invalid Credentials','Warning',
            {
             timeOut: 2000,
             positionClass: 'toast-top-center'
            })
          }
        });
    }
  }



}

