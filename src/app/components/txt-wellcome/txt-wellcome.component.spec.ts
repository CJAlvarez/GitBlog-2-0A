import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TxtWellcomeComponent } from './txt-wellcome.component';

describe('TxtWellcomeComponent', () => {
  let component: TxtWellcomeComponent;
  let fixture: ComponentFixture<TxtWellcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TxtWellcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TxtWellcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
