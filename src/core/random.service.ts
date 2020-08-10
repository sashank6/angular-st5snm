import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  randomNumber: number;
  constructor() {
    this.randomNumber = Math.random();
  }
}
