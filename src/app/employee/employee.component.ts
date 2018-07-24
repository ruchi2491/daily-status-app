import { Component } from "@angular/core";
import { DataService } from "../data.service";

@Component({
    selector:"app-employee",
    templateUrl:"./employee.component.html",
     styleUrls:['employee.component.css']
})
// @View({
//   template: "./employee.component.html",
//   directives: ROUTER_DIRECTIVES
// })
// @RouteConfig([
//   { path: '/', component: ChildCmp }
// ])
export class EmployeeComponent{
  empid;enterstatus;
  constructor(private data:DataService){

  }
  ngOnInit(){
    this.data.currentEmployeeid.subscribe(empid => this.empid = empid)
    console.log("In employee component"+this.empid);
    
   

  }
}