import { Component, Input, OnInit } from '@angular/core';
import { Experience } from './experience.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  @Input() workExperiences!: Experience[]; 

  constructor() { }

  ngOnInit() {
  }

}
