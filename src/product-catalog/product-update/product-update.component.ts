import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { ApiService } from '../../core/api.service';
import { RandomService } from '../../core/random.service';
@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  dataForm: FormGroup;

  constructor(private api: ApiService, private random: RandomService) {}

  ngOnInit() {
    this.dataForm = new FormGroup({
      id: new FormControl(' '),
      name: new FormControl(' ')
    });
    console.log(this.random.randomNumber)
  }

  saveData() {
    this.api.addData({
      id: this.dataForm.controls.id.value,
      name: this.dataForm.controls.name.value
    });
  }
}
