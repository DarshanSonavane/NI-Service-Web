import { AppServices } from './../../service/app-services';
import { Component , AfterViewInit , ChangeDetectorRef } from '@angular/core';
import { Chart , ChartType} from 'chart.js/auto';
import { Router } from '@angular/router';
import { LoadingIndicatorService } from './../../service/loading-indicator.service';
import { FormGroup , FormBuilder , Validators , FormControl } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {
  labelData = ["All Complaints","Open Complaints","Close Complaints"];
  colorData = ["blue","red","green"];
  realData:any[] = [];
  chart:any;
  data : any[] = [];
  employeeList : any[] = [];
  showChart : boolean = false;
  customerForm: FormGroup = new FormGroup({})
  visitCount:any;
  totalVisitCount : number = 8;

  constructor(private appService : AppServices , private cdRef : ChangeDetectorRef , private router :Router , private loader : LoadingIndicatorService , private formBuilder : FormBuilder){
    this.getDashboardDetails();
    this.getEmployee();
  }

  getDashboardDetails = () => {
    try{
      this.loader.showLoadingIndicator();
      this.appService.getAdminDashboardDetails().subscribe((res:any)=>{
        if(res){
          this.loader.closeLoadingIndicator();
          this.data.push(res);
          this.showChart = this.data.length > 0 && this.data[0]["totalComplaints"] > 0 ? true : false ;
          this.realData.push(this.data[0]["totalComplaints"]);
          this.realData.push(this.data[0]["openComplaints"]);
          this.realData.push(this.data[0]["closeComplaints"]);
          this.createChart(this.labelData,this.colorData,this.realData)
        }else {
          this.loader.closeLoadingIndicator();
        }
      })
    }catch(err){
      this.loader.closeLoadingIndicator();
      console.log(err);
    }
  }
  ngAfterViewInit(){}

  createChart(labeldata: any, colordata: any ,realdata: any) {

    /* var ctx = document.getElementById('myChart'); // node
    var ctx = document.getElementById('myChart').getContext('2d'); // 2d context
    var ctx = $('#myChart'); // jQuery instance */
    let ctx = 'myChart'; // element id

    this.chart = new Chart(ctx, {
      type: 'pie', //this denotes tha type of chart
      data: {
        labels: labeldata,
        datasets: [
          {
            label: 'Service Request',
            data: realdata,
            backgroundColor: colordata
          },
        ],
      },
      options: {
        aspectRatio: 2,
      },
    });

    this.cdRef.detectChanges();
  }

  goToComplaints = () =>{
    this.router.navigateByUrl("/complaints")
  }

  getEmployee = () => {
    try{
      // this.loader.showLoadingIndicator();
      this.appService.getEmployeeList().subscribe((res:any)=>{
        if(res['data']){
          //this.loader.closeLoadingIndicator();
          this.employeeList = res['data'];
         /*  for(let i = 0 ; i < res['data'].length ; i++){
            let d = res['data'][i];
            let obj = {};
            obj['image']='../../../assets/man-dummy.jpeg';
            obj['thumbImage']='../../../assets/man-dummy.jpeg';
            obj['title']= `${d.firstName} ${d.lastName}`;
            this.employeeList.push(obj);
          }
          this.cdRef.detectChanges(); */
        }else {
          // this.loader.closeLoadingIndicator();
        }
      })
    }catch(err){
      // this.loader.closeLoadingIndicator();
      console.log(err);
    }
  }

  goToEmployeeDetails = (employee:any)=>{
    try{
      // Add page and redirect
    }catch(err){
      console.log(err);
    }
  }

  ngOnInit(){
    this.customerForm = this.formBuilder.group({
      customerCode : new FormControl('',[Validators.required]),
    })
  }

  getCustomerVisits(){
    this.loader.showLoadingIndicator();
    if(this.customerForm.valid){
      let obj : any = {};
        obj['customerCode'] = this.customerForm.controls['customerCode'].value;
        this.appService.getCustomerVisitCount(obj).subscribe((res : any)=>{
          this.loader.closeLoadingIndicator();
          if(res['count']){
            this.visitCount = res['count'];
          }else {
            // show toast here
            this.loader.closeLoadingIndicator();
          }
        })
    }
  }

  reset() {
    this.visitCount = null;
    this.customerForm.controls['customerCode'].setValue('');
  }
}
