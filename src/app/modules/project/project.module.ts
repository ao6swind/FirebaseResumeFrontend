import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';
import { IndexComponent } from './index/index.component';
import { DetailComponent } from './detail/detail.component';
import { GeneralModule } from '../../shared/general/general.module';
import { CardComponent } from './component/card/card.component';
import { InformationComponent } from './component/information/information.component';
import { MilestoneComponent } from './component/milestone/milestone.component';
import { DescriptionComponent } from './component/description/description.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectRoutingModule,
    GeneralModule
  ],
  declarations: [
    ProjectComponent, 
    IndexComponent, 
    DetailComponent, 
    CardComponent, InformationComponent, MilestoneComponent, DescriptionComponent
  ]
})
export class ProjectModule { }
