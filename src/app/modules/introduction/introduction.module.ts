import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroductionRoutingModule } from './introduction-routing.module';
import { IndexComponent } from './index/index.component';
import { IntroductionComponent } from './introduction.component';
import { GeneralModule } from '../../shared/general/general.module';

@NgModule({
  imports: [
    CommonModule,
    IntroductionRoutingModule,
    GeneralModule
  ],
  declarations: [
    IntroductionComponent, 
    IndexComponent
  ]
})
export class IntroductionModule {  }
