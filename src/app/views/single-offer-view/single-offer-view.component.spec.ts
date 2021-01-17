import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleOfferViewComponent } from './single-offer-view.component';

describe('SingleOfferViewComponent', () => {
  let component: SingleOfferViewComponent;
  let fixture: ComponentFixture<SingleOfferViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleOfferViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleOfferViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
