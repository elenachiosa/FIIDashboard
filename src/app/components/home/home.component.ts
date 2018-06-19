import { Component, OnInit } from '@angular/core';
import { Subject } from '../../models/subject';
import { SubjectService } from '../../services/subject.service';
import { ProfessorService } from '../../services/professor.service';

@Component({
  selector: 'fd-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public currentSemester: Subject[];
  public leftovers: Subject[];
  public professors;

  constructor(private subjectService: SubjectService, private professorService: ProfessorService) {
    this.currentSemester = this.subjectService.currentSemester;
    this.leftovers = this.subjectService.leftovers;
    this.professors = this.professorService.professors;
  }

  ngOnInit() {
  }

}
