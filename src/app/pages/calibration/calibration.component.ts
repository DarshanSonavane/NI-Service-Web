import { Component } from '@angular/core';
import { AppServices } from './../../service/app-services';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { LoadingIndicatorService } from './../../service/loading-indicator.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-calibration',
  templateUrl: './calibration.component.html',
  styleUrls: ['./calibration.component.scss']
})
export class CalibrationComponent {
  calibrationData:any;
  formattedCalibrationData:any
  constructor(private appService : AppServices , private toastService : ToastrService){
    this.getCalibrationList();
  }

  getCalibrationList = () =>{
    try{
      this.appService.getCalibrationList().subscribe((res:any)=>{
        this.formattedCalibrationData = [];
        this.calibrationData = res.data;
        for(let i = 0 ; i < this.calibrationData.length ; i++){
            console.log('here1');
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
        
      })
    }catch(err){
      console.log(err);
    }
  }

  generateCalibration = () =>{

  }

  updateCylinderDetails = () =>{}
}
