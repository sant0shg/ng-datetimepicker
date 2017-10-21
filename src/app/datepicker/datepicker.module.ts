import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DatepickerInputComponent } from './datepicker-input/datepicker-input.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    DatepickerComponent,
    DatepickerInputComponent
  ],
  entryComponents:[],
  exports:[DatepickerComponent,DatepickerInputComponent]
})
export class DatepickerModule { }
