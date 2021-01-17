import {Component, Input, OnInit} from '@angular/core';
import {Offer} from '../../models/offer.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() offers: Array<Offer>;

  constructor() { }

  ngOnInit(): void {
  }

}
