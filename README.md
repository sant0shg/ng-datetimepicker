# NgDateTimepicker

This is a datetimepicker implementation in angular 4.X

## Roadmap items

- Date picker implementation (Done)
- Time picker (Done)

##  Demo

You can view the demo(wip) at 

https://netdeamon.github.io/ng-datetimepicker/

## Screenshot

Here is a preview of datetimepicker

<img src="https://raw.githubusercontent.com/netdeamon/ng-datepicker/master/demo2.png" alt="demo"/>

## FAQs

-  How to change the date format?

    You can pass the function which will be called before displaying the date in the input field. 
    Example 

    > <ng-datetimepicker [customDate]="getDate"></ng-datetimepicker>

    `getDate`function receives the `date` object, and you can manipulate it in anyway you want.

    > getDate(date:any){
    >    return date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate();
    > }

    It is optional to pass the custom date function. If you do not pass the custom date function, then the "toString()" value of the date object is used in the input field. 

- How to edit the stylesheet of the datetimepicker?

    You can override the classes in the datepicker in your `styles.css` stylesheet. The parent class of the datetimepicker is `ng-datepicker`.
    Example in `styles.css`
    
    > .ng-datetimepicker .header{
    >    color:red;
    > }
    
- What are the dependencies?

  There are no other dependencies in this datetimepicker. It does not depend on moment.js or such. Instead it provides callback function(see first question), so that you can include any other datetime library you want in order to manipulate the date in input field. 
  
  Also the styling is completely customizable. So if you want to style the input field or the datepicker modal according to your theme, you can easily do so overriding the classes.
