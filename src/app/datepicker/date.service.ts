import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DateService {
  private date:any;
  private loader = new Subject<any>();
  loading = this.loader.asObservable();

  constructor() { }

  setDate(){

  }

  getDate(){
    this.loader.next({
      
    })
  }
}
