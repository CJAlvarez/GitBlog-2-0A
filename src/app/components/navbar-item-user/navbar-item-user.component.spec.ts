import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarItemUserComponent } from './navbar-item-user.component';

describe('NavbarItemUserComponent', () => {
  let component: NavbarItemUserComponent;
  let fixture: ComponentFixture<NavbarItemUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarItemUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarItemUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
