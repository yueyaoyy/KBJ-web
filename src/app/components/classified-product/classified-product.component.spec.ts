import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassifiedProductComponent } from './classified-product.component';

describe('ClassifiedProductComponent', () => {
  let component: ClassifiedProductComponent;
  let fixture: ComponentFixture<ClassifiedProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassifiedProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassifiedProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
