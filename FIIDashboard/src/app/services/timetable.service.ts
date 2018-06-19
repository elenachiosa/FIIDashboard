import { Injectable } from '@angular/core';
import { WeekDay } from '../models/week-day';
import { HourInterval } from '../models/hour-interval';
import { Subject } from '../models/subject';
import { TimetableItem } from '../models/timetable-item';
import { SubjectService } from './subject.service';
import { ProfessorService } from './professor.service';


@Injectable()
export class TimetableService {

  public currentSemester: Subject[];
  public leftovers: Subject[];
  public professors: string[];

  public weekDays: WeekDay[] = [
    {
      name: 'monday',
      shortName: 'mo'
    },
    {
      name: 'tuesday',
      shortName: 'tu'
    },
    {
      name: 'wednesday',
      shortName: 'we'
    },
    {
      name: 'thursday',
      shortName: 'th'
    },
    {
      name: 'friday',
      shortName: 'fr'
    }
  ];
  public hourIntervals: HourInterval[] = [
    {
      start: 8,
      end: 10
    },
    {
      start: 10,
      end: 12
    },
    {
      start: 12,
      end: 14
    },
    {
      start: 14,
      end: 16
    },
    {
      start: 16,
      end: 18
    },
    {
      start: 18,
      end: 20
    },
  ];

  public group1: TimetableItem[];
  public group2: TimetableItem[];
  public group3: TimetableItem[];

  public timetable;

  constructor(private subjectService: SubjectService, professorService: ProfessorService) {
    this.currentSemester = subjectService.currentSemester;
    this.leftovers = subjectService.leftovers;
    this.professors = professorService.professors;

    this.group1 = [
      {
        subject: this.currentSemester[2],
        hourInterval: {
          start: 10,
          end: 12
        },
        weekDay: {
          name: 'monday',
          shortName: 'mo'
        },
        type: 'seminar',
        location: 'C2',
        professor: this.professors[2],
        group: `A1`,
        year: 3
      },
      {
        subject: this.currentSemester[1],
        hourInterval: {
          start: 12,
          end: 14
        },
        weekDay: {
          name: 'monday',
          shortName: 'mo'
        },
        type: 'course',
        location: 'C409',
        professor: this.professors[6],
        group: `A1`,
        year: 3
      },
      {
        subject: this.currentSemester[5],
        hourInterval: {
          start: 16,
          end: 18
        },
        weekDay: {
          name: 'monday',
          shortName: 'mo'
        },
        type: 'seminar',
        location: 'C701',
        professor: this.professors[5],
        group: `A1`,
        year: 3
      },
      {
        subject: this.currentSemester[3],
        hourInterval: {
          start: 8,
          end: 10
        },
        weekDay: {
          name: 'tuesday',
          shortName: 'tu'
        },
        type: 'course',
        location: 'C1',
        professor: this.professors[3],
        group: `A1`,
        year: 3
      },
      {
        subject: this.currentSemester[2],
        hourInterval: {
          start: 14,
          end: 16
        },
        weekDay: {
          name: 'tuesday',
          shortName: 'tu'
        },
        type: 'course',
        location: 'C1',
        professor: this.professors[2],
        group: `A1`,
        year: 3
      },
      {
        subject: this.currentSemester[4],
        hourInterval: {
          start: 16,
          end: 18
        },
        weekDay: {
          name: 'tuesday',
          shortName: 'tu'
        },
        type: 'seminar',
        location: 'C201',
        professor: this.professors[1],
        group: `A1`,
        year: 3
      },
      {
        subject: this.currentSemester[0],
        hourInterval: {
          start: 18,
          end: 20
        },
        weekDay: {
          name: 'tuesday',
          shortName: 'tu'
        },
        type: 'seminar',
        location: 'C201',
        professor: this.professors[0],
        group: `A1`,
        year: 3
      },
      {
        subject: this.currentSemester[4],
        hourInterval: {
          start: 8,
          end: 10
        },
        weekDay: {
          name: 'wednesday',
          shortName: 'we'
        },
        type: 'seminar',
        location: 'C201',
        professor: this.professors[1],
        group: `A1`,
        year: 3
      },
      {
        subject: this.currentSemester[0],
        hourInterval: {
          start: 10,
          end: 12
        },
        weekDay: {
          name: 'thursday',
          shortName: 'th'
        },
        type: 'seminar',
        location: 'C201',
        professor: this.professors[0],
        group: `A1`,
        year: 3
      },
      {
        subject: this.currentSemester[1],
        hourInterval: {
          start: 14,
          end: 16
        },
        weekDay: {
          name: 'thursday',
          shortName: 'th'
        },
        type: 'seminar',
        location: 'C201',
        professor: this.professors[6],
        group: `A1`,
        year: 3
      },
      {
        subject: this.currentSemester[3],
        hourInterval: {
          start: 10,
          end: 12
        },
        weekDay: {
          name: 'friday',
          shortName: 'fr'
        },
        type: 'seminar',
        location: 'C201',
        professor: this.professors[3],
        group: `A1`,
        year: 3
      },
      {
        subject: this.currentSemester[5],
        hourInterval: {
          start: 12,
          end: 14
        },
        weekDay: {
          name: 'friday',
          shortName: 'fr'
        },
        type: 'seminar',
        location: 'C201',
        professor: this.professors[4],
        group: `A1`,
        year: 3
      }
    ];
    this.group2 = [
      {
        subject: this.currentSemester[2],
        hourInterval: {
          start: 14,
          end: 16
        },
        weekDay: {
          name: 'monday',
          shortName: 'mo'
        },
        type: 'seminar',
        location: 'C2',
        professor: this.professors[2],
        group: `A2`,
        year: 3
      },
      {
        subject: this.currentSemester[5],
        hourInterval: {
          start: 16,
          end: 18
        },
        weekDay: {
          name: 'monday',
          shortName: 'mo'
        },
        type: 'course',
        location: 'C409',
        professor: this.professors[4],
        group: `A2`,
        year: 3
      },
      {
        subject: this.currentSemester[1],
        hourInterval: {
          start: 10,
          end: 12
        },
        weekDay: {
          name: 'tuesday',
          shortName: 'tu'
        },
        type: 'seminar',
        location: 'C701',
        professor: this.professors[6],
        group: `A2`,
        year: 3
      },
      {
        subject: this.currentSemester[4],
        hourInterval: {
          start: 12,
          end: 14
        },
        weekDay: {
          name: 'tuesday',
          shortName: 'tu'
        },
        type: 'course',
        location: 'C1',
        professor: this.professors[1],
        group: `A2`,
        year: 3
      },
      {
        subject: this.currentSemester[3],
        hourInterval: {
          start: 16,
          end: 20
        },
        weekDay: {
          name: 'tuesday',
          shortName: 'tu'
        },
        type: 'seminar',
        location: 'C201',
        professor: this.professors[3],
        group: `A2`,
        year: 3
      },
      {
        subject: this.currentSemester[0],
        hourInterval: {
          start: 12,
          end: 14
        },
        weekDay: {
          name: 'wednesday',
          shortName: 'we'
        },
        type: 'seminar',
        location: 'C201',
        professor: this.professors[0],
        group: `A2`,
        year: 3
      },
      {
        subject: this.currentSemester[2],
        hourInterval: {
          start: 14,
          end: 16
        },
        weekDay: {
          name: 'wednesday',
          shortName: 'we'
        },
        type: 'seminar',
        location: 'C201',
        professor: this.professors[2],
        group: `A2`,
        year: 3
      },
      {
        subject: this.currentSemester[3],
        hourInterval: {
          start: 18,
          end: 20
        },
        weekDay: {
          name: 'wednesday',
          shortName: 'we'
        },
        type: 'seminar',
        location: 'C201',
        professor: this.professors[3],
        group: `A2`,
        year: 3
      },
      {
        subject: this.currentSemester[5],
        hourInterval: {
          start: 10,
          end: 12
        },
        weekDay: {
          name: 'thursday',
          shortName: 'th'
        },
        type: 'seminar',
        location: 'C201',
        professor: this.professors[5],
        group: `A2`,
        year: 3
      },
      {
        subject: this.currentSemester[1],
        hourInterval: {
          start: 18,
          end: 20
        },
        weekDay: {
          name: 'thursday',
          shortName: 'th'
        },
        type: 'seminar',
        location: 'C201',
        professor: this.professors[6],
        group: `A2`,
        year: 3
      },
      {
        subject: this.currentSemester[0],
        hourInterval: {
          start: 8,
          end: 10
        },
        weekDay: {
          name: 'friday',
          shortName: 'fr'
        },
        type: 'seminar',
        location: 'C201',
        professor: this.professors[0],
        group: `A2`,
        year: 3
      },
      {
        subject: this.currentSemester[4],
        hourInterval: {
          start: 14,
          end: 16
        },
        weekDay: {
          name: 'friday',
          shortName: 'fr'
        },
        type: 'seminar',
        location: 'C201',
        professor: this.professors[1],
        group: `A2`,
        year: 3
      }
    ];
    this.group3 = [
      {
        subject: this.currentSemester[2],
        hourInterval: {
          start: 14,
          end: 16
        },
        weekDay: {
          name: 'monday',
          shortName: 'mo'
        },
        type: 'seminar',
        location: 'C2',
        professor: this.professors[2],
        group: `A3`,
        year: 3
      },
      {
        subject: this.currentSemester[3],
        hourInterval: {
          start: 16,
          end: 18
        },
        weekDay: {
          name: 'monday',
          shortName: 'mo'
        },
        type: 'course',
        location: 'C409',
        professor: this.professors[3],
        group: `A3`,
        year: 3
      },
      {
        subject: this.currentSemester[1],
        hourInterval: {
          start: 10,
          end: 12
        },
        weekDay: {
          name: 'tuesday',
          shortName: 'tu'
        },
        type: 'seminar',
        location: 'C701',
        professor: this.professors[6],
        group: `A3`,
        year: 3
      },
      {
        subject: this.currentSemester[0],
        hourInterval: {
          start: 14,
          end: 16
        },
        weekDay: {
          name: 'tuesday',
          shortName: 'tu'
        },
        type: 'course',
        location: 'C1',
        professor: this.professors[0],
        group: `A3`,
        year: 3
      },
      {
        subject: this.currentSemester[2],
        hourInterval: {
          start: 16,
          end: 18
        },
        weekDay: {
          name: 'tuesday',
          shortName: 'tu'
        },
        type: 'seminar',
        location: 'C201',
        professor: this.professors[2],
        group: `A3`,
        year: 3
      },
      {
        subject: this.currentSemester[5],
        hourInterval: {
          start: 18,
          end: 20
        },
        weekDay: {
          name: 'tuesday',
          shortName: 'tu'
        },
        type: 'seminar',
        location: 'C201',
        professor: this.professors[5],
        group: `A3`,
        year: 3
      },
      {
        subject: this.currentSemester[4],
        hourInterval: {
          start: 8,
          end: 10
        },
        weekDay: {
          name: 'wednesday',
          shortName: 'we'
        },
        type: 'seminar',
        location: 'C201',
        professor: this.professors[1],
        group: `A3`,
        year: 3
      },
      {
        subject: this.currentSemester[0],
        hourInterval: {
          start: 10,
          end: 12
        },
        weekDay: {
          name: 'wednesday',
          shortName: 'we'
        },
        type: 'seminar',
        location: 'C201',
        professor: this.professors[0],
        group: `A3`,
        year: 3
      },
      {
        subject: this.currentSemester[5],
        hourInterval: {
          start: 12,
          end: 14
        },
        weekDay: {
          name: 'wednesday',
          shortName: 'we'
        },
        type: 'seminar',
        location: 'C201',
        professor: this.professors[4],
        group: `A3`,
        year: 3
      },
      {
        subject: this.currentSemester[1],
        hourInterval: {
          start: 14,
          end: 16
        },
        weekDay: {
          name: 'thursday',
          shortName: 'th'
        },
        type: 'seminar',
        location: 'C201',
        professor: this.professors[6],
        group: `A3`,
        year: 3
      },
      {
        subject: this.currentSemester[4],
        hourInterval: {
          start: 18,
          end: 20
        },
        weekDay: {
          name: 'thursday',
          shortName: 'th'
        },
        type: 'seminar',
        location: 'C201',
        professor: this.professors[1],
        group: `A3`,
        year: 3
      },
      {
        subject: this.currentSemester[3],
        hourInterval: {
          start: 10,
          end: 12
        },
        weekDay: {
          name: 'friday',
          shortName: 'fr'
        },
        type: 'seminar',
        location: 'C201',
        professor: this.professors[3],
        group: `A3`,
        year: 3
      }
    ];

    this.timetable = [
      this.group1,
      this.group2,
      this.group3
    ];
  }




}
