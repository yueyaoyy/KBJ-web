import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtomComponent } from './buttom.component';

describe('ButtomComponent', () => {
  let component: ButtomComponent;
  let fixture: ComponentFixture<ButtomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
