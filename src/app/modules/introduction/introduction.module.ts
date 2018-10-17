import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroductionRoutingModule } from './introduction-routing.module';
import { IndexComponent } from './index/index.component';
import { IntroductionComponent } from './introduction.component';

@NgModule({
  imports: [
    CommonModule,
    IntroductionRoutingModule
  ],
  declarations: [
    IntroductionComponent, 
    IndexComponent
  ]
})
export class IntroductionModule {  }
