import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styles: []
})
export class EmployeesComponent implements OnInit, OnDestroy {
  employeeList: any[];
  employeesSubscription: Subscription;

  constructor( private employeeService: EmployeeService) { 
    console.log("inside Constructor");
  }

  ngOnInit() { // lifecycle hook
    console.log("inside ngOnInit");

    this.employeesSubscription = this.employeeService.getEmployees()
      .subscribe( ( res: any[]) => {
        console.log(res);
        this.employeeList = res;
      });
  }

  ngOnDestroy() {
    console.log("Inside destroy");
    this.employeesSubscription.unsubscribe();
  }

}
