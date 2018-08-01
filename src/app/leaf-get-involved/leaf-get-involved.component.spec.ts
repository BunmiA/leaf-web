import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeafGetInvolvedComponent } from './leaf-get-involved.component';

describe('LeafGetInvolvedComponent', () => {
  let component: LeafGetInvolvedComponent;
  let fixture: ComponentFixture<LeafGetInvolvedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeafGetInvolvedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeafGetInvolvedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
