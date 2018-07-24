import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterStatusComponent } from './enter-status.component';

describe('EnterStatusComponent', () => {
  let component: EnterStatusComponent;
  let fixture: ComponentFixture<EnterStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
