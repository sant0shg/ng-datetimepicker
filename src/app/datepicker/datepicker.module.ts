import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DatepickerInputComponent } from './datepicker-input/datepicker-input.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DatepickerComponent,
    DatepickerInputComponent
  ],
  exports:[DatepickerComponent,DatepickerInputComponent]
})
export class DatepickerModule { }
