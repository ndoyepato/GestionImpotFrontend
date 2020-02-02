import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleteHabitationComponent } from './dialog-delete-habitation.component';

describe('DialogAddHabitationComponent', () => {
  let component: DialogDeleteHabitationComponent;
  let fixture: ComponentFixture<DialogDeleteHabitationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogDeleteHabitationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDeleteHabitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
