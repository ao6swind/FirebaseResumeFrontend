import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'project', loadChildren: './modules/project/project.module#ProjectModule' },
  { path: '', loadChildren: './modules/introduction/introduction.module#IntroductionModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
