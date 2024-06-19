import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { MiniMapComponent } from './components/mini-map/mini-map.component';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { ZoomRangePageComponent } from './pages/zoom-range-page/zoom-range-page.component';

import mapboxgl from 'mapbox-gl';
import { CounterAloneComponent } from "../alone/components/counter-alone/counter-alone.component";
import { SideMenuComponent } from "../alone/components/side-menu/side-menu.component";

mapboxgl.accessToken = "pk.eyJ1IjoiYWd1ZXZhcmEyNCIsImEiOiJjbGszYjBsNHQwNWMzM2NwODBhNTA1eHI0In0.1mAfR5NlIf5asYekx35ijA";
@NgModule({
  declarations: [
    MiniMapComponent,
    MapsLayoutComponent,
    FullScreenPageComponent,
    MarkersPageComponent,
    PropertiesPageComponent,
    ZoomRangePageComponent
  ],
  imports: [
    CommonModule,
    MapsRoutingModule,
    CounterAloneComponent,
    SideMenuComponent
  ]
})
export class MapsModule { }
