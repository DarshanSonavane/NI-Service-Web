import { Component } from '@angular/core';
import { AppServices } from './../../service/app-services';
import { ToastrService } from 'ngx-toastr';
import { LoadingIndicatorService } from './../../service/loading-indicator.service';

@Component({
  selector: 'app-employee-compliant-list',
  templateUrl: './employee-compliant-list.component.html',
  styleUrls: ['./employee-compliant-list.component.scss']
})
export class EmployeeCompliantListComponent {
  complaintsList :any = [];
  userDetails:any ;
  constructor(private service : AppServices , private toast : ToastrService , private loader : LoadingIndicatorService){
    this.userDetails = localStorage.getItem('userDetails') ? localStorage.getItem('userDetails') : null
    this.getAllComplaints(JSON.parse(this.userDetails));
  }

  getAllComplaints = (userDetails : any) => {
    try{
      this.loader.showLoadingIndicator();
      console.log("userDetails",userDetails)
      this.service.getAllComplaints(userDetails).subscribe((res : any)=>{
        this.loader.closeLoadingIndicator();
        this.complaintsList = res.data;
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
}
