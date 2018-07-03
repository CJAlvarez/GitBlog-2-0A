import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarItemExitComponent } from './navbar-item-exit.component';

describe('NavbarItemExitComponent', () => {
  let component: NavbarItemExitComponent;
  let fixture: ComponentFixture<NavbarItemExitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarItemExitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarItemExitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
