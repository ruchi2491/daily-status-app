import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { EmployeeComponent } from '../employee.component';
// import { Dailystatus } from '../../../../models/Dailystatus';
import {ServerService} from './server.service';
import Swal from 'sweetalert2';

import * as moment from 'moment';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-enter-status',
  templateUrl: './enter-status.component.html',
  styleUrls: ['./enter-status.component.css']
})
export class EnterStatusComponent implements OnInit {

   employeeid=this.employeeComponent.empid;
   textarea;
   savebtn;
   projectname;
   selectedDate;
  onestatus:any;
  getonestatus:any;

  constructor(private http: HttpClient, private router: Router,private employeeComponent: EmployeeComponent, 
    private ServerService:ServerService) {
    // this.onestatus.empid=this.employeeComponent.empid;
  }
  ngOnInit() {
    console.log("Employee id of user is in enter-status component"+ this.employeeid);
    this.onestatus = {
      "empid":this.employeeid
    };
    console.log(typeof(this.onestatus.project_name));
    console.log(typeof(this.onestatus.today_status));
    //this.savebtn=true;
  //   if(this.onestatus.project_name=="" && this.onestatus.today_status==""){
  //      this.savebtn=true;
  //  }else{
  //      this.savebtn=false;
  //    }
  }

  onChange(){
    this.textarea=false;
    console.log("this.employeeid"+this.employeeid);
    console.log("From UI");
    console.log(moment(this.onestatus.date).format('YYYY-MM-DD'));
    this.selectedDate=moment(this.onestatus.date).format('YYYY-MM-DD');
    this.http.get('/api/dailystatus/' + this.employeeid+ "/" + this.selectedDate).subscribe(data => {
    this.onestatus = data[0];
    this.onestatus.date=moment(this.onestatus.date).format('YYYY-MM-DD')
      console.log(this.onestatus);
      if(this.onestatus){
        //this.projectname=true;
        this.textarea=false;
      }else{
        this.onestatus = {
          "empid":this.employeeid
        };
      }
    });
    
  }

  onSave(){
     this.savebtn=false;
    this.ServerService.storeStatus(this.onestatus)
    .subscribe(
      (response)=>console.log(response),
      (error) => console.log(error)
    );
    Swal({
      position: 'top-end',
      type: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    }).then((result) => {
      this.onestatus.project_name=undefined;
      this.onestatus.today_status=undefined;
      this.onestatus.date=undefined;
    })
  }



onSaveOld(){
   //   if('null'!=this.onestatus.project_name && 'null'!=this.onestatus.today_status){
  //   this.ServerService.storeStatus(this.onestatus)
  //   .subscribe(
  //     (response)=>console.log(response),
  //     (error) => console.log(error)
  //   );
  //   Swal({
  //     title: 'Good Job',
  //     text: 'Status is saved',
  //     type: 'success',
  //     showCancelButton: false,
  //     showConfirmButton:true
  //   }).then((result) => {
  //     this.onestatus.project_name="";
  //     this.onestatus.today_status="";
  //   })
  // }
  // else{
  //   this.savebtn=true;
  // }
}

}
