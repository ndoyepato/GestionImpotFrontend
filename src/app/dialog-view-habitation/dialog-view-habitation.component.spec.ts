import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogViewHabitationComponent } from './dialog-view-habitation.component';

describe('DialogAddHabitationComponent', () => {
  let component: DialogViewHabitationComponent;
  let fixture: ComponentFixture<DialogViewHabitationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogViewHabitationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogViewHabitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
