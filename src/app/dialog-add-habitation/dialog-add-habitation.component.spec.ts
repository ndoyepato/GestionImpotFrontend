import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddHabitationComponent } from './dialog-add-habitation.component';

describe('DialogAddHabitationComponent', () => {
  let component: DialogAddHabitationComponent;
  let fixture: ComponentFixture<DialogAddHabitationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAddHabitationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddHabitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
