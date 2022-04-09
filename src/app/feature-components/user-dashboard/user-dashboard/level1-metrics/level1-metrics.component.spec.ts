import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Level1MetricsComponent } from './level1-metrics.component';

describe('Level1MetricsComponent', () => {
  let component: Level1MetricsComponent;
  let fixture: ComponentFixture<Level1MetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Level1MetricsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Level1MetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
