import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EmployeeService } from '../employee.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styles: []
})
export class EmployeeDetailsComponent implements OnInit, OnDestroy {

  employeeData: any;
  duplicateEmployeeData: any;
  employeeSubscription: Subscription;
  empId: string;
  isSaved: boolean;

  constructor( private employeeService: EmployeeService, private route: ActivatedRoute ) {  // 1. connect to service -- dep inj 

  }

  ngOnInit() {
    // reading url params
    const _empId = this.route.snapshot.paramMap.get('id');

    // 2. call the service method
    this.employeeSubscription = this.employeeService.getEmployeeById(_empId)
      .subscribe( (res: any) => { // 3. get the resp from service
        console.log( res );
        this.employeeData = res;
      });
  }

  onEditHandler(){
     // duplicating object
     this.duplicateEmployeeData = JSON.parse(JSON.stringify(this.employeeData));
  }

  async onUpdateHandler( formData ) {
    console.log(formData); // you can validate using this

    // use promise based submission
    // 1. send it service
    let res = await this.employeeService.updateEmployee(this.duplicateEmployeeData)
    console.log(res); // 2. get the resp from service

    if(res){
      this.isSaved = true;
    }
  }

  ngOnDestroy() {
    this.employeeSubscription.unsubscribe();
  }
}
