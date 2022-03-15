import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  birthday = new Date("2002-07-14");
  age: any;

  calculateAge() {
    let difference = Date.now() - this.birthday.getTime();
    let date = new Date(difference);

    return Math.abs(date.getUTCFullYear() - 1970);
  }

  ngOnInit(): void {
    const birthday = 

    this.age = this.calculateAge();
  }

}
