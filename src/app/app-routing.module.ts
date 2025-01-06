import { CustomersComponent } from './pages/customers/customers.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployeeCompliantListComponent } from './pages/employee-compliant-list/employee-compliant-list.component';
import { ComplaintListComponent } from './pages/complaint-list/complaint-list.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalibrationComponent } from './pages/calibration/calibration.component';
import { NotificationComponent } from './pages/notification/notification.component';
import { AmcComponent } from './pages/amc/amc.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'complaints', component: ComplaintListComponent },
  { path: 'employee-complaints', component: EmployeeCompliantListComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'calibration', component: CalibrationComponent },
  { path: 'notification', component: NotificationComponent },
  { path: 'amc', component: AmcComponent },
  { path: '**', redirectTo: '' }
];;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
