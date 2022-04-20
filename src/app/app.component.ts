import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Template-Driven Forms';
  loginUser(item:any)
  {
    console.warn(item);
  }
}
