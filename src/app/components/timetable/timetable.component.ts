import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, merge } from 'rxjs/operators';

import { SubjectService } from '../../services/subject.service';
import { TimetableItem } from '../../models/timetable-item';
import { TimetableService } from '../../services/timetable.service';
import { WeekDay } from '../../models/week-day';
import { HourInterval } from '../../models/hour-interval';
import { TimetableModalComponent } from './timetable-modal/timetable-modal.component';
import { GroupModalComponent } from './group-modal/group-modal.component';

@Component({
  selector: 'fd-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss']
})
export class TimetableComponent implements OnInit {

  private modalRef;
  private currentSemester;
  private weekDays: WeekDay[];
  private hourIntervals: HourInterval[];
  private timetable;
  private activeTimetable;

  private professorModel: any;
  private subjectModel: any;
  private typeModel: any;
  private roomModel: any;
  private hourIntervalModel: any;
  private groupModel: any;

  private filterProfessors: any;
  private filterSubjects: any;
  private filterTypes: any;
  private filterRooms: any;
  private filterHourIntervals: any;
  private filterGroups: any;

  constructor(private modalService: NgbModal, private subjectService: SubjectService, private timetableService: TimetableService) {
    this.currentSemester = this.subjectService.currentSemester;
    this.weekDays = this.timetableService.weekDays;
    this.hourIntervals = this.timetableService.hourIntervals;
    this.timetable = this.timetableService.timetable;
    // My timetable for group A2:
    this.activeTimetable = this.timetableService.timetable[1];

    this.filterProfessors = ['Liviu Ciortuz', 'Cristian Vidrascu', 'Dragos Gavrilut', 'Florin Olariu', 'Laurentiu Tiplea', 'Leahu Ioana'];
    this.filterSubjects = ['Machine Learning', 'Artificial Intelligence', 'Information Security', 'Operating Systems Special Chapters', 'Python', '.NET Introduction'];
    this.filterTypes = ['Course', 'Seminar'];
    this.filterRooms = ['C210', 'C401', 'C403', 'C405', 'C409', 'C411', 'C412', 'C413', 'C112', 'C114', 'C2', 'C309', 'C308', 'C901', 'C903', 'C905', 'C909'];
    this.filterHourIntervals = ['08:00 - 10:00', '10:00 - 12:00', '12:00 - 14:00', '14:00 - 16:00', '16:00 - 18:00', '18:00 - 20:00'];
    this.filterGroups = ['A1', 'A2', 'A3'];
  }


  private matchInterval(interval1: HourInterval, interval2: HourInterval): boolean {
    return interval1.start == interval2.start ? true : false;
  }

  private matchDay(day1: WeekDay, day2: WeekDay): boolean {
    return day1.name == day2.name ? true : false;
  }

  private openTimetableItemModal(timetableItem: TimetableItem) {
    this.modalRef = this.modalService.open(TimetableModalComponent);
    this.modalRef.componentInstance.timetableItem = timetableItem;
    let body = document.getElementsByTagName('body')[0];
    body.classList.remove('modal-close');
  }

  private openGroupModal(activeTimetable: string) {
    this.modalRef = this.modalService.open(GroupModalComponent);
    this.modalRef.componentInstance.activeTimetable = activeTimetable;
    this.modalRef.result.then((newTimetable) => {
      if(newTimetable != undefined){
        this.activeTimetable = newTimetable;
      }
    });
    let body = document.getElementsByTagName('body')[0];
    body.classList.remove('modal-close');
  }

  ngOnInit() {
  }

  searchProfessor = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => (term === '' ? this.filterProfessors
        : this.filterProfessors.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)))
    );
  searchSubject = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => (term === '' ? this.filterSubjects
        : this.filterSubjects.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)))
    );
  searchType = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => (term === '' ? this.filterTypes
        : this.filterTypes.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)))
    );
  searchRoom = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => (term === '' ? this.filterRooms
        : this.filterRooms.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)))
    );
  searchHourInterval = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => (term === '' ? this.filterHourIntervals
        : this.filterHourIntervals.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)))
    );
  searchGroup = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => (term === '' ? this.filterGroups
        : this.filterGroups.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)))
    );

}
