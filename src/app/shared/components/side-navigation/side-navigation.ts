import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-side-navigation',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-navigation.html',
  styleUrl: './side-navigation.scss'
})
export class SideNavigation {

}
