import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { PersonalInfo } from '../common/personal-info.model';
import { Skill } from '../skills/skills.model';
import { Experience } from '../experience/experience.model';
import { Education } from '../education/education.model';
import { PortfolioData } from '../common/portfolio.model';

@Injectable()
export class DataService {

  personalInfo = {
    name: "Vinusha Indiran",
    age: 36,
    email: "vinusha88@gmail.com",
    phone: "0123456789",
    address: "140, City Center, New York, USA",
    language: "English, German, French",
    decription: "I’m a highly motivated web developer with a knack for solving complex problems and a passion for learning new technologies. With experience in both front-end and back-end development, I specialize in building dynamic and responsive websites that provide a seamless user experience. I thrive in collaborative environments and enjoy working on projects that challenge my skills. Outside of coding, I’m an avid traveler, music lover, and coffee enthusiast, always looking for new adventures and opportunities to grow."
  } as PersonalInfo;

  skills = [
    { name: "HTML", percentage: 80 },
    { name: "CSS", percentage: 75 },
    { name: "JAVASCRIPT", percentage: 60},
    { name: "SASS", percentage: 60 },
    { name: "BOOTSTRAP", percentage: 75 },
    { name: "PHOTOSHOP", percentage: 20 },
  ] as Skill[];

  experience = [
    {
      jobTitle: "Front End Developer",
      startDate: "MARCH 2016",
      endDate: "PRESENT",
      companyName: "CREATIVEM",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
  ] as Experience[];

  education = [
    {
      schoolName: "UNIVERSITY OF COMPUTER SCIENCE",
      fieldOfStudy: "Master of Information Technology",
      startDate: "2013",
      endDate: "2015",
      degree: "Master's Degree",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
  ] as Education[];

  getData():Observable<PortfolioData>{
    return of({
      personalInfo:this.personalInfo,
      skills:this.skills,
      experience:this.experience,
      education:this.education,
    });
  }
}