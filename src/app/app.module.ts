import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { ReferencesComponent } from './references/references.component';
import { ContactComponent } from './contact/contact.component';
import { SocialsComponent } from './socials/socials.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [												
    AppComponent,
      HeroComponent,
      SkillsComponent,
      PortfolioComponent,
      ExperienceComponent,
      EducationComponent,
      ReferencesComponent,
      ContactComponent,
      SocialsComponent,
      FooterComponent,
      NavbarComponent,
      AboutMeComponent,
   ],
  imports: [
    BrowserModule
  ],
  providers: [
    DataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
