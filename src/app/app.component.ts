import { ToastrService } from 'ngx-toastr';
import { Component } from '@angular/core';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ni-service-web';
  userRole : any;
  newArr : any = [];
  newRouter : Router;
  constructor(private router : Router , private toast : ToastrService){
    this.router.navigate(['login']);
    this.newRouter = router;
    /* for(let i = 0 ; i < this.arr.length ; i++ ){
      let d = this.arr[i];
      let obj : any = {};
      obj['customerCode'] = d['Customer Code'].toString();
      obj['customerName'] = d['Customer Name'];
      obj['city'] = d['City'];
      obj['amcDue'] = d['Amc End'] ? d['Amc End'].toString() : "";
      this.newArr.push(obj);
    } 

    console.log("this.newArr", JSON.stringify(this.newArr)); */
  }

  ngOnInit(){
    const user = JSON.parse(localStorage.getItem('userDetails'));
    if(user && user["role"] == '1'){
      this.router.navigate(['/employee-complaints']);
    }else if(user && user["role"] == '0'){
      this.router.navigate(['/dashboard']);
    }else {
      this.router.navigate(['/login']);
    }
  }

  goToComplaints =() => {
    this.userRole = localStorage.getItem("userRole");
    if(this.userRole == "ADMIN"){
      this.router.navigateByUrl("/complaints");
    }else {
      this.router.navigateByUrl("/employee-complaints");
    }
  }

  goToDashboard =() => {
    this.userRole = localStorage.getItem("userRole");
    if(this.userRole == "ADMIN"){
      this.router.navigateByUrl("/dashboard");
    }else {
      this.toast.error("You don't have permission to access Dashboard!")
    }
  }

  goToEmployee = () =>{
    this.userRole = localStorage.getItem("userRole");
    if(this.userRole == "ADMIN"){
      this.router.navigateByUrl("/employee");
    }else {
      this.toast.error("You don't have permission to access Employee!")
    }
  }

  goToCustomers = () =>{
    this.userRole = localStorage.getItem("userRole");
    if(this.userRole == "ADMIN"){
      this.router.navigateByUrl("/customers");
    }else {
      this.toast.error("You don't have permission to access Customers!")
    }
  }

  logout = () =>{
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
