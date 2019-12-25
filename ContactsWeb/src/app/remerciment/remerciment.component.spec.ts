import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemercimentComponent } from './remerciment.component';

describe('RemercimentComponent', () => {
  let component: RemercimentComponent;
  let fixture: ComponentFixture<RemercimentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemercimentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemercimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
