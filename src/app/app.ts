import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/components/header/header';
import { SideNavigation } from './shared/components/side-navigation/side-navigation';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, SideNavigation],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('anything');
}
