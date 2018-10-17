import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { LanguageService } from './../../../services/language.service';
import { Certification } from './../../../models/certification.model';
import { Education } from './../../../models/education.model';
import { Experience } from './../../../models/experience.model';
import { Introduction } from './../../../models/introduction.model';
import { Skill } from './../../../models/skill.model';
import { Link } from './../../../models/link.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {

  public isShowCertification: boolean = false;
  public isShowExperience: boolean = false;
  public isLoading: boolean = true;
  public language: string = 'zh-TW';

  public experience: Experience = new Experience();
  public certification: Certification = new Certification();
  public introduction: Introduction = new Introduction();

  public certifications: AngularFireList<Certification>;
  public educations: AngularFireList<Education>;
  public experiences: AngularFireList<Experience>;
  public introductions: AngularFireList<Introduction>;
  public skills: AngularFireList<Skill>;
  
  public tabs = [];

  public dataSet = {
    certifications: [],
    educations: [],
    experiences: [],
    skills:[],
    introductions:[]
  };

  public isReady = {
    certification: false,
    education: false,
    experience: false,
    introduction: false,
    skill: false
  };

  

  constructor
  (
    public fb: AngularFireDatabase,
    public langService: LanguageService
  ) 
  { 
    this.language = this.langService.getLanguage();

    this.certifications = this.fb.list(`${this.language}/certification`);
    this.educations = this.fb.list(`${this.language}/education`);
    this.experiences = this.fb.list(`${this.language}/experience`);
    this.introductions = this.fb.list(`${this.language}/introduction`);
    this.skills = this.fb.list(`${this.language}/skills`);

    this.certifications.snapshotChanges().subscribe(list => {
      this.dataSet.certifications = list.map(item => {
        return {
          $key: item.key,
          certification: item.payload.val()
        }
      });
      this.isReady.certification = true;
      this.checkIsLoading();
    });

    this.educations.snapshotChanges().subscribe(list => {
      this.dataSet.educations = list.map(item => {
        return {
          $key: item.key,
          education: item.payload.val()
        }
      });
      this.isReady.education = true;
      this.checkIsLoading();
    });

    this.experiences.snapshotChanges().subscribe(list => {
      this.dataSet.experiences = list.map(item => {
        return {
          $key: item.key,
          experience: item.payload.val()
        }
      });
      this.isReady.experience = true;
      this.checkIsLoading();
    });

    this.skills.snapshotChanges().subscribe(list => {
      this.dataSet.skills = list.map(item => {
        return {
          $key: item.key,
          skill: item.payload.val()
        }
      });
      this.isReady.skill = true;
      this.checkIsLoading();
    });

    this.introductions.snapshotChanges().subscribe(list => {
      this.dataSet.introductions = list.map(item => {
        return {
          $key: item.key,
          introduction: item.payload.val()
        }
      });

      if(this.dataSet.introductions.length > 0)
      {
        this.introduction = this.dataSet.introductions[0].introduction;

        // 因為firebase在儲存的時候如果沒有child就會直接砍掉該屬性，所以檢查看看要不要建立回來
        this.introduction['links'] = ((typeof this.introduction['links']) != 'undefined') ? this.introduction['links'] : new Array<Link>();
      }
      this.isReady.introduction = true;
      this.checkIsLoading();
    });
  }

  ngOnInit() {
  }

  checkIsLoading(){
    this.isLoading = (
      this.isReady.certification && 
      this.isReady.education && 
      this.isReady.experience && 
      this.isReady.introduction && 
      this.isReady.skill) ? false : true;
  }

  showCertificaiton(item: Certification){
    this.certification = item;
    this.isShowCertification = true;
  }

  closeCertification(){
    this.isShowCertification = false;
  }

  showExperience(item: Experience){
    this.experience = item;
    this.isShowExperience = true;
  }

  closeExperience(){
    this.isShowExperience = false;
  }
}
