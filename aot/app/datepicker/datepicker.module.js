var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DatepickerInputComponent } from './datepicker-input/datepicker-input.component';
var DatepickerModule = (function () {
    function DatepickerModule() {
    }
    return DatepickerModule;
}());
DatepickerModule = __decorate([
    NgModule({
        imports: [
            CommonModule
        ],
        declarations: [
            DatepickerComponent,
            DatepickerInputComponent
        ],
        exports: [DatepickerComponent, DatepickerInputComponent]
    })
], DatepickerModule);
export { DatepickerModule };
//# sourceMappingURL=datepicker.module.js.map