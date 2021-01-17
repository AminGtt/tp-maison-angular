import { Component, OnInit } from '@angular/core';
import {OffersService} from '../../services/offers/offers.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Offer} from '../../models/offer.model';

@Component({
  selector: 'app-add-offer-view',
  templateUrl: './add-offer-view.component.html',
  styleUrls: ['./add-offer-view.component.css']
})
export class AddOfferViewComponent implements OnInit {

  constructor(private offersService: OffersService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmitAddOffer(form: NgForm): void {

    const offer = new Offer(form.value.title , form.value.author , form.value.description , form.value.price);
    // le "new Date()" aurais aussi pû se faire ci-dessus
    // si le param createdAt n'était pas facultatif.


    this.offersService.addOffer(offer)
      .then(() => {
        this.router.navigate(['/offers']);
      });
  }

}
