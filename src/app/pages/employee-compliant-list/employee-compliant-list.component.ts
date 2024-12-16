import { EmployeeActionPopupComponent } from './../employee-action-popup/employee-action-popup.component';
import { Component } from '@angular/core';
import { AppServices } from './../../service/app-services';
import { ToastrService } from 'ngx-toastr';
import { LoadingIndicatorService } from './../../service/loading-indicator.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-employee-compliant-list',
  templateUrl: './employee-compliant-list.component.html',
  styleUrls: ['./employee-compliant-list.component.scss']
})
export class EmployeeCompliantListComponent {
  complaintsList :any = [];
  closeComplaintsList : any = [];
  userDetails:any ;
  constructor(private service : AppServices , private toast : ToastrService , private loader : LoadingIndicatorService, private dialog : MatDialog){
    this.userDetails = localStorage.getItem('userDetails') ? localStorage.getItem('userDetails') : null
    this.getAllComplaints(JSON.parse(this.userDetails));
  }

  getAllComplaints = (userDetails : any) => {
    try{
      this.loader.showLoadingIndicator();
      this.service.getMyAssignedComplaints(userDetails).subscribe((res : any)=>{
        this.loader.closeLoadingIndicator();
        if(res.data.length > 0){
          for(let i = 0 ; i < res.data.length ; i++){
            const d = res.data[i];
            if(d.serviceRequestId && d.serviceRequestId.customerId && d.serviceRequestId.customerId.customerName){
              if(d.serviceRequestId?.status == '1' || d.serviceRequestId?.status == '2'){
                this.complaintsList.push(d);
              }else if(d.serviceRequestId?.status == '0'){
                this.closeComplaintsList.push(d);
              }
            }
          }
        }
      })
    }catch(err){
      console.log(err);
    }
  }

  closeServiceRequest = (complaint:any) =>{
    try{
      this.loader.showLoadingIndicator();
      const user = JSON.parse(this.userDetails);
      let data : any = {};
      data['employeeId'] = user._id;
      data['complaintId'] = complaint.serviceRequestId._id;
      this.service.closeComplaint(data).subscribe((res:any)=>{
        if(res){
          this.loader.closeLoadingIndicator();
          this.getAllComplaints(JSON.parse(this.userDetails));
          this.toast.success("Service Request Closed Successfully!!");
        }
      })
    }catch(err){
      console.log(err);
    }
  }

  showTakeActionPopup = (complaint :any) =>{
    try{
      let dialgoRef = this.dialog.open(EmployeeActionPopupComponent , {
        data: {
          complaint : complaint
        }
      }).afterClosed().subscribe((result : any)=>{
        // dialgoRef = undefined;
        if(result == 'updatedStatus'){
          this.getAllComplaints(JSON.parse(this.userDetails));
          this.dialog.closeAll();
        }
      });
    }catch(err){

    }
  }
}
