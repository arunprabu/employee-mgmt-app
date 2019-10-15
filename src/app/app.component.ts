import { Component } from '@angular/core';

// Decorator -- needs a meta data as params
@Component({
  selector: 'app-root',  // exposed in a selector -- mandatory
  templateUrl: './app.component.html',   // html -- mandatory -- only one
  styleUrls: ['./app.component.css'] // css-- optional
})
export class AppComponent {
  // ts
  title = 'employee-mgmt-app';
}
