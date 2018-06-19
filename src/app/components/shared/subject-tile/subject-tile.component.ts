import { Component, OnInit, Input } from '@angular/core';
import { Subject } from '../../../models/subject';

@Component({
  selector: 'fd-subject-tile',
  templateUrl: './subject-tile.component.html',
  styleUrls: ['./subject-tile.component.scss']
})
export class SubjectTileComponent implements OnInit {

  @Input() subject;
  @Input() i;
  @Input() title: boolean = true;
  @Input() waves: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  calculateFinalGrade(subject: Subject): number {
    var course = subject.course;
    var seminar = subject.seminar;
    return (parseFloat(course) + parseFloat(seminar)) / 2;
  }

}
