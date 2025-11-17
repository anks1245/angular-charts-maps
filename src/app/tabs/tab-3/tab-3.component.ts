import { Component, ElementRef, inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-tab-3',
  templateUrl: './tab-3.component.html',
  styleUrl: './tab-3.component.scss'
})
export class Tab3Component {
  @ViewChild('mapContainer', { static: true }) mapContainer!: ElementRef;
  map: any;
  private platformId = inject(PLATFORM_ID);

  async loadMap() {
    console.log("loading map");
    
    if (this.map) return; // prevent double initialization

    if (isPlatformBrowser(this.platformId)) {
      const mapboxgl = (await import('mapbox-gl')).default;

      this.map = new mapboxgl.Map({
        accessToken: 'pk.eyJ1IjoiYW5rczEyNDUiLCJhIjoiY20zZnNkMTc0MHBpazJscXhwdTdna3EzeSJ9.6lX3bkKQJw2oCRdN74Ip3A',
        container: this.mapContainer.nativeElement,
        style: 'mapbox://styles/mapbox/standard-satellite',
        projection: 'mercator'
      });

      this.map.on('load',()=>{
        this.loadCountries()
      })
    }
  }

  loadCountries(){
    this.map.addSource('India', {
      type: 'geojson',
      data: 'assets/geojson/india.geojson'   // or a real GeoJSON object
    });
    this.map.addLayer({
      id: 'india-fill',
      type: 'fill',
      source: 'India',
      paint: {
        'fill-color': '#0080ff',
        'fill-opacity': 0.4
      }
    });
    this.map.addSource('Denmark', {
      type: 'geojson',
      data: 'assets/geojson/denmark.geojson'   // or a real GeoJSON object
    });
    this.map.addLayer({
      id: 'denmark-fill',
      type: 'fill',
      source: 'Denmark',
      paint: {
        'fill-color': '#ff0000',
        'fill-opacity': 0.4
      }
    });
    this.map.addSource('Singapore', {
      type: 'geojson',
      data: 'assets/geojson/singapore.geojson'   // or a real GeoJSON object
    });
    this.map.addLayer({
      id: 'singapore-fill',
      type: 'fill',
      source: 'Singapore',
      paint: {
        'fill-color': '#ffd000',
        'fill-opacity': 0.4
      }
    });
  }

  destroyMap(): void {
    if (this.map) {
      this.map.remove();
    }
  }

  public forceResize() {
    if (this.map) {
      this.map.resize();
    }
  }
}
