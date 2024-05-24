import { LoadingIndicatorService } from './../../service/loading-indicator.service';
import { AppServices } from './../../service/app-services';
import { Router } from '@angular/router';
import { Component, OnInit , ChangeDetectorRef } from '@angular/core';
import { FormGroup , FormBuilder , Validators , FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { ResetPasswordPopupComponent } from '../reset-password-popup/reset-password-popup.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({})
  constructor(private formBuilder : FormBuilder , private router : Router , private appService : AppServices , private toast : ToastrService , private loader : LoadingIndicatorService , private dialog : MatDialog , private cdrref : ChangeDetectorRef){
    console.log("Inside Login");
  }

  ngOnInit(){

    this.loginForm = this.formBuilder.group({
      employeeCode : new FormControl('',[Validators.required]),
      password : new FormControl('',[Validators.required])
    })
  }

  login = () =>{
    try{
      if(this.loginForm.valid){
        this.loader.showLoadingIndicator();
        let obj : any = {};
        obj['id'] = this.loginForm.controls['employeeCode'].value;
        obj['type'] = "1";
        obj['password'] = this.loginForm.controls['password'].value;
        console.log("Obj", obj);
        this.appService.login(obj).subscribe((res : any)=>{
          this.loader.closeLoadingIndicator();
          if(res['data']){
            this.toast.success("Login Success!!");
            localStorage.setItem("userDetails",JSON.stringify(res['data']));
            if(res['data']['role'] == '0'){
              this.router.navigateByUrl('/dashboard')
              localStorage.setItem('userRole','ADMIN')
              this.cdrref.detectChanges();
            }else {
              localStorage.setItem('userRole','EMPLOYEE');
              this.router.navigateByUrl('/employee-complaints');
              this.cdrref.detectChanges();
            }
          }else {
            // show toast here
            this.loader.closeLoadingIndicator();
            this.toast.error("Login Fail!!");
          }
        })
      }else {
        this.toast.warning("Required Parameter Missing!!");
      }
    }catch(err){
      console.log(err)
    }
  }

  resetPassword(){
    try{
      let dialgoRef = this.dialog.open(ResetPasswordPopupComponent , {
      }).afterClosed().subscribe((result : any)=>{
        // dialgoRef = undefined;
        if(result == 'reset'){
          this.dialog.closeAll();
        }
      });
    }catch(err){
      console.log(err);
    }
  }
}
