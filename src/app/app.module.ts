import { LoadingIndicatorService } from './service/loading-indicator.service';
import { DateFilterPipe } from './pipes/date-filter.pipe';
import { AppServices } from './service/app-services';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule}  from '@angular/material/button';
import { ComplaintListComponent } from './pages/complaint-list/complaint-list.component';
import { MatTableModule , MatTableDataSource } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { EmployeeCompliantListComponent } from './pages/employee-compliant-list/employee-compliant-list.component';
import { AssignCompliantPopupComponent } from './pages/assign-compliant-popup/assign-compliant-popup.component';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { SpinningIndicatorComponent } from './pages/spinning-indicator/spinning-indicator.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { EmployeeComponent } from './pages/employee/employee.component';
import { CreateEmployeePopupComponent } from './pages/create-employee-popup/create-employee-popup.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { EmployeeActionPopupComponent } from './pages/employee-action-popup/employee-action-popup.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { ComplaintDetailsPopupComponent } from './pages/complaint-details-popup/complaint-details-popup.component';
import { ResetPasswordPopupComponent } from './pages/reset-password-popup/reset-password-popup.component';
import { CalibrationComponent } from './pages/calibration/calibration.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ComplaintListComponent,
    DateFilterPipe,
    EmployeeCompliantListComponent,
    AssignCompliantPopupComponent,
    SpinningIndicatorComponent,
    DashboardComponent,
    EmployeeComponent,
    CreateEmployeePopupComponent,
    EmployeeActionPopupComponent,
    CustomersComponent,
    ComplaintDetailsPopupComponent,
    ResetPasswordPopupComponent,
    CalibrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    MatSelectModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatTableModule
  ],
  providers: [AppServices , LoadingIndicatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
