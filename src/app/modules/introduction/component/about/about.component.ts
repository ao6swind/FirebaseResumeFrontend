import { Component, OnInit, Input } from '@angular/core';
import { Introduction } from './../../../../models/introduction.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {

  @Input() introduction: Introduction
  
  constructor() { }

  ngOnInit() { }

}
