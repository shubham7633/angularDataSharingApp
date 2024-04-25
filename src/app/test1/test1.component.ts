// test1.component.ts
import { Component } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component {
  sharedData: any;

  constructor(private dataService: DataServiceService) {}

  ngOnInit() {
    console.log("ngOnInit called in Test1Component");
    this.sharedData = this.dataService.sharedData;
  }
}
