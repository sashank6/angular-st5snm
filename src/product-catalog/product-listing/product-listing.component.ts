import { Component,Input, OnInit } from '@angular/core';
import { ApiService } from '../../core/api.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {
  @Input()
  sampleData = [];
  constructor(private api: ApiService. private random: RandomService) {}

  ngOnInit() {
    this.sampleData = this.api.getData();
    console.log(this.random.randomNumber)
  }
}
