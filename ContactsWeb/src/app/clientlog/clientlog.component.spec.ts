import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientlogComponent } from './clientlog.component';

describe('ClientlogComponent', () => {
  let component: ClientlogComponent;
  let fixture: ComponentFixture<ClientlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
