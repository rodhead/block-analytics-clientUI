import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFeedbackHistoryComponent } from './user-feedback-history.component';

describe('UserFeedbackHistoryComponent', () => {
  let component: UserFeedbackHistoryComponent;
  let fixture: ComponentFixture<UserFeedbackHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFeedbackHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFeedbackHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
