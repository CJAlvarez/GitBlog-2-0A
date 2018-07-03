import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnHomeGTextComponent } from './btn-home-g-text.component';

describe('BtnHomeGTextComponent', () => {
  let component: BtnHomeGTextComponent;
  let fixture: ComponentFixture<BtnHomeGTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnHomeGTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnHomeGTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
