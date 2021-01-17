import { Component, OnInit } from '@angular/core';
import {OffersService} from '../../services/offers/offers.service';
import {ActivatedRoute} from '@angular/router';
import {Offer} from '../../models/offer.model';

@Component({
  selector: 'app-single-offer-view',
  templateUrl: './single-offer-view.component.html',
  styleUrls: ['./single-offer-view.component.css']
})
export class SingleOfferViewComponent implements OnInit {

  offer: Offer;

  constructor(private offersService: OffersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.offer = this.offersService.getOfferById(+id);
  }

}
