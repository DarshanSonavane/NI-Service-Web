import { AppServices } from './../../service/app-services';
import { Component, Inject } from '@angular/core';
import { MatDialogRef , MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup , FormBuilder , Validators , FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoadingIndicatorService } from './../../service/loading-indicator.service';

@Component({
  selector: 'app-assign-compliant-popup',
  templateUrl: './assign-compliant-popup.component.html',
  styleUrls: ['./assign-compliant-popup.component.scss']
})
export class AssignCompliantPopupComponent {

  employeeList : any = [];
  selectedEmployee : any = "";
  assignForm: FormGroup = new FormGroup({});
  selectedComplaint : any = "";
  config :any;
  constructor(public dialogRef : MatDialogRef<AssignCompliantPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data : AssignCompliantPopupComponent , private service : AppServices , private toast : ToastrService , private loader : LoadingIndicatorService){
      this.getEmployeeList();
      console.log(this.data);
      this.config = data;
  }

  getEmployeeList = () =>{
    try{
      this.loader.showLoadingIndicator();
      this.service.getEmployeeList().subscribe((res:any)=>{
        if(res && res['data'] && res['data'].length > 0){
          this.loader.closeLoadingIndicator();
          this.employeeList = res['data'];
        }else {
          // add toast
          this.toast.warning("Something went wrong");
        }
      })
    }catch(err){
      console.log(err);
    }
  }
  assignComplaint = () =>{
    try{
      console.log("selectedValue====",this.selectedEmployee);
      console.log("selectedValue====",this.config['selectedServiceRequest']);
      this.loader.showLoadingIndicator();
      let data : any = {};
      data['employeeId'] = this.selectedEmployee;
      data['complaintId'] = this.config['selectedServiceRequest']
      this.service.assignCompliant(data).subscribe((res:any)=>{
        if(res){
          this.loader.closeLoadingIndicator();
          this.dialogRef.close('assigned');
          this.toast.success("Service Request Assigned To Employee Successfully!!");
        }else {
          this.toast.error("Something went wrong!!");
        }
      })
    }catch(err){
      console.log(err);
    }
  }

  closeDialog = () =>{
    this.dialogRef.close();
  }

  onEmployeeSelect = (value : any) =>{
    this.selectedEmployee = value;
    console.log("selectedValue====",this.selectedEmployee);
  }
}
