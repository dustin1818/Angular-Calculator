import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteCalcuComponent } from './note-calcu.component';

describe('NoteCalcuComponent', () => {
  let component: NoteCalcuComponent;
  let fixture: ComponentFixture<NoteCalcuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteCalcuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteCalcuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
