import { Component, Input, OnInit } from '@angular/core';
import { Education } from './education.model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  @Input() education!: Education[]; 

  constructor() { }

  ngOnInit() {
  }

}
