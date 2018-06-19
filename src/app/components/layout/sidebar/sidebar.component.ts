import { Component, OnInit } from '@angular/core';
import { TimetableService } from '../../../services/timetable.service';

@Component({
  selector: 'fd-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SideBarComponent implements OnInit {

  public userName : string = "Claudia Ionescu";
  public userRole: string = "student";
  public userYear: string = "3";
  public myTimetable;


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
