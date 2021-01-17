import { Injectable } from '@angular/core';
import {Offer} from '../../models/offer.model';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  offers: Array<Offer>;

  constructor() {
    this.offers = [];

    for (let i = 1; i <= 10; i++) {
      this.offers.push(
          new Offer('Annonce ' + i, 'Auteur ' + i, 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro.', '112€', new Date(), i)
      );
    }
  }

  getOfferById(id: number): Offer {
    for (const offer of this.offers) {
      if (offer.id === id) {
        return offer;
      }
    }
  }

  deleteOffer(id: number): void {
    console.log(id);
  }


  addOffer(newOffer: Offer): Promise<void> {
    return new Promise<void>((res, rej) => {
      newOffer.id = this.offers[this.offers.length - 1].id + 1;
      newOffer.createdAt = new Date();
      newOffer.price += '€';
      this.offers.push(newOffer);
      res();
    });
  }

  editOffer(newOffer: Offer): Promise<void>{
    return new Promise<void>((res, rej) => {
      newOffer.price += '€';
      for (let offer of this.offers) {
        if (offer.id === newOffer.id) {
          offer = newOffer;
          break;
        }
      }
      res();
    });
  }

}
