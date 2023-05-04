import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'menu-angular-project';
  loadedSection = 'recipe';
  onNavigate(arg: string) {
    this.loadedSection = arg;
  }
}
