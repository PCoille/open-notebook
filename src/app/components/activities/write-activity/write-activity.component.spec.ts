import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityWriteComponent } from './write-activity.component';
import { FormsModule } from '@angular/forms';

describe('ActivityWriteComponent', () => {
  let component: ActivityWriteComponent;
  let fixture: ComponentFixture<ActivityWriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ActivityWriteComponent
      ],
      imports: [ FormsModule ]
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
