
import { Component, style } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Employee } from '../employee/employee.model';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent {
    empid;Title;name;address;mobileno;emailid;dob;gender;
    employee : any;
    //employee.company = "Atmecs Technologies Pvt.LTD";
    
    company="Atmecs Technologies Pvt.LTD";
    designation="SOFTWARE ENGINEER";
    doj;
    reporting_to="SRINIVAS RAO KOTA";
    level;
    Role="employee";
    message;
    isDisabled = true ;
   

    constructor(private http: HttpClient, private router: Router){

    }
    onReset() {
        this.empid = "";
        this.Title="";
        this.name="";
        this.emailid = "";
        this.address = "";
        this.mobileno = "";
        this.dob="";
        this.gender="";
       this.doj="";
       this.level="";
    }
    onSubmit(){
     //   console.log("EmpID is:"+this.empid +"Email Id is"+ this.emailid +"Employee name is:"+ this.name +"role is"+ this.Role);
        this.saveBook();
    //     this.empid = "";
    //     this.Title="";
    //     this.name="";
    //     this.emailid = "";
    //     this.address = "";
    //     this.mobileno = "";
    //     this.dob="";
    //     this.gender="";
    //    this.doj="";
    //    this.level="";
    //     this.message="Data inserted sucessfully!!!";
    }

    saveBook() {

        console.log(JSON.stringify(this.employee))
        // this.http.post('/employee', this.employee)
        //   .subscribe(res => {
        //       let id = res['_id'];
        //       this.router.navigate(['/employee', id]);
        //     }, (err) => {
        //       console.log(err);
        //     }
        //   );
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
  