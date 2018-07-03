import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarItemNotificationComponent } from './navbar-item-notification.component';

describe('NavbarItemNotificationComponent', () => {
  let component: NavbarItemNotificationComponent;
  let fixture: ComponentFixture<NavbarItemNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarItemNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarItemNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
