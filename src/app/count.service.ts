import { Injectable } from '@angular/core';

@Injectable()
export class CountService {

  count = 0;

  constructor() { }

  increaseCount() {
    this.count += 1;
  }
}
