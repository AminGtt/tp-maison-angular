import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Offer} from '../../models/offer.model';
import {ActivatedRoute, Router} from '@angular/router';
import {OffersService} from '../../services/offers/offers.service';

@Component({
  selector: 'app-edit-offer-view',
  templateUrl: './edit-offer-view.component.html',
  styleUrls: ['./edit-offer-view.component.css']
})
export class EditOfferViewComponent implements OnInit {

  offer: Offer;
  editOffer: FormGroup;

  msg: string;

  constructor(private offerService: OffersService, private router: Router, private formBuilder: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.offer = this.offerService.getOfferById(+id);

    this.initForm();
  }

  private initForm(): void {
    this.editOffer = this.formBuilder.group({
      title: ['', [Validators.required]],
      author: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]]
    });
  }

  onSubmitEditOffer(): void {
    this.offerService.editOffer(this.offer)
      .then(() => {
        this.msg = 'Modifications réussies!';

        setTimeout(() => {
          this.msg = undefined;
          this.router.navigate(['/offers']);
        }, 1500);
      });
  }

}
