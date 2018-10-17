import { Project } from './../../../../models/project.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {

  @Input() project: Project;
  @Input() $key: string;

  constructor() { }

  ngOnInit() {
  }

}
