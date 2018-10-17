import { DetailComponent } from './detail/detail.component';
import { IndexComponent } from './index/index.component';
import { ProjectComponent } from './project.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ProjectComponent,
    children: [
      { path: ':id', component: DetailComponent },
      { path: '', component: IndexComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
