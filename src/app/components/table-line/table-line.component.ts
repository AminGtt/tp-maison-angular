import {Component, Input, OnInit} from '@angular/core';
import {OffersService} from '../../services/offers/offers.service';

@Component({
  selector: '[app-table-line]',
  templateUrl: './table-line.component.html',
  styleUrls: ['./table-line.component.css']
})
export class TableLineComponent implements OnInit {

  editUrl: string;
  showUrl: string;

  @Input() id: number;
  @Input() title: string;
  @Input() author: string;
  @Input() createdAt: Date;

  constructor(private offersService: OffersService) { }

  ngOnInit(): void {
    this.editUrl  = '/offers/edit/' + this.id;
    this.showUrl  = '/offers/' + this.id;
  }

  onClickDeleteOffer(id: number): void {
    this.offersService.deleteOffer(id);
  }

}
