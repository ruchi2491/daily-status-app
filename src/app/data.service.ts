import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private empidSource = new BehaviorSubject<string>("472");
  currentEmployeeid = this.empidSource.asObservable();

  constructor() { }

  changeEmployeeID(empid: string) {
    this.empidSource.next(empid)
    console.log("In dataservice"+empid);
  }

}