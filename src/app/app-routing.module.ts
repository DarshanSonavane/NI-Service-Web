import { EmployeeCompliantListComponent } from './pages/employee-compliant-list/employee-compliant-list.component';
import { ComplaintListComponent } from './pages/complaint-list/complaint-list.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'complaints', component: ComplaintListComponent },
  { path: 'employee-complaints', component: EmployeeCompliantListComponent },
  { path: '**', redirectTo: '' }
];;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
