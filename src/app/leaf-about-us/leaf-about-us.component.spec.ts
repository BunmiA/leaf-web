import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeafAboutUsComponent } from './leaf-about-us.component';

describe('LeafAboutUsComponent', () => {
  let component: LeafAboutUsComponent;
  let fixture: ComponentFixture<LeafAboutUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeafAboutUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeafAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
