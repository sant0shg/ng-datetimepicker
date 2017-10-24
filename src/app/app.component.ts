import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  getDate(date:any){
    
    // var d = new Date(date);
    return date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate();
  }
}
