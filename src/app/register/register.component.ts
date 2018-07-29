
import { Component, style } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Employee } from '../employee/employee.model';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent {
    employee : any;
    //employee.company = "Atmecs Technologies Pvt.LTD";
    
    local_company="Atmecs Technologies Pvt.LTD";
    local_designation="SOFTWARE ENGINEER";
    local_reporting_to="SRINIVAS RAO KOTA";
    local_Role="employee";
    message;
    isDisabled = true ;
    local_level="GENERAL";
   
    ngOnInit(){
        this.employee = {
    "company":this.local_company,
    "designation":this.local_designation,
    "reporting_to":this.local_reporting_to,
    "Role":this.local_Role,
    "level":this.local_level
          };
    }

    constructor(private http: HttpClient, private router: Router){

    }
    onReset() {
        this.employee.empid = "";
        this.employee.Title="";
        this.employee.name="";
        this.employee.emailid = "";
        this.employee.address = "";
        this.employee.mobileno = "";
        this.employee.dob="";
        this.employee.gender="";
       this.employee.doj="";
       this.employee.level="";
       this.employee.mgrid="";
    }
   

    saveBook() {

        console.log(this.employee);
        this.http.post('/api/employee', this.employee)
          .subscribe(res => {
              let id = res['_id'];
              this.router.navigate(['/employee', id]);
            }, (err) => {
              console.log(err);
            }
          );
        // this.RegisterServerService.storeEmployee(this.employee)
        // .subscribe(
        //   (response)=>console.log(response),
        //   (error) => console.log(error)
        // );
          Swal({
            position: 'top-end',
            type: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          }).then((result) => {
            this.employee.empid =undefined;
            this.employee.Title=undefined;
            this.employee.name=undefined;
            this.employee.emailid =undefined;
            this.employee.address = undefined;
            this.employee.mobileno = undefined;
            this.employee.dob=undefined;
            this.employee.gender=undefined;
            this.employee.doj=undefined;
            this.employee.level=undefined;
            this.employee.mgrid=undefined;
          })
      }
    


    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email,
      ]);
    
      matcher = new MyErrorStateMatcher();
    
    
}
export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      const isSubmitted = form && form.submitted;
      return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
  }
  