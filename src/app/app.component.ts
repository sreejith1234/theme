import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'theme';
  myArr=['Dashboard','Patient','Admin']

  /*myEvent(event:any) {
    console.log(event);
  }*/
  
}
