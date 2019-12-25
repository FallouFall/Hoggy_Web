import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeconsultationComponent } from './listeconsultation.component';

describe('ListeconsultationComponent', () => {
  let component: ListeconsultationComponent;
  let fixture: ComponentFixture<ListeconsultationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeconsultationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeconsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
