import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickableBoxComponent } from './clickable-box.component';

describe('ClickableBoxComponent', () => {
  let component: ClickableBoxComponent;
  let fixture: ComponentFixture<ClickableBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickableBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickableBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
