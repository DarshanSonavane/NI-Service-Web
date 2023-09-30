import { Component , Inject } from '@angular/core';
import { AppServices } from './../../service/app-services';
import { MatDialogRef , MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup , FormBuilder , Validators , FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoadingIndicatorService } from './../../service/loading-indicator.service';

@Component({
  selector: 'app-employee-action-popup',
  templateUrl: './employee-action-popup.component.html',
  styleUrls: ['./employee-action-popup.component.scss']
})
export class EmployeeActionPopupComponent {

  statusForm: FormGroup = new FormGroup({});
  selectedStatus:any;
  config :any;
  feedback:any;
  statusList:any = [
    {
      "_id":"0",
      "name":"Close"
    },
    {
      "_id":"1",
      "name":"Open"
    }
  ]
  constructor(private formBuilder : FormBuilder ,public dialogRef : MatDialogRef<EmployeeActionPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data : EmployeeActionPopupComponent , private service : AppServices , private toast : ToastrService , private loader : LoadingIndicatorService){
      this.config = data;
  }

  ngOnInit(){
    this.statusForm = this.formBuilder.group({
      feedback : new FormControl('',[Validators.required]),
      status : new FormControl('',[Validators.required])
    })
  }

  onStatusChange = (event:any)=>{
    this.selectedStatus = event;
  }

  updateStatusFeedback = () =>{
    try{
      console.log("Feedback", this.statusForm.controls['feedback'].value);
      console.log("Status======", this.statusForm.controls['status'].value);
      console.log("Status", this.selectedStatus);
      console.log("Config", this.config); 
      let obj :any = {};
      obj['employeeId'] = this.config?.complaint?.employeeId;
      obj['complaintId'] = this.config?.complaint?.serviceRequestId?._id;
      obj['feedback'] = this.statusForm.controls['feedback'].value;
      obj['status'] = this.statusForm.controls['status'].value;
      this.service.updateServiceRequest(obj).subscribe((res:any)=>{
        this.dialogRef.close('updatedStatus');
      })
    }catch(err){
      console.log(err);
    }
  }
}
