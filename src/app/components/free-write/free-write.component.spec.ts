import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeWriteComponent } from './free-write.component';
import { FormsModule } from '@angular/forms';

describe('FreeWriteComponent', () => {
  let component: FreeWriteComponent;
  let fixture: ComponentFixture<FreeWriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeWriteComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeWriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
