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
  hamburgerIconPath:string = '../assets/menu.png';
  homeIconPath:string = '../assets/home.png';
  complaintIconPath:string = '../assets/feedback.png';
  employeeIconPath:string = '../assets/employees.png';
  customerIconPath:string = '../assets/customer.png';
  logoutIconPath:string = '../assets/logout.png';
  sidebarShow: boolean = false; 
  constructor(private router : Router , private toast : ToastrService){
    this.router.navigate(['login']);
    this.newRouter = router;
    this.userRole = localStorage.getItem("userRole");
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
    this.sidebarShow = !this.sidebarShow;
    this.userRole = localStorage.getItem("userRole");
    if(this.userRole == "ADMIN"){
      this.router.navigateByUrl("/complaints");
    }else {
      this.router.navigateByUrl("/employee-complaints");
    }
  }

  goToDashboard =() => {
    this.sidebarShow = !this.sidebarShow;
    this.userRole = localStorage.getItem("userRole");
    if(this.userRole == "ADMIN"){
      this.router.navigateByUrl("/dashboard");
    }else {
      this.toast.error("You don't have permission to access Dashboard!")
    }
  }

  goToEmployee = () =>{
    this.sidebarShow = !this.sidebarShow;
    this.userRole = localStorage.getItem("userRole");
    if(this.userRole == "ADMIN"){
      this.router.navigateByUrl("/employee");
    }else {
      this.toast.error("You don't have permission to access Employee!")
    }
  }

  goToCustomers = () =>{
    this.sidebarShow = !this.sidebarShow;
    this.userRole = localStorage.getItem("userRole");
    if(this.userRole == "ADMIN"){
      this.router.navigateByUrl("/customers");
    }else {
      this.toast.error("You don't have permission to access Customers!")
    }
  }

  logout = () =>{
    this.sidebarShow = !this.sidebarShow;
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
