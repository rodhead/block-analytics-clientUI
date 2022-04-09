import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSeetingsComponent } from './user-seetings.component';

describe('UserSeetingsComponent', () => {
  let component: UserSeetingsComponent;
  let fixture: ComponentFixture<UserSeetingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSeetingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
