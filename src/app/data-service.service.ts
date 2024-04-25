// data-service.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  sharedData: any = 'Static Data';

  constructor() {}
}
