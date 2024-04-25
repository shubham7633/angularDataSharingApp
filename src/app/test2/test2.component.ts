// test2.component.ts
import { Component } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component {
  sharedData: any;

  constructor(private dataService: DataServiceService) {}

  ngOnInit() {
    console.log("ngOnInit called in Test2Component");
    this.sharedData = this.dataService.sharedData;
  }
}
