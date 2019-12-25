import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemanderRvComponent } from './demander-rv.component';

describe('DemanderRvComponent', () => {
  let component: DemanderRvComponent;
  let fixture: ComponentFixture<DemanderRvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemanderRvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemanderRvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
