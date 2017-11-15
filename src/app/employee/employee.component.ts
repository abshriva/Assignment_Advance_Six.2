import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  firstName:string;
  lastName:string;
  title:string;

  constructor() { }

  ngOnInit() {
    this.firstName='Abhishek';
    this.lastName='Shrivastava'
  }

  display():string
  {
      console.log('Button Click');
      return this.title = this.firstName +this.lastName;
      
  }

}
