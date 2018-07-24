import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

employees : any;

  constructor(private http: HttpClient){}

  ngOnInit() {
    this.http.get('/api/employee').subscribe(data => {
      this.employees = data;
    });
    console.log(this.employees);
  }

}
