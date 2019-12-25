import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListevaccinationComponent } from './listevaccination.component';

describe('ListevaccinationComponent', () => {
  let component: ListevaccinationComponent;
  let fixture: ComponentFixture<ListevaccinationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListevaccinationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListevaccinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
