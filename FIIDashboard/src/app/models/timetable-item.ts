import { Subject } from './subject';
import { HourInterval } from './hour-interval';
import { WeekDay } from './week-day';

export class TimetableItem {
  subject: Subject;
  hourInterval: HourInterval;
  weekDay: WeekDay;
  type: string;
  location: string;
  professor: string;
  group: string;
  year: number
}
