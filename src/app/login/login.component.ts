import { Component, style } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataService } from "../data.service";
import { v4 as uuid } from 'uuid'
import swal from 'sweetalert2';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['login.component.css']

})

export class LoginComponent {
    token: string = uuid();
    username = '';
    password = '';
    message = '';
    empid = "";
    employees;

    constructor(private router: Router, private http: HttpClient, private data: DataService) {
        console.log("token is:", this.token);
    }

    ngOnInit() {
        console.log("Login component");
    }


    login() {
        this.http.get('/api/employee/' + this.username).subscribe(data => {
            console.log("THIS IS EMPLOYEE ID",this.employees.empid)
            this.employees = data[0];
            if(this.employees){
                this.empid = this.employees.empid;
                this.data.changeEmployeeID(this.empid);
                if (this.employees.Role === 'employee') {
                     this.doPut();
                    this.router.navigateByUrl('/employee');
                }
                else {
                    this.doPut();
                    this.router.navigateByUrl('/manager');
                }
            }else{
                swal({
                    type: 'error',
                    title: 'Incorrect Username or Password',
                    text: 'Please enter correct username and password...',
                    // footer: '<a href>Why do I have this issue?</a>'
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
           
        });
    }
    newEmployeeID() {
        console.log("In login component" + this.empid);
        this.data.changeEmployeeID(this.empid);
    }

    doPut() {
        this.http.put('/api/employee/' + this.empid, { "token": this.token }).subscribe(data => {
              this.employees.token = data;
        });
        // this.data.currentEmployeeid.subscribe(empid => this.message = empid)   
    }
}