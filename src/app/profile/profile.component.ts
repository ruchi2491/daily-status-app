import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { DataService } from "../data.service";
import { Profile } from 'selenium-webdriver/firefox';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  employeeid;
  birthdate;
  profile: {};

  constructor(private route: ActivatedRoute, private http: HttpClient, private data: DataService) {

  }

  ngOnInit() {
    this.profile = {
      "empid":this.employeeid
    };
    this.data.currentEmployeeid.subscribe(employeeid => this.employeeid = employeeid);
    // console.log("In profile component"+this.empid);
    this.http.get('/api/employee/' + this.employeeid).subscribe(data => {
      this.profile = data[0];
      const
      dateAndTime = data[0].dob.split(' '),
      dateParts = dateAndTime[0].split('/');
      dateParts.reverse();
      const isoDateString = dateParts.join('-')  + 'T00:00:00' + '.000Z';
      this.birthdate=((new Date()).getFullYear())-(new Date(isoDateString).getFullYear());
    });
   

  }



}

