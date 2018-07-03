import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnNavbarOpenComponent } from './btn-navbar-open.component';

describe('BtnNavbarOpenComponent', () => {
  let component: BtnNavbarOpenComponent;
  let fixture: ComponentFixture<BtnNavbarOpenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnNavbarOpenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnNavbarOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
