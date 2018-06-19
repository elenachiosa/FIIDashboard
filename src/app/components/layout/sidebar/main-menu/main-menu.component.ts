import { Component, OnInit } from '@angular/core';
import { Subject } from '../../../../models/subject';
import { SubjectService } from '../../../../services/subject.service';


@Component({
  selector: 'fd-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})

export class MainMenuComponent implements OnInit {

  private currentSemester: Subject[];
  private leftovers: Subject[];
  private menuItems;

  constructor(private subjectService: SubjectService) {
    this.currentSemester = this.subjectService.currentSemester;
    this.leftovers = this.subjectService.leftovers;

    this.menuItems = [
      {
        title: 'home',
        icon: 'home',
        expandable: 0,
        isExpanded: false
      },
      {
        title: 'my semester',
        icon: 'agenda',
        expandable: 1,
        isExpanded: false,
        submenu: this.currentSemester,
      },
      {
        title: 'leftovers',
        icon: 'archive',
        expandable: 1,
        isExpanded: false,
        submenu: this.leftovers
      },
      {
        title: 'timetable',
        icon: 'time',
        expandable: 0,
        isExpanded: false
      },
      {
        title: 'trajectory',
        icon: 'stats-up',
        expandable: 0,
        isExpanded: false
      },
      {
        title: 'taxes',
        icon: 'money',
        expandable: 0,
        isExpanded: false
      },
      {
        title: 'links',
        icon: 'link',
        expandable: 1,
        isExpanded: false
      }
    ];
  }

  ngOnInit() {

  }

  private hideMenu() {
    let body = document.getElementsByTagName('body')[0];

    body.classList.remove('menu-open');
    body.classList.add('menu-close');

  }

  private toggleSubmenu(_menuItem) {
    for (let menuItem of this.menuItems) {
      _menuItem === menuItem ? menuItem.isExpanded = !menuItem.isExpanded : menuItem.isExpanded = false;
    }
  }

}
