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
import { Column } from 'src/app/pages/column.type';

@Component({
  selector: 'app-complaint-list',
  templateUrl: './complaint-list.component.html',
  styleUrls: ['./complaint-list.component.scss']
})
export class ComplaintListComponent {
  complaintsList = [];
  closeComplaintsList = [];
  userDetails:any
  // dataSource :any ;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  excelData:any;
  openComplaintsList = [];
  public dataSource = new MatTableDataSource();

  columns:Column[]=[
    {id:'dateOfComplaint',visible : true ,label:'Date Of Complaint',hideOrder:0 , width : 30},
    {id:'complaintType', visible : true ,label:'Complaint Type',hideOrder:1 , width : 20},
    {id:'customerCode',visible : true ,label:'Customer Code',hideOrder:3 , width : 10},
    {id:'customerName',visible : true ,label:'Customer Name',hideOrder:4 , width : 30},
    {id:'Machine Type',visible : true ,label:'Phone No.',hideOrder:5 , width : 20},
    {id:'status',visible : true ,label:'Status',hideOrder:6 , width : 10},
    {id:'action',visible : true ,label:'Action',hideOrder:0 , width : 30}
  ]

  constructor(private service : AppServices , private dialog : MatDialog , private toast : ToastrService , private loader : LoadingIndicatorService){
    this.userDetails  = localStorage.getItem('userDetails') ? JSON.parse(localStorage.getItem('userDetails')) : null;
    if(this.userDetails.role == "0"){
      this.getAllOpenComplaints(this.userDetails);
      this.getAllCloseComplaints(this.userDetails);
    }

    this.getAllComplaints(this.userDetails);
  }

  getAllOpenComplaints = (userDetails : any) => {
    try{
      this.openComplaintsList = [];
      this.service.getAllOpenComplaints().subscribe((res:any)=>{
        this.openComplaintsList = res.data;
      })
    }catch(err){
      console.log(err);
    }
  }

  getAllCloseComplaints = (userDetails : any) => {
    try{
      this.closeComplaintsList = [];
      this.service.getAllCloseComplaints().subscribe((res:any)=>{
        this.closeComplaintsList = res.data;
      })
    }catch(err){
      console.log(err);
    }
  }

  getAllComplaints = (userDetails : any) => {
    try{
      this.loader.showLoadingIndicator()
      this.service.getAllComplaints(userDetails).subscribe((res : any)=>{
        this.loader.closeLoadingIndicator();
        this.complaintsList = res.data;
        //this.openComplaintsList = res.data.filter((data:any)=> data.status == '1' || data.status == '2');
        // this.dataSource.data = this.complaintsList;
        // this.closeComplaintsList = res.data.filter((data:any)=> data.status == '0' || data.status == 0);
        this.excelData = this.prepareExcelData();
        /* if(res.data && res.data.length > 0){
          const rows = [];
          res.data.forEach((element:any , index : number) =>{
            console.log('element=======' ,element);
            element['recId'] = index +1;
            rows.push(element)
          });

          this.dataSource.data = rows;
        } */
      })
    }catch(err){
      console.log(err);
    }
  }

  returnZero = () =>{
    return 0;
  }

  assign = (complaint:any , isReAssign : any) =>{
    try{
      console.log('complaint' , complaint);
      let dialgoRef = this.dialog.open(AssignCompliantPopupComponent , {
        data: {
          selectedServiceRequest : complaint._id,
          isReassign : isReAssign
        }
      }).afterClosed().subscribe((result : any)=>{
        // dialgoRef = undefined;
        if(result == 'assigned'){
          this.getAllComplaints(this.userDetails);
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
      const user = this.userDetails;
      let data : any = {};
      data['employeeId'] = user._id;
      data['complaintId'] = complaint._id;
      this.service.closeComplaint(data).subscribe((res:any)=>{
        if(res){
          this.loader.closeLoadingIndicator();
          this.getAllComplaints(this.userDetails);
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
          this.getAllComplaints(this.userDetails);
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
      const employeeFirstName = d['assignedTo'] && d['assignedTo']['firstName'] ? d['assignedTo']['firstName'] : '-' ;
      const employeeLastName = d['assignedTo'] && d['assignedTo']['lastName'] ? d['assignedTo']['lastName'] : '-' ;
      obj['Date Of Complaint'] = this.convertDate(d.createdAt);
      obj['Complaint Status'] = d.status == '0' ? 'Close' : 'Open';
      obj['Machine Type'] = d.machineType ? d.machineType == '0' ? 'Petrol' : 'Disel' : '-';
      obj['Complaint Type'] = d.complaintType && d.complaintType.name ? d.complaintType.name : '-';
      obj['Customer Code'] = d.customerId ? d.customerId.customerCode : '-';
      obj['Customer Name'] = d.customerId && d.customerId.customerName ? d.customerId.customerName : '-';
      obj['Employee Name (Assigned To)'] = employeeFirstName && employeeLastName ? `${employeeFirstName} ${employeeLastName}`  : '-'
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




