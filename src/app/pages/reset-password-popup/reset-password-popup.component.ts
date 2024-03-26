import { Component, Inject } from '@angular/core';
import { FormGroup , FormBuilder , Validators , FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AppServices } from 'src/app/service/app-services';
import { LoadingIndicatorService } from 'src/app/service/loading-indicator.service';
import { MatDialogRef , MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-reset-password-popup',
  templateUrl: './reset-password-popup.component.html',
  styleUrls: ['./reset-password-popup.component.scss']
})
export class ResetPasswordPopupComponent {
  resetPasswordForm: FormGroup = new FormGroup({})

  constructor(public dialogRef : MatDialogRef<ResetPasswordPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data : ResetPasswordPopupComponent,private formBuilder : FormBuilder  , private appService : AppServices , private toast : ToastrService , private loader : LoadingIndicatorService){

  }

  ngOnInit(){
    this.resetPasswordForm = this.formBuilder.group({
      employeeCode : new FormControl('',[Validators.required]),
      password : new FormControl('',[Validators.required]),
      confirmPassword : new FormControl('',[Validators.required])
    })
  }

  resetPassword(){
    this.loader.showLoadingIndicator();
    if(this.resetPasswordForm.valid){
      let password = this.resetPasswordForm.controls['password'].value;
      let confirmPassword = this.resetPasswordForm.controls['confirmPassword'].value;
      let employeeCode = this.resetPasswordForm.controls['employeeCode'].value;
      if(password === confirmPassword){
        let obj = {};
        obj['employeeCode'] = employeeCode;
        obj['password'] = password;
        this.appService.resetEmploteePassword(obj).subscribe((res)=>{
          if(res){
            this.loader.closeLoadingIndicator();
            this.toast.success("Password updated successfully!");
            this.dialogRef.close('reset');
          }
        },(error : any)=>{
          this.loader.closeLoadingIndicator();
          this.toast.error("Validate Entered Employee Code!");
        })
      }else {
        this.loader.closeLoadingIndicator();
        this.toast.error("Entered password doesen't match!");
      }
    }
  }

  closeDialog = () =>{
    this.dialogRef.close();
  }
}
