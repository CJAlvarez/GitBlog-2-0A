import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnLoginLogoComponent } from './btn-login-logo.component';

describe('BtnLoginLogoComponent', () => {
  let component: BtnLoginLogoComponent;
  let fixture: ComponentFixture<BtnLoginLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnLoginLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnLoginLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
