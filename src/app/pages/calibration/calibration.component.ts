import { Component } from '@angular/core';
import { AppServices } from './../../service/app-services';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { LoadingIndicatorService } from './../../service/loading-indicator.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { CylinderDetailPopupComponent } from '../cylinder-detail-popup/cylinder-detail-popup.component';
import { MachineModelDetailsComponent } from '../machine-model-details/machine-model-details.component';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-calibration',
  templateUrl: './calibration.component.html',
  styleUrls: ['./calibration.component.scss']
})
export class CalibrationComponent {
  calibrationData:any;
  formattedCalibrationData:any = [];
  userRole:any;
  notificationList:any;
  closeFormattedCalibrationData:any = [];
  constructor(private appService : AppServices , private toastService : ToastrService , private dialog : MatDialog , private loader : LoadingIndicatorService){
    this.getCalibrationList();
    this.userRole = localStorage.getItem("userRole");
  }

  getCalibrationList = () =>{
    try{
      this.loader.showLoadingIndicator();
      const userRole = localStorage.getItem("userRole");
      const userDetails = localStorage.getItem('userDetails') ? JSON.parse(localStorage.getItem('userDetails')) : null;
      if(userRole == 'ADMIN'){
        this.appService.getOpenCalibrationList().subscribe(async (res:any)=>{
          this.generateAndFormatCalibrationData(res.data);
          this.loader.closeLoadingIndicator();
        })
      }else {
        let data = {
          "employeeId" : userDetails['_id']
        }
        this.appService.getMyCalibrationList(data).subscribe((res:any)=>{
          this.generateAndFormatCalibrationData(res.data);
          this.loader.closeLoadingIndicator();
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
          this.getCalibrationList();
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
      this.closeFormattedCalibrationData = [];
      this.calibrationData = data;
      for(let i = 0 ; i < this.calibrationData.length ; i++){
        let d = this.calibrationData[i];
        if(d.customerId){
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
          if(d.status == '1'|| d.status == '2'){
            this.formattedCalibrationData.push(d);
          }else {
            this.closeFormattedCalibrationData.push(d);
          }
        }      
      }
    }catch(err){
      console.log(err);
    }
  }

  addMachineDetails = () =>{
    try{
      let dialgoRef = this.dialog.open(MachineModelDetailsComponent).afterClosed().subscribe((result : any)=>{
        // dialgoRef = undefined;
        if(result == 'submitted'){
          this.dialog.closeAll();
        }
      });
    }catch(err){
      console.log(err);
    }
  }

  deleteCalibration = (calibration:any) =>{
    try{
      const obj = {
        calibrationId : calibration._id
      }
      this.appService.deleteCalibrationById(obj).subscribe((res:any)=>{
        this.toastService.success('Calibration Request Deleted Successfully!');
      })
    }catch(err){
      console.log(err);
    }
  }

  tabClick=(event: MatTabChangeEvent)=>{
    this.loader.showLoadingIndicator();
    const userDetails = localStorage.getItem('userDetails') ? JSON.parse(localStorage.getItem('userDetails')) : null;
    if(event.index == 0){
      if(this.userRole == 'ADMIN'){
        this.appService.getOpenCalibrationList().subscribe(async (res:any)=>{
          this.generateAndFormatCalibrationData(res.data);
          this.loader.closeLoadingIndicator();
        })
      }else {
        let data = {
          "employeeId" : userDetails['_id']
        }
        this.appService.getMyCalibrationList(data).subscribe((res:any)=>{
          this.generateAndFormatCalibrationData(res.data);
          this.loader.closeLoadingIndicator();
        })
      }
    }else if(event.index == 1) {
      if(this.userRole == 'ADMIN'){
        this.appService.getCloseCalibrationList().subscribe(async (res:any)=>{
          this.generateAndFormatCalibrationData(res.data);
          this.loader.closeLoadingIndicator();
        })
      }else {
        let data = {
          "employeeId" : userDetails['_id']
        }
        this.appService.getMyCalibrationList(data).subscribe((res:any)=>{
          this.generateAndFormatCalibrationData(res.data);
          this.loader.closeLoadingIndicator();
        })
      }
    }
  }
}
