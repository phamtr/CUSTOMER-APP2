import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassifyproductComponent } from './classifyproduct.component';

describe('ClassifyproductComponent', () => {
  let component: ClassifyproductComponent;
  let fixture: ComponentFixture<ClassifyproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassifyproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassifyproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
