import { ComplaintDetailsPopupComponent } from './../complaint-details-popup/complaint-details-popup.component';
import { AssignCompliantPopupComponent } from './../assign-compliant-popup/assign-compliant-popup.component';
import { DateFilterPipe } from './../../pipes/date-filter.pipe';
import { AppServices } from './../../service/app-services';
import { Component , ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { LoadingIndicatorService } from './../../service/loading-indicator.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-complaint-list',
  templateUrl: './complaint-list.component.html',
  styleUrls: ['./complaint-list.component.scss']
})
export class ComplaintListComponent {
  complaintsList = [];
  closeComplaintsList = [];
  userDetails:any
  dataSource :any ;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  excelData:any;
  constructor(private service : AppServices , private dialog : MatDialog , private toast : ToastrService , private loader : LoadingIndicatorService){
    this.userDetails  = localStorage.getItem('userDetails') ? localStorage.getItem('userDetails') : null
    this.getAllComplaints(JSON.parse(this.userDetails));
  }

  getAllComplaints = (userDetails : any) => {
    try{
      console.log("userDetails",userDetails)
      this.loader.showLoadingIndicator()
      this.service.getAllComplaints(userDetails).subscribe((res : any)=>{
        this.loader.closeLoadingIndicator();
        this.complaintsList = res.data;
        this.closeComplaintsList = res.data.filter(data=> data.status == '0' || data.status == 0);
        this.excelData = this.prepareExcelData();
      })
    }catch(err){
      console.log(err);
    }
  }

  returnZero = () =>{
    return 0;
  }

  assign = (complaint:any) =>{
    try{
      let dialgoRef = this.dialog.open(AssignCompliantPopupComponent , {
        data: {
          selectedServiceRequest : complaint._id
        }
      }).afterClosed().subscribe((result : any)=>{
        // dialgoRef = undefined;
        if(result == 'assigned'){
          this.getAllComplaints(JSON.parse(this.userDetails));
          this.dialog.closeAll();
        }
      });
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
      data['complaintId'] = complaint._id;
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

  openDetailsPopup = (complaint:any) =>{
    try{
      let dialgoRef = this.dialog.open(ComplaintDetailsPopupComponent , {
        data: {
          complaint : complaint
        }
      }).afterClosed().subscribe((result : any)=>{
        // dialgoRef = undefined;
        if(result == 'close'){
          this.getAllComplaints(JSON.parse(this.userDetails));
          this.dialog.closeAll();
        }
      });
    }catch(err){
      console.log(err);
    }
  }

  exportExcel() {
    const workSheet = XLSX.utils.json_to_sheet(this.excelData);
    const workBook: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, 'SheetName');
    XLSX.writeFile(workBook, 'complaintList.xlsx');
  }

  prepareExcelData(){
    let excelDataArr = []
    for(var i = 0 ; i < this.complaintsList.length ; i++){
      let d = this.complaintsList[i];
      let obj = {}
      obj['Date Of Complaint'] = this.convertDate(d.createdAt);
      obj['Complaint Status'] = d.status == '0' ? 'Close' : 'Open';
      obj['Machine Type'] = d.machineType ? d.machineType == '0' ? 'Petrol' : 'Disel' : '-';
      obj['Complaint Type'] = d.complaintType.name;
      obj['Customer Code'] = d.customerId ? d.customerId.customerCode : '-';
      obj['Customer Name'] = d.customerId && d.customerId.customerName ? d.customerId.customerName : '-';
      obj['Employee Feedback'] = d.employeeFeedback ? d.employeeFeedback : '-';
      obj['Customer Feedback'] = d.ratings && d.ratings.feedback ? d.ratings.feedback : '-'
      excelDataArr.push(obj);
    }

    return excelDataArr;
  }

  convertDate(createdDate : any){
    const monthNames = ["Jan" , "Feb" , "Mar" , "Apr" , "May" , "Jun" , "Jul" , "Aug" , "Sep" , "Oct" , "Nov" , "Dec"];

    if(createdDate){
      const newDate = new Date(createdDate);
      console.log("newDate",newDate);
      const formattedDate = newDate.getDate() + " " + monthNames[newDate.getMonth()] + " " + newDate.getFullYear();
      return formattedDate;
    }else {
      return '-';
    }
  }
}




