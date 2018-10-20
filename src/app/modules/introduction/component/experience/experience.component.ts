import { Component, OnInit, Input } from '@angular/core';
import { Experience } from './../../../../models/experience.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.less']
})
export class ExperienceComponent implements OnInit {

  @Input() dataSet: Array<any>
  public isShowExperience: boolean = false;
  public experience: Experience = new Experience();

  constructor() { }

  ngOnInit() { }

  showExperience(item: Experience)
  {
    this.experience = item;
    this.isShowExperience = true;
  }

  closeExperience()
  {
    this.isShowExperience = false;
  }
}
