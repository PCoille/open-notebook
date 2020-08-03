import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteActivityComponent } from './write-activity.component';
import { FormsModule } from '@angular/forms';

describe('WriteActivityComponent', () => {
  let component: WriteActivityComponent;
  let fixture: ComponentFixture<WriteActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WriteActivityComponent
      ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
