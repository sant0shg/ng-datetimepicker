var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter } from '@angular/core';
var DatepickerComponent = (function () {
    function DatepickerComponent() {
        this.days = {
            day: [],
            pos: 0
        };
        this.activeMonthYear = false;
        this.months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ];
        this.clickedDate = new EventEmitter();
        this.currentDate = new Date();
    }
    DatepickerComponent.prototype.ngOnInit = function () {
        this.selectedDate = this.currentDate;
        this.updateMonth(this.selectedDate);
    };
    DatepickerComponent.prototype.previousMonth = function () {
        var tempMonth = this.selectedDate.getMonth();
        var tempYear = this.selectedDate.getFullYear();
        tempMonth--;
        if (tempMonth < 0) {
            tempMonth = 11;
            tempYear--;
        }
        this.selectedDate = new Date(tempYear, tempMonth);
        this.updateMonth(this.selectedDate);
    };
    DatepickerComponent.prototype.nextMonth = function () {
        var tempMonth = this.selectedDate.getMonth();
        var tempYear = this.selectedDate.getFullYear();
        tempMonth++;
        if (tempMonth > 11) {
            tempMonth = 0;
            tempYear++;
        }
        this.selectedDate = new Date(tempYear, tempMonth);
        this.updateMonth(this.selectedDate);
    };
    DatepickerComponent.prototype.updateMonth = function (date) {
        var year = date.getFullYear();
        var month = date.getMonth();
        if (year == this.currentDate.getFullYear() && month == this.currentDate.getMonth()) {
            this.activeMonthYear = true;
        }
        else {
            this.activeMonthYear = false;
        }
        var d = this.getMonthStartingPos(year, month);
        var temp = [];
        var t = [];
        var offset = d[1];
        for (var i = 0; i < offset; i++) {
            t.push(-1);
        }
        for (var i = 1; i <= d[0]; i++) {
            if (t.length != 7) {
                t.push(i);
            }
            if (t.length == 7) {
                temp.push(t);
                t = [];
            }
        }
        if (t.length > 0) {
            temp.push(t);
        }
        this.days = {
            day: temp,
            pos: d[1]
        };
        console.log(this.days);
    };
    DatepickerComponent.prototype.getMonthStartingPos = function (year, month) {
        var noOfDays = this.getNoOfDays(year, month);
        var daysPos = this.getArrayPos(year, month, 1);
        return [noOfDays, daysPos];
    };
    DatepickerComponent.prototype.getNoOfDays = function (year, month) {
        var days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (year % 4 === 0) {
            days[1] = 29;
        }
        return days[month];
    };
    /**
    * 0 - Sun
    * 6 - Sat
    */
    DatepickerComponent.prototype.getArrayPos = function (year, month, date) {
        var dat = new Date(year, month, date);
        return dat.getDay();
    };
    DatepickerComponent.prototype.selectDate = function (date) {
        this.selectedDate = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), date);
        this.clickedDate.emit({
            "date": this.selectedDate
        });
    };
    return DatepickerComponent;
}());
__decorate([
    Output('selectDate'),
    __metadata("design:type", Object)
], DatepickerComponent.prototype, "clickedDate", void 0);
DatepickerComponent = __decorate([
    Component({
        selector: 'ng-datepicker-modal',
        templateUrl: './datepicker.component.html',
        styleUrls: ['./datepicker.component.css'],
        host: { 'class': 'ng-datepicker-modal' }
    }),
    __metadata("design:paramtypes", [])
], DatepickerComponent);
export { DatepickerComponent };
//# sourceMappingURL=datepicker.component.js.map