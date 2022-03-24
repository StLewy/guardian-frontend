import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogChoiceNeedyComponent } from './dialog-choice-needy.component';

describe('DialogChoiceNeedyComponent', () => {
  let component: DialogChoiceNeedyComponent;
  let fixture: ComponentFixture<DialogChoiceNeedyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogChoiceNeedyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogChoiceNeedyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
