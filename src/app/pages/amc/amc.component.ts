import { Component } from '@angular/core';
import { AppServices } from 'src/app/service/app-services';
import { ToastrService } from 'ngx-toastr';
import { LoadingIndicatorService } from 'src/app/service/loading-indicator.service';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-amc',
  templateUrl: './amc.component.html',
  styleUrls: ['./amc.component.scss']
})
export class AmcComponent {
  formattedAMCData=[];
  closeFormattedAMCData=[];
  amcData=[];
  userRole:any;
  constructor(private appService : AppServices , private toastService : ToastrService , private loader : LoadingIndicatorService){
    this.getOpenAMCRequest();
    this.userRole = localStorage.getItem("userRole");
  }

  getOpenAMCRequest=()=>{
    try{
      this.loader.showLoadingIndicator();
      this.appService.getAllOpenAMCRequest().subscribe((res:any)=>{
        if(res){
          this.generateAndFormatAmcData(res.data);
          this.loader.closeLoadingIndicator();
        }
      })
    }catch(err){
      console.log(err);
    }
  }

  getCloseAMCRequest=()=>{
    try{
      this.appService.getAllCloseAMCRequest().subscribe((res:any)=>{
        if(res){
          this.generateAndFormatAmcData(res.data);
        }
      })
    }catch(err){
      console.log(err);
    }
  }

  tabClick=(event: MatTabChangeEvent)=>{
    this.loader.showLoadingIndicator();
    if(event.index == 0){
      this.appService.getAllOpenAMCRequest().subscribe(async (res:any)=>{
        this.generateAndFormatAmcData(res.data);
        this.loader.closeLoadingIndicator();
      })
    }else if(event.index == 1) {
      this.appService.getAllCloseAMCRequest().subscribe(async (res:any)=>{
        this.generateAndFormatAmcData(res.data);
        this.loader.closeLoadingIndicator();
      })
    }
  }

  generateAMC=(amcData:any)=>{
    try{
      this.loader.showLoadingIndicator();
      let data = {}
      data['amcId'] = amcData['_id'];
      data['customerId'] = amcData['customerId']['_id'];
      data['amcType'] = amcData['amcType'];
      this.appService.generateAndSendAMCRequest(data).subscribe((res:any)=>{
        if(res){
          this.loader.closeLoadingIndicator();
          this.getOpenAMCRequest();
        }
      })
    }catch(err){
      console.log(err);
    }
  }

  deleteAMC = (amc:any) =>{

  }

  generateAndFormatAmcData = (data:any) =>{
    try{
      this.formattedAMCData = [];
      this.closeFormattedAMCData = [];
      this.amcData = data;
      for(let i = 0 ; i < this.amcData.length ; i++){
        let d = this.amcData[i];
        if(d.customerId){
          if(d.amcType === '0'){
            d['machinTypeValue'] = "Petrol";
          }else if(d.amcType === '1'){
            d['machinTypeValue'] = "Diesel";
          }else if(d.amcType === '2'){
            d['machinTypeValue'] = "Combo";
          }else {
            d['machinTypeValue'] = "-";
          }
    
          if(d['employeeId']){
            d['employeeId']['employeeName'] = d['employeeId']['firstName'] + ' ' +d['employeeId']['lastName'];
          }
          console.log('here2' , d);
  
          if(d.status == '1'|| d.status == '2'){
            this.formattedAMCData.push(d);
          }else {
            this.closeFormattedAMCData.push(d);
          }
        }      
      }
    }catch(err){
      console.log(err);
    }
  }
}
