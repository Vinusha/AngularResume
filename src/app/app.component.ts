import { Component, OnInit } from '@angular/core';
import { Skill } from './skills/skills.model';
import { Experience } from './experience/experience.model';
import { Education } from './education/education.model';
import { PersonalInfo } from './common/personal-info.model';
import { DataService } from './services/data.service';
import { PortfolioData } from './common/portfolio.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'workfolio-angular';
  skills!: Skill[];
  experience!: Experience[];
  education!: Education[];
  personalInfo!: PersonalInfo;

  subscription!:Subscription;

  constructor(private dataService: DataService ){}

  ngOnInit() {
    this.subscription = this.dataService.getData().subscribe((data:PortfolioData)=>{
      this.personalInfo = data.personalInfo;
      this.experience = data.experience;
      this.education = data.education;
      this.skills = data.skills;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
