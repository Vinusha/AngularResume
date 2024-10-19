import { Component, Input, OnInit } from '@angular/core';
import { Skill } from './skills.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  @Input() professionalSkills!: Skill[];

  ngOnInit() {
  }

}
