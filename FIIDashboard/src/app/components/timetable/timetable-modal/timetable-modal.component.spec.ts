import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableModalComponent } from './timetable-modal.component';

describe('TimetableModalComponent', () => {
  let component: TimetableModalComponent;
  let fixture: ComponentFixture<TimetableModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimetableModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetableModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
