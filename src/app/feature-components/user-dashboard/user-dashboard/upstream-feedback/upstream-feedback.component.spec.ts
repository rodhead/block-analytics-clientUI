import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpstreamFeedbackComponent } from './upstream-feedback.component';

describe('UpstreamFeedbackComponent', () => {
  let component: UpstreamFeedbackComponent;
  let fixture: ComponentFixture<UpstreamFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpstreamFeedbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpstreamFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
