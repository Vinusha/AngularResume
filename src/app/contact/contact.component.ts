import { Component, Input, OnInit } from '@angular/core';
import { PersonalInfo } from '../common/personal-info.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() personalInfo!: PersonalInfo; 

  constructor() { }

  ngOnInit() {
  }

}
