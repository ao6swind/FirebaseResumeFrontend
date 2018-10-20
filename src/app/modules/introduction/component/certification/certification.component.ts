import { Component, OnInit, Input } from '@angular/core';
import { Certification } from './../../../../models/certification.model';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.less']
})
export class CertificationComponent implements OnInit {

  @Input() dataSet: Array<any>
  public isShowCertification: boolean = false;
  public certification: Certification = new Certification();

  constructor() { }

  ngOnInit() { }

  showCertificaiton(item: Certification)
  {
    this.certification = item;
    this.isShowCertification = true;
  }

  closeCertification()
  {
    this.isShowCertification = false;
  }
}
