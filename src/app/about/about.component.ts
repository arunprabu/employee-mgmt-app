import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {

  dummyText: string;
  today: any = new Date();

  constructor() {
    this.dummyText = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, corporis illo? Aut fugit illo dolores! Architecto qui ipsum sequi perferendis voluptatum corporis neque explicabo nulla aperiam numquam. In, dolore velit!';
  }

  ngOnInit() {
  }

}
