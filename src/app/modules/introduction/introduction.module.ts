import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroductionRoutingModule } from './introduction-routing.module';
import { IndexComponent } from './index/index.component';
import { IntroductionComponent } from './introduction.component';
import { GeneralModule } from '../../shared/general/general.module';
import { ExperienceComponent } from './component/experience/experience.component';
import { EducationComponent } from './component/education/education.component';
import { CertificationComponent } from './component/certification/certification.component';
import { AboutComponent } from './component/about/about.component';
import { SkillComponent } from './component/skill/skill.component';
import { ProfileComponent } from './component/profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    IntroductionRoutingModule,
    GeneralModule
  ],
  declarations: [
    IntroductionComponent, 
    IndexComponent, 
    ExperienceComponent, 
    EducationComponent, 
    CertificationComponent, 
    AboutComponent, SkillComponent, ProfileComponent
  ]
})
export class IntroductionModule {  }
