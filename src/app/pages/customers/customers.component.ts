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
  displayedColumns: string[] = ['customerCode', 'customerName', 'city', 'email' , 'phone' , 'gstNo' ,'amcDue'];
  dataSource :any ;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  clickedRows = new Set<CustomerElement>();
  constructor(private formBuilder : FormBuilder , private router : Router , private appService : AppServices , private toast : ToastrService , private loader : LoadingIndicatorService){}

  ngOnInit(){
    this.customerForm = this.formBuilder.group({
      customerCode : new FormControl('',[Validators.required]),
      customerName : new FormControl('',[Validators.required]),
      email : new FormControl('',[Validators.required]),
      city : new FormControl('',[Validators.required]),
      amcDue : new FormControl('',[Validators.required]),
      phone: new FormControl('',[Validators.required]),
      gstNo: new FormControl(''),
      customerId : new FormControl('')
    })

    this.getCustomerList();
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
  }

  reset = () =>{
    this.customerForm.reset();
  }
}

export interface CustomerElement {
  customerCode: string;
  customerName: number;
  city: number;
  phone: string;
  email: string;
  amcDue: string;
}
