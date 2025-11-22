import { Component } from '@angular/core';

@Component({
  selector: 'app-topper',
  templateUrl: './topper.component.html',
  styleUrls: ['./topper.component.css']
})
export class TopperComponent {

  students = [
    { name: "Vaibhav", percent: 85 },
    { name: "Gauri", percent: 78 },
    { name: "Abhishek", percent: 91 },
    { name: "Aditya", percent: 85 },
    { name: "Nikhil", percent: 69 }
  ];

  result = this.students
    .filter(s => s.percent === 85)
    .map(s => s.name);

}
