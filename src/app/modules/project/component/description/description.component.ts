import { Component, OnInit, Input } from '@angular/core';
import { Project } from './../../../../models/project.model';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.less']
})
export class DescriptionComponent implements OnInit {

  @Input() project: Project

  constructor() { }

  ngOnInit() {
  }

}
