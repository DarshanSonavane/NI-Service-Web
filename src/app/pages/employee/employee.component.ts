import { LoadingIndicatorService } from './../../service/loading-indicator.service';
import { AppServices } from './../../service/app-services';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder , Validators , FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {
  employeeForm: FormGroup = new FormGroup({})
  constructor(private formBuilder : FormBuilder , private router : Router , private appService : AppServices , private toast : ToastrService , private loader : LoadingIndicatorService){}
  genderList : any = [{
    "id" : "0",
    "name":"Female"
  },{
    "id" : "1",
    "name":"Male"
  }]
  selectedGender = "";
  employeeList:any[] = [];

  ngOnInit(){

    this.employeeForm = this.formBuilder.group({
      firstName : new FormControl('',[Validators.required]),
      lasttName : new FormControl('',[Validators.required]),
      email : new FormControl('',[Validators.required]),
      dob : new FormControl('',[Validators.required]),
      gender : new FormControl('',[Validators.required]),
      phone: new FormControl('',[Validators.required]),
    })

    this.getEmployee();
  }

  getEmployee = () => {
    try{
      this.loader.showLoadingIndicator();
      this.appService.getEmployeeList().subscribe((res:any)=>{
        if(res['data']){
          this.loader.closeLoadingIndicator();
          this.employeeList = res['data'];
        }else {
          this.loader.closeLoadingIndicator();
        }
      })
    }catch(err){
      console.log(err);
    }
  }

  saveEmployee = () =>{
    this.loader.showLoadingIndicator();
    if(this.employeeForm.valid){
      let date = this.employeeForm.controls['dob'].value;
      let newDate = new Date(date);
      let day = newDate.getDate();
      let month =  newDate.getMonth() + 1  ;
      let year = newDate.getFullYear();
      
      let obj : any = {};
      obj['firstName']=this.employeeForm.controls['firstName'].value;
      obj['lastName']=this.employeeForm.controls['lasttName'].value;
      obj['email']=this.employeeForm.controls['email'].value;
      obj['dob']= [(day > 9 ? '' : '0') + day,(month > 9 ? '' : '0') + month, year].join('/')
      obj['gender']=this.employeeForm.controls['gender'].value;
      obj['phone']=this.employeeForm.controls['phone'].value;
      obj['role']="1";
      console.log("Employee Obj", JSON.stringify(obj));
      this.appService.saveEmployee(obj).subscribe((res:any)=>{
        if(res){
          this.loader.closeLoadingIndicator();
          this.employeeForm.reset();
          this.getEmployee();
          this.toast.success("Employee Created Successfully!");    
        }else {
          this.loader.closeLoadingIndicator();
        }
      })
    }else {
      this.loader.closeLoadingIndicator();
      this.toast.warning("Required Parameter Missing!!");
    }
  }

  onGenderSelect = (event:any) =>{
    this.selectedGender = event;
  }

  deleteEmployee = (employee : any) =>{
    try{
      this.loader.showLoadingIndicator();
      this.appService.deleteEmployee(employee._id).subscribe((res:any)=>{
        if(res){
          this.loader.closeLoadingIndicator();
          this.getEmployee();
          this.toast.success("Employee Deleted Successfulyy!");
        }else {
          this.loader.closeLoadingIndicator();
          this.toast.warning("Something went wrong");
        }
      })
    }catch(err){
      console.log(err);
    }
  }
}
