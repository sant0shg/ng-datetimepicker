# NgDatepicker

This is a datepicker implementation in angular 4.X

## Roadmap items

- Date picker implementation (WIP)
- Time picker (todo)

##  Demo

You can view the demo(wip) at 

https://netdeamon.github.io/ng-datepicker/

## Screenshot

Here is a preview of datepicker

<img src="https://raw.githubusercontent.com/netdeamon/ng-datepicker/master/demo.JPG" alt="demo"/>

## FAQs

-  How to change the date format?

    You can pass the function which will be called before displaying the date in the input field. 
    Example 

    > <ng-datepicker [customDate]="getDate"></ng-datepicker>

    `getDate`function receives the `date` object, and you can manipulate it in anyway you want.

    > getDate(date:any){
    >    return date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate();
    > }

    It is optional to pass the custom date function. If you do not pass the custom date function, then the "toString()" value of the date object is used in the input field. 

- How to edit the stylesheet of the datepicker?

    You can override the classes in the datepicker in your `styles.css` stylesheet. The parent class of the datepicker is `ng-datepicker-modal`.
    Example in `styles.css`
    
    > .ng-datepicker-modal .header{
    >    color:red;
    > }
