import { Component, OnInit, Input } from '@angular/core';
import { Subject } from '../../models/subject';
import { SubjectService } from '../../services/subject.service';
import { ProfessorService } from '../../services/professor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'fd-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  private activeSubject: string;
  private currentSemester: Subject[];
  private leftovers: Subject[];
  private professors;
  private courses = [14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  private attendances = [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  private homeworks = [5, 4, 3, 2, 1];

  constructor(private activeRoute: ActivatedRoute, private subjectService: SubjectService, private professorService: ProfessorService) {
    this.currentSemester = this.subjectService.currentSemester;
    this.leftovers = this.subjectService.leftovers;
    this.professors = this.professorService.professors;
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(routeParams => {
      this.activeSubject = routeParams.id;
    });
  }

  private calculateFinalGrade(subject: Subject): number {
    var course = subject.course;
    var seminar = subject.seminar;
    return (parseFloat(course) + parseFloat(seminar)) / 2;
  }

}
