import { Component, OnInit } from '@angular/core';
import { TimetableService } from '../../../services/timetable.service';

@Component({
  selector: 'fd-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SideBarComponent implements OnInit {

  private userName : string = "Claudia Ionescu";
  private userRole: string = "student";
  private userYear: string = "3";
  private myTimetable;


  constructor(timetableService: TimetableService) {
    this.myTimetable = timetableService.timetable[1];
  }

  ngOnInit() {
  }

  hideMenu() {
    let body = document.getElementsByTagName('body')[0];

    body.classList.remove('menu-open');
    body.classList.add('menu-close');

  }

}
