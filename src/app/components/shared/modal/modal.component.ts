import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap/modal/modal-ref';

@Component({
  selector: 'fd-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() title: string;
  @Output() close = new EventEmitter();
  @Output() dismiss = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  closeModal(event) {
    let body = document.getElementsByTagName('body')[0];
    body.classList.remove('modal-open');
    body.classList.add('modal-close');
    setTimeout(() => {
      this.close.emit();
    }, 210);
    
  }

  dismissModal(event) {
    this.dismiss.emit();
  }

}
