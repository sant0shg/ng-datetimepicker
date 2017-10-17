var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { DateService } from '../date.service';
var DatepickerInputComponent = (function () {
    function DatepickerInputComponent() {
        this.show = false;
    }
    DatepickerInputComponent.prototype.ngOnInit = function () {
    };
    DatepickerInputComponent.prototype.openDatePicker = function () {
        this.show = true;
    };
    DatepickerInputComponent.prototype.closeDatePicker = function () {
        this.show = false;
    };
    return DatepickerInputComponent;
}());
DatepickerInputComponent = __decorate([
    Component({
        selector: 'app-datepicker-input',
        templateUrl: './datepicker-input.component.html',
        styleUrls: ['./datepicker-input.component.css'],
        providers: [DateService]
    }),
    __metadata("design:paramtypes", [])
], DatepickerInputComponent);
export { DatepickerInputComponent };
//# sourceMappingURL=datepicker-input.component.js.map