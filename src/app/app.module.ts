import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EmployeeComponent } from './employee/employee.component';
import { ManagerComponent } from './manager/manager.component';
import { HeaderComponent } from './header/header.component';
import { EmployeeListComponent } from './manager/employee-list/employee-list.component';
import { EmployeeStatusComponent } from './manager/employee-status/employee-status.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatTabsModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule, MatTableModule } from '@angular/material';
// import { EmployeeStatusEnterComponent } from './employee/employee-status/employee-status.component';
import { ProfileComponent } from './profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ServerService } from './employee/enter-status/server.service';
import { DataService } from './data.service';
import { EnterStatusComponent } from './employee/enter-status/enter-status.component';



const appRoutes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },

  {
    path: 'manager', component: ManagerComponent,
    children: [
      { path: 'emplist', component: EmployeeListComponent },
      { path: 'mempstatus', component: EmployeeStatusComponent },
      { path: 'myprofile', component: ProfileComponent },
      { path: '', redirectTo: 'myprofile', pathMatch: 'full' }
    ]
  },

  {
    path: 'employee', component: EmployeeComponent,
    children: [
      //{ path: 'status',component : EmployeeComponent },
      { path: 'empstatus', component: EnterStatusComponent },
      { path: 'myprofile', component: ProfileComponent },
      { path: '', redirectTo: 'myprofile', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    EmployeeComponent,
    ManagerComponent,
    HeaderComponent,
    EmployeeListComponent,
    EmployeeStatusComponent,
    // EmployeeStatusEnterComponent,
    ProfileComponent,
    EnterStatusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTableModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    DataService,
    ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
