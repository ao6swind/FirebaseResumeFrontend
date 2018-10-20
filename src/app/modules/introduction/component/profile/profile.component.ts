import { Component, OnInit, Input } from '@angular/core';
import { Introduction } from './../../../../models/introduction.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {

  @Input() introduction: Introduction

  constructor() { }

  ngOnInit() {}

}
