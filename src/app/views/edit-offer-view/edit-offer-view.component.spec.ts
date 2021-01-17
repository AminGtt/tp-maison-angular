import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOfferViewComponent } from './edit-offer-view.component';

describe('EditOfferViewComponent', () => {
  let component: EditOfferViewComponent;
  let fixture: ComponentFixture<EditOfferViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditOfferViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOfferViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
