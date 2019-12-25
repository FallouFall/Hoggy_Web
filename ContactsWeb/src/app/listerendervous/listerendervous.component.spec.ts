import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerendervousComponent } from './listerendervous.component';

describe('ListerendervousComponent', () => {
  let component: ListerendervousComponent;
  let fixture: ComponentFixture<ListerendervousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListerendervousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerendervousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
