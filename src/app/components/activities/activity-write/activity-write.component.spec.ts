import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityWriteComponent } from './activity-write.component';

describe('ActivityWriteComponent', () => {
  let component: ActivityWriteComponent;
  let fixture: ComponentFixture<ActivityWriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityWriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityWriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
