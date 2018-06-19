import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap/modal/modal-ref';
import { TimetableService } from '../../../services/timetable.service';

@Component({
  selector: 'fd-group-modal',
  templateUrl: './group-modal.component.html',
  styleUrls: ['./group-modal.component.scss']
})
export class GroupModalComponent implements OnInit {

  private activeTimetable: string;
  public timetable;

  constructor(public activeModal: NgbActiveModal, timetableService: TimetableService) {
    this.timetable = timetableService.timetable;
  }

  ngOnInit() {
  }

  closeModal() {
    this.activeModal.close();
  }

  dismissModal() {
    this.activeModal.dismiss();
  }

  selectGroup(timetableVariant) {
    this.activeTimetable = timetableVariant;
    this.activeModal.close(this.activeTimetable);
  }

}
