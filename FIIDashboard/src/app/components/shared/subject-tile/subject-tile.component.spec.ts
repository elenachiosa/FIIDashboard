import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectTileComponent } from './subject-tile.component';

describe('SubjectTileComponent', () => {
  let component: SubjectTileComponent;
  let fixture: ComponentFixture<SubjectTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
