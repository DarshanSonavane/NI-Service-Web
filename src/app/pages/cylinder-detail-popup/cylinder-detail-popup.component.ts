import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef , MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AppServices } from 'src/app/service/app-services';
import { LoadingIndicatorService } from 'src/app/service/loading-indicator.service';

@Component({
  selector: 'app-cylinder-detail-popup',
  templateUrl: './cylinder-detail-popup.component.html',
  styleUrls: ['./cylinder-detail-popup.component.scss']
})
export class CylinderDetailPopupComponent {

  cylinderForm: FormGroup = new FormGroup({});
  constructor(private formBuilder : FormBuilder ,public dialogRef : MatDialogRef<CylinderDetailPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data : CylinderDetailPopupComponent , private service : AppServices , private toast : ToastrService , private loader : LoadingIndicatorService){}
  

  ngOnInit(){
    this.cylinderForm = this.formBuilder.group({
      CO : new FormControl('',[Validators.required]),
      CO2 : new FormControl('',[Validators.required]),
      HC : new FormControl('',[Validators.required]),
      O2 : new FormControl('',[Validators.required]),
      cylinderNumber : new FormControl('',[Validators.required]),
      cylinderMake : new FormControl('',[Validators.required]),
      validityDate : new FormControl('',[Validators.required]),
      createdBy : new FormControl(''),
    })
    let user = JSON.parse(localStorage.getItem('userDetails'));
    this.cylinderForm.get('createdBy').setValue(user?._id);
  }  
  updateCylinderDetails = () =>{
    try{
      if(this.cylinderForm.valid){
        console.log("Form Value",this.cylinderForm.value);
        this.service.updateCylinderDetails(this.cylinderForm.value).subscribe((res:any)=>{
          this.toast.success("Cylinder Details Updated Successfully!");
          this.dialogRef.close('submitted');
        })
      }
    }catch(err){
      console.log(err);
    }
  }
}
