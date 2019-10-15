import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styles: []
})
export class AddEmployeeComponent implements OnInit {

  // Step1: Create Form Group
  employeeForm: FormGroup;
  isSaved: boolean;

  constructor( private employeeService: EmployeeService) {
    this.employeeForm = new FormGroup({
      // Step2: Create Form Control
      name: new FormControl('arun', Validators.required),  // Step5: add validators 
      age: new FormControl('20', [ 
                                Validators.required,
                                Validators.min(18)
                              ] ),
      department: new FormControl('IT', Validators.required)
    });
  }

  ngOnInit() {
  }

  async onAddEmployeeHandler() {
    console.log(this.employeeForm);
    console.log(this.employeeForm.value);
    let res: any = await this.employeeService.createEmployee(this.employeeForm.value);

    console.log(res);

    if(res && res.id){
      this.isSaved = true;
    }
  }
}
