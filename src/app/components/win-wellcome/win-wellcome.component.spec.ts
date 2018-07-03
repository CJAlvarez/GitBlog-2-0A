import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinWellcomeComponent } from './win-wellcome.component';

describe('WinWellcomeComponent', () => {
  let component: WinWellcomeComponent;
  let fixture: ComponentFixture<WinWellcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinWellcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinWellcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
