import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOfferViewComponent } from './add-offer-view.component';

describe('AddOfferViewComponent', () => {
  let component: AddOfferViewComponent;
  let fixture: ComponentFixture<AddOfferViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOfferViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOfferViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
