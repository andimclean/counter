import { Component } from '@angular/core';
import { CountService } from '../count.service';

@Component({
  selector: 'app-count-displayer',
  templateUrl: './count-displayer.component.html',
  styleUrls: ['./count-displayer.component.css']
})
export class CountDisplayerComponent {

  constructor(public countService: CountService) { }

}
