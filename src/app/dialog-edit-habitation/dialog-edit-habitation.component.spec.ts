import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditHabitationComponent } from './dialog-edit-habitation.component';

describe('DialogAddHabitationComponent', () => {
  let component: DialogEditHabitationComponent;
  let fixture: ComponentFixture<DialogEditHabitationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogEditHabitationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditHabitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
