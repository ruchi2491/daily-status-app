import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

@Component({
  selector: 'app-employee-status',
  templateUrl: './employee-status.component.html',
  styleUrls: ['./employee-status.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeeStatusComponent implements OnInit {

  allstatus: any;
  employees: any;
  selectedFirstOption: string;
  selectedSecondOption: string;
  printedFirstOption: string;
  printedSecondOption: string;
  selectedDate: string;
  printedDate: string;
  selectedYearOption: string;
  selectedMonthOption: string;
  assignMonthOption: string;
  showTable1 = false;
  showTable2 = false;
  years = ['2018', '2019', '2020', '2021', '2022'];
  months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  constructor(private route: ActivatedRoute, private http: HttpClient) {
  }

  ngOnInit() {
    // this.http.get('/dailystatus').subscribe(data => {
    //   this.allstatus = data;
    // });

    this.http.get('/api/employee').subscribe(data => {
      this.employees = data;
    });
  }

  getStatusDetail(id) {
    this.http.get('/api/dailystatus/' + id).subscribe(data => {
      this.allstatus = data;
    });
  }

  getStatusDetailWithDate(id, date) {
    this.http.get('/api/dailystatus/' + id + "/" + date).subscribe(data => {
      this.allstatus = data;
    });
  }

  getStatusWithId() {
    this.showTable2 = true;
    this.printedFirstOption = this.selectedFirstOption;
    //console.log(this.printedOption);
    //console.log(this.selectedOption);
    this.getStatusDetail(this.printedFirstOption);
  }

  changeMonthInNumber(month) {
    switch (month) {
      case "Jan": this.assignMonthOption = "01";
        break;
      case "Feb": this.assignMonthOption = "02";
        break;
      case "Mar": this.assignMonthOption = "03";
        break;
      case "Apr": this.assignMonthOption = "04";
        break;
      case "May": this.assignMonthOption = "05";
        break;
      case "Jun": this.assignMonthOption = "06";
        break;
      case "Jul": this.assignMonthOption = "07";
        break;
      case "Aug": this.assignMonthOption = "08";
        break;
      case "Sep": this.assignMonthOption = "09";
        break;
      case "Oct": this.assignMonthOption = "10";
        break;
      case "Nov": this.assignMonthOption = "11";
        break;
      case "Dec": this.assignMonthOption = "12";
        break;
    }
  }

  getStatusWithDateAndId() {
    this.showTable1 = true;
    this.printedSecondOption = this.selectedSecondOption;
    this.changeMonthInNumber(this.selectedMonthOption);
    this.selectedDate = this.selectedYearOption + "-" + this.assignMonthOption;
    console.log(this.printedSecondOption);
    console.log(this.selectedSecondOption);
    //console.log(this.selectedYearOption);
    //console.log(this.selectedMonthOption)
    this.printedDate = this.selectedDate;
    console.log(this.printedDate);
    console.log(this.selectedDate);
    this.getStatusDetailWithDate(this.printedSecondOption, this.selectedDate);
  }

  resetFirst(){
    this.showTable2=false; 
    this.selectedFirstOption="";
  }
  resetSecond(){
    this.showTable1 = false;
    this.selectedSecondOption="";
    this.selectedYearOption="";
    this.selectedMonthOption="";
  }

  order = "empid";
  ascending = true;
}
