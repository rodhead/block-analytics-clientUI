import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyFeedbackDataComponent } from './cy-feedback-data.component';

describe('CyFeedbackDataComponent', () => {
  let component: CyFeedbackDataComponent;
  let fixture: ComponentFixture<CyFeedbackDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CyFeedbackDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CyFeedbackDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
