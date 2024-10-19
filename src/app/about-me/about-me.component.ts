import { Component, Input, OnInit } from '@angular/core';
import { PersonalInfo } from '../common/personal-info.model';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  @Input() personalInfo!: PersonalInfo; 

  constructor() { }

  ngOnInit() {
  }

}