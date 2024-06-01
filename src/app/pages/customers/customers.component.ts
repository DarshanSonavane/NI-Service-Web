import { LoadingIndicatorService } from './../../service/loading-indicator.service';
import { AppServices } from './../../service/app-services';
import { Router } from '@angular/router';
import { Component, OnInit , AfterViewInit , ViewChild } from '@angular/core';
import { FormGroup , FormBuilder , Validators , FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements AfterViewInit, OnInit{
  customerForm: FormGroup = new FormGroup({})
  displayedColumns: string[] = ['customerCode', 'customerName', 'city', 'state', 'email' , 'phone' , 'gstNo' ,'amcDue' , 'petrolMachineNumber' , 'dieselMachineNumber' , 'comboMachineNumber'  ];
  dataSource :any ;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  clickedRows = new Set<CustomerElement>();
  stateList:any;
  selectedStatecode :any;
  constructor(private formBuilder : FormBuilder , private router : Router , private appService : AppServices , private toast : ToastrService , private loader : LoadingIndicatorService){
    
  }

  ngOnInit(){
    this.customerForm = this.formBuilder.group({
      customerCode : new FormControl('',[Validators.required]),
      customerName : new FormControl('',[Validators.required]),
      email : new FormControl(''),
      city : new FormControl('',[Validators.required]),
      amcDue : new FormControl('',[Validators.required]),
      phone: new FormControl(''),
      gstNo: new FormControl(''),
      customerId : new FormControl(''),
      petrolMachineNumber : new FormControl(''),
      dieselMachineNumber : new FormControl(''),
      comboMachineNumber : new FormControl(''),
      state : new FormControl('', [Validators.required])
    })

    this.getCustomerList();
    this.getStateList();
  }

  ngAfterViewInit() {
  }

  getCustomerList = ()=>{
    try{
      this.loader.showLoadingIndicator();
      this.appService.getCustomerList().subscribe((res:any)=>{
        this.loader.closeLoadingIndicator();
        this.dataSource = new MatTableDataSource<CustomerElement>(res.data);
        this.dataSource.paginator = this.paginator;
      })
    }catch(err){

    }
  }

  createUpdateCustomer = () =>{
    try{
      console.log(this.customerForm);
      if(this.customerForm.valid){
        let date = this.customerForm.controls['amcDue'].value;
        let newDate = new Date(date);
        let day = newDate.getDate();
        let month =  newDate.getMonth() + 1  ;
        let year = newDate.getFullYear();
        let obj = {};
        obj['customerCode'] = this.customerForm.controls['customerCode'].value;
        obj['customerName'] = this.customerForm.controls['customerName'].value;
        obj['city'] = this.customerForm.controls['city'].value;
        obj['amcDue'] = [year,(month > 9 ? '' : '0') + month, (day > 9 ? '' : '0') + day ].join('-')
        obj['mobile'] = this.customerForm.controls['phone'].value;
        obj['email'] = this.customerForm.controls['email'].value;
        obj['gstNo'] = this.customerForm.controls['gstNo']?.value;
        obj['customerId'] = this.customerForm.controls['customerId']?.value;
        obj['petrolMachineNumber'] = this.customerForm.controls['petrolMachineNumber']?.value;
        obj['dieselMachineNumber'] = this.customerForm.controls['dieselMachineNumber']?.value;
        obj['comboMachineNumber'] = this.customerForm.controls['comboMachineNumber']?.value;
        obj['stateCode'] = this.selectedStatecode ? this.selectedStatecode : this.customerForm.controls['state']?.value;
        this.appService.createUpdateCustomer(obj).subscribe((res)=>{
          if(res['data']){
            this.toast.success(res['message']);
            this.customerForm.reset();
            this.getCustomerList();    
          }
        })
      }else {
        this.toast.warning("Required Parameter Missing!!");
      }
    }catch(err){
      console.log(err);
    }
  }

  applyFilter = (event:any) =>{
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

  onRowClick = (element:any)=>{
    console.log("Row Element",element);
    this.customerForm.get('customerCode').setValue(element.customerCode);
    this.customerForm.get('customerName').setValue(element.customerName);
    this.customerForm.get('city').setValue(element?.city);
    this.customerForm.get('email').setValue(element?.email);
    this.customerForm.get('phone').setValue(element?.mobile);
    this.customerForm.get('gstNo').setValue(element?.gstNo);
    this.customerForm.get('amcDue').setValue(element?.amcDue);
    this.customerForm.get('customerId').setValue(element?._id);
    this.customerForm.get('petrolMachineNumber').setValue(element?.petrolMachineNumber);
    this.customerForm.get('dieselMachineNumber').setValue(element?.dieselMachineNumber);
    this.customerForm.get('comboMachineNumber').setValue(element?.comboMachineNumber);
    this.customerForm.get('state').setValue(element?.stateCode);
  }

  reset = () =>{
    this.customerForm.reset();
  }

  getStateList = () =>{
    this.appService.getStatesList().subscribe((res:any)=>{
      this.stateList = res.data;
    })
  }

  onStateChange = (event)=>{
    console.log("State Event",event);
    this.selectedStatecode = event;
  }
}

export interface CustomerElement {
  customerCode: string;
  customerName: number;
  city: number;
  phone: string;
  email: string;
  amcDue: string;
  gstNo:string;
  petrolMachineNumber: string;
  dieselMachineNumber: string;
  comboMachineNumber: string;
  state :string
}
