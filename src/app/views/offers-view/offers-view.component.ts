import {Component, Input, OnInit} from '@angular/core';
import {Offer} from '../../models/offer.model';
import {OffersService} from '../../services/offers/offers.service';

@Component({
  selector: 'app-offers-view',
  templateUrl: './offers-view.component.html',
  styleUrls: ['./offers-view.component.css']
})
export class OffersViewComponent implements OnInit {

  offers: Array<Offer>;

  constructor(private offersService: OffersService) { }

  ngOnInit(): void {
    this.offers = this.offersService.offers;
  }

}
