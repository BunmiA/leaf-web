
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LeafSideComponent } from './leaf-side.component';

describe('LeafSideComponent', () => {
  let component: LeafSideComponent;
  let fixture: ComponentFixture<LeafSideComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [LeafSideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeafSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
