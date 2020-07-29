import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeWriteComponent } from './free-write.component';

describe('FreeWriteComponent', () => {
  let component: FreeWriteComponent;
  let fixture: ComponentFixture<FreeWriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeWriteComponent ]
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
