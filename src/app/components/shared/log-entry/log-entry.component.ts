import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fd-log-entry',
  templateUrl: './log-entry.component.html',
  styleUrls: ['./log-entry.component.scss']
})
export class LogEntryComponent implements OnInit {

  @Input() icon;
  @Input() who;
  @Input() what;
  @Input() action;
  @Input() where;
  @Input() when;

  constructor() { }

  ngOnInit() {
  }

}
