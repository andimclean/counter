import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountDisplayerComponent } from './count-displayer.component';

describe('CountDisplayerComponent', () => {
  let component: CountDisplayerComponent;
  let fixture: ComponentFixture<CountDisplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountDisplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
