import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  data = [];
  constructor() {
    this.data = [
      {
        id: 1,
        name: 'data1'
      },
      {
        id: 2,
        name: 'data2'
      }
    ];
    console.log('API Service created !!!');
  }

  getData() {
    return this.data;
  }

  addData(newData) {
    this.data.push(newData);
  }
}
