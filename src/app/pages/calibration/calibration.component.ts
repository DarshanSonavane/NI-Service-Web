import { Component } from '@angular/core';
import { AppServices } from './../../service/app-services';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { LoadingIndicatorService } from './../../service/loading-indicator.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { CylinderDetailPopupComponent } from '../cylinder-detail-popup/cylinder-detail-popup.component';



@Component({
  selector: 'app-calibration',
  templateUrl: './calibration.component.html',
  styleUrls: ['./calibration.component.scss']
})
export class CalibrationComponent {
  calibrationData:any;
  formattedCalibrationData:any
  constructor(private appService : AppServices , private toastService : ToastrService , private dialog : MatDialog){
    this.getCalibrationList();
  }

  getCalibrationList = () =>{
    try{
      const userRole = localStorage.getItem("userRole");
      const userDetails = localStorage.getItem('userDetails') ? JSON.parse(localStorage.getItem('userDetails')) : null;
      console.log('userDetails',userDetails);
      if(userRole == 'ADMIN'){
        this.appService.getCalibrationList().subscribe(async (res:any)=>{
          this.generateAndFormatCalibrationData(res.data);
        })
      }else {
        let data = {
          "employeeId" : userDetails['_id']
        }
        this.appService.getMyCalibrationList(data).subscribe((res:any)=>{
          this.generateAndFormatCalibrationData(res.data);
        })
      }
      
    }catch(err){
      console.log(err);
    }
  }

  generateCalibration = (calibration:any) =>{
    try{
      let data = {
        calibrationId : calibration._id
      }
      this.appService.generateAndSendCalibration(data).subscribe((res:any)=>{
        if(res){
          this.toastService.success(res['message']);
        }
      })
    }catch(err){
      console.log(err);
    }

  }

  updateCylinderDetails = () =>{
    try{
      let dialgoRef = this.dialog.open(CylinderDetailPopupComponent).afterClosed().subscribe((result : any)=>{
        // dialgoRef = undefined;
        if(result == 'submitted'){
          this.dialog.closeAll();
        }
      });
    }catch(err){
      console.log(err);
    }
  }

  generateAndFormatCalibrationData = (data:any) =>{
    try{
      this.formattedCalibrationData = [];
          this.calibrationData = data;
          for(let i = 0 ; i < this.calibrationData.length ; i++){
              let d = this.calibrationData[i];
              if(d.machineType === '0'){
                  d['machinTypeValue'] = "Petrol";
              }else if(d.machineType === '1'){
                  d['machinTypeValue'] = "Diesel";
              }else if(d.machineType === '2'){
                  d['machinTypeValue'] = "Combo";
              }
  
              if(d['employeeId']){
                d['employeeId']['employeeName'] = d['employeeId']['firstName'] + ' ' +d['employeeId']['lastName'];
              }
              console.log('here2' , d);
              this.formattedCalibrationData.push(d);
          }
    }catch(err){
      console.log(err);
    }
  }
}
