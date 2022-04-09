import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTopToolbarComponent } from './home-top-toolbar.component';

describe('HomeTopToolbarComponent', () => {
  let component: HomeTopToolbarComponent;
  let fixture: ComponentFixture<HomeTopToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTopToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTopToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
