import { Component, OnInit, Input } from '@angular/core';
import { Project } from './../../../../models/project.model';

@Component({
  selector: 'app-milestone',
  templateUrl: './milestone.component.html',
  styleUrls: ['./milestone.component.less']
})
export class MilestoneComponent implements OnInit {

  @Input() project: Project

  constructor() { }

  ngOnInit() {
  }

}
