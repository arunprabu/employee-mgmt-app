import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `
    .redText{
      color: red;
    }

    .greenText{
      color: green;
    }
    `
  ]
})
export class HomeComponent implements OnInit {

  // string interpolation related 
  appName: string = "Employee Management App";
  age: number = 20;
  skillsList: string[] = [
    'html', 'css', 'js', 'ts', 'ng', 'react'
  ];

  // property binding
  isLoggedIn: boolean = true;

  // two way binding related
  devName: string = "Arun";

  // for structural directive example
  isAuth: boolean = false;
  

  constructor() { }

  ngOnInit() {
  }

  getAge(){
    return this.age;
  }

  //event binding related
  btnClickHandler( e ) {
    console.log(e);
    alert("testing events");
  }
}
