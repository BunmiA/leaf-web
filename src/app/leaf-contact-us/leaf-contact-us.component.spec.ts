import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeafContactUsComponent } from './leaf-contact-us.component';

describe('LeafContactUsComponent', () => {
  let component: LeafContactUsComponent;
  let fixture: ComponentFixture<LeafContactUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeafContactUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeafContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
