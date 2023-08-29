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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ComplaintListComponent,
    DateFilterPipe,
    EmployeeCompliantListComponent,
    AssignCompliantPopupComponent,
    SpinningIndicatorComponent
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
    MatProgressSpinnerModule
  ],
  providers: [AppServices , LoadingIndicatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
