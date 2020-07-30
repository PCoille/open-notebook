import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearDialogComponent } from './clear-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

describe('ClearDialogComponent', () => {
  let component: ClearDialogComponent;
  let fixture: ComponentFixture<ClearDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClearDialogComponent ],
      imports: [ MatDialogModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
