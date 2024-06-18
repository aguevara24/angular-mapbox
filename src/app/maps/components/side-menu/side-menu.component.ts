import { Component } from '@angular/core';

interface MenuItem {
  route: string;
  title: string;
}

@Component({
  selector: 'maps-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  public menuItems: MenuItem[] = [
    { route: '/maps/fullscreen', title: 'FullScreen' },
    { route: '/maps/zoom-range', title: 'Zoom-Range' },
    { route: '/maps/markers', title: 'Markers' },
    { route: '/maps/properties', title: 'Houses' },

  ];


}
