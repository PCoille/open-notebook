import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityWriteComponent } from './activity-write.component';
import { FreeWriteComponent } from '../../free-write/free-write.component';
import { FormsModule } from '@angular/forms';

describe('ActivityWriteComponent', () => {
  let component: ActivityWriteComponent;
  let fixture: ComponentFixture<ActivityWriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ActivityWriteComponent,
        FreeWriteComponent
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
