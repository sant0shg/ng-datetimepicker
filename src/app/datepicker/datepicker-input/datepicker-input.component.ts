import { Component, OnInit } from '@angular/core';
import { DateService } from '../date.service';

@Component({
  selector: 'app-datepicker-input',
  templateUrl: './datepicker-input.component.html',
  styleUrls: ['./datepicker-input.component.css'],
  providers:[DateService]
})
export class DatepickerInputComponent implements OnInit {
  show:boolean = false;
  constructor() { }

  ngOnInit() {
  }

  openDatePicker(){
    this.show = true;
  }

  closeDatePicker(){
    this.show = false;
  }
}
