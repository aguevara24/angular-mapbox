import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

interface MenuItem {
  route: string;
  title: string;
}

@Component({
  standalone: true,
  selector: 'side-menu',
  imports: [ CommonModule, RouterModule ],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  public menuItems: MenuItem[] = [
    { route: '/maps/fullscreen', title: 'FullScreen' },
    { route: '/maps/zoom-range', title: 'Zoom-Range' },
    { route: '/maps/markers', title: 'Markers' },
    { route: '/maps/properties', title: 'Houses' },
    { route: '/alone', title: 'Alone Page'}
  ];


}
