import { Component, OnInit, Input } from '@angular/core';
import { Project } from './../../../../models/project.model';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.less']
})
export class InformationComponent implements OnInit {

  @Input() project: Project

  constructor() { }

  ngOnInit() {
  }

}
