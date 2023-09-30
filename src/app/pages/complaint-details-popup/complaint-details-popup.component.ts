import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef , MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup , FormBuilder , Validators , FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoadingIndicatorService } from './../../service/loading-indicator.service';

@Component({
  selector: 'app-complaint-details-popup',
  templateUrl: './complaint-details-popup.component.html',
  styleUrls: ['./complaint-details-popup.component.scss']
})
export class ComplaintDetailsPopupComponent implements OnInit {
  config :any;
  detailsArr : any = [];
  constructor(public dialogRef : MatDialogRef<ComplaintDetailsPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data : ComplaintDetailsPopupComponent  , private toast : ToastrService , private loader : LoadingIndicatorService){
      this.config = data;
  }

  ngOnInit(){
    let complaintsObj = this.config?.complaint;
    console.log("complaintsObj",complaintsObj)
    for (const key in complaintsObj) {
      console.log("key",key)
      let obj = {};
      if (complaintsObj.hasOwnProperty(key)) {
        if(key == "createdAt"){
          obj['key'] = "Date Of Complaint"
          obj['value'] = this.convertDate(complaintsObj[key]);
          this.detailsArr.push(obj);
        }else if(key == "complaintType"){
          obj['key'] = "Complaint Type"
          obj['value'] = complaintsObj[key]['name'];
          this.detailsArr.push(obj);
        }else if(key == "customerId"){
          let newObj = {};
          obj['key'] = "Customer Code"
          obj['value'] = complaintsObj[key]['customerCode'];
          newObj['key'] = "Customer Name"
          newObj['value'] = complaintsObj[key]['customerName'];
          this.detailsArr.push(obj);
          this.detailsArr.push(newObj);
        }else if(key == "machineType"){
          obj['key'] = "Machine Type"
          obj['value'] = complaintsObj[key] == "0" ? 'Petrol' : 'Diesel';
          this.detailsArr.push(obj);
        }else if(key == "assignedTo"){
          obj['key'] = "Assigned To"
          obj['value'] = complaintsObj[key]['firstName'] + " " + complaintsObj[key]['LasttName'];
          this.detailsArr.push(obj);
        }else if(key == "status"){
          obj['key'] = "Status"
          obj['value'] = complaintsObj[key] == "0" ? "Close" : "Open";
          this.detailsArr.push(obj);
        }else if(key == "employeeFeedback"){
          obj['key'] = "Feedback"
          obj['value'] = complaintsObj[key];
          this.detailsArr.push(obj);
        }else if(key == "updatedAt"){
          obj['key'] = "Status Date"
          obj['value'] = this.convertDate(complaintsObj[key]);
          this.detailsArr.push(obj);
        }
      }
    }
  }

  returnZero(){
    return 0;
  }

  convertDate = (value) =>{
    try{
      const monthNames = ["Jan" , "Feb" , "Mar" , "Apr" , "May" , "Jun" , "Jul" , "Aug" , "Sep" , "Oct" , "Nov" , "Dec"];
      if(value){
        const newDate = new Date(value);
        console.log("newDate",newDate);
        const formattedDate = newDate.getDate() + " " + monthNames[newDate.getMonth()] + " " + newDate.getFullYear();
        return formattedDate;
    }else {
        return '-';
    }
    }catch(err){
      console.log(err);
    }
  }
}
