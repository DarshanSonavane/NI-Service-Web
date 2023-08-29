import { LoadingIndicatorService } from './../../service/loading-indicator.service';
import { AppServices } from './../../service/app-services';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder , Validators , FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({})
  constructor(private formBuilder : FormBuilder , private router : Router , private appService : AppServices , private toast : ToastrService , private loader : LoadingIndicatorService){
    console.log("Inside Login");
  }

  ngOnInit(){

    this.loginForm = this.formBuilder.group({
      employeeCode : new FormControl('',[Validators.required])
    })
  }

  login = () =>{
    try{
      if(this.loginForm.valid){
        this.loader.showLoadingIndicator();
        let obj : any = {};
        obj['id'] = this.loginForm.controls['employeeCode'].value;
        obj['type'] = "1";
        console.log("Obj", obj);
        this.appService.login(obj).subscribe((res : any)=>{
          this.loader.closeLoadingIndicator();
          if(res['data']){
            this.toast.success("Login Success!!");
            localStorage.setItem("userDetails",JSON.stringify(res['data']));
            res['data']['role'] == '0' ? this.router.navigateByUrl('/complaints') : this.router.navigateByUrl('/employee-complaints');
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
}
