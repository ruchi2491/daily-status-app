import { Component, OnInit } from '@angular/core';
import{ Employee } from '../employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
employees: Employee[]=[
  new Employee('721','Ruchira More','ruchira.more@atmecs.com','8983209611','Active')
];
  constructor() { }

  ngOnInit() {
  }

}
