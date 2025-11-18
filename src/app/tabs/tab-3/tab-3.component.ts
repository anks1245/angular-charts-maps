import { Component, ElementRef, inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-tab-3',
  templateUrl: './tab-3.component.html',
  styleUrl: './tab-3.component.scss'
})
export class Tab3Component {
  @ViewChild('mapContainer', { static: true }) mapContainer!: ElementRef;
  map: any;
  private platformId = inject(PLATFORM_ID);
  mapStyle = 'mapbox://styles/mapbox/light-v11'
  isMapReady = false;

  constructor(private themeService: ThemeService) {
    themeService.theme$.subscribe(theme => {
      this.mapStyle = theme == 'light' ? 'mapbox://styles/mapbox/light-v11' : 'mapbox://styles/mapbox/dark-v11'
      if (this.map && this.isMapReady) {
        if (theme == 'light') {
          this.map.setStyle('mapbox://styles/mapbox/light-v11')
        } else {
          this.map.setStyle('mapbox://styles/mapbox/dark-v11')
        }
        this.map.on('styledata', () => {
          if (this.isMapReady) {
            this.loadCountries();
          }
        });
      }

    })
  }

  async loadMap() {
    console.log("loading map");

    if (this.map) return; // prevent double initialization

    if (isPlatformBrowser(this.platformId)) {
      const mapboxgl = (await import('mapbox-gl')).default;

      this.map = new mapboxgl.Map({
        accessToken: 'pk.eyJ1IjoiYW5rczEyNDUiLCJhIjoiY20zZnNkMTc0MHBpazJscXhwdTdna3EzeSJ9.6lX3bkKQJw2oCRdN74Ip3A',
        container: this.mapContainer.nativeElement,
        style: this.mapStyle,
        projection: 'mercator',
        zoom: 1,
        attributionControl: false
      });

      this.map.on('load', () => {
        this.isMapReady = true;
        this.addMarkers(mapboxgl)
        this.loadCountries()
      })
    }
  }

  addMarkers(mapboxgl: any) {
    const locations = [
      {
        name: 'Singapore',
        coords: [103.8198, 1.3521]
      },
      {
        name: 'India',
        coords: [77.2090, 28.6139]
      },
      {
        name: 'Denmark',
        coords: [12.5683, 55.6761]
      }
    ];

    locations.forEach(loc => {
      const el = document.createElement('div');
      el.className = 'gif-marker';

      // Create the GIF image
      const img = document.createElement('img');
      img.src = 'pin.gif';
      img.style.width = '28px';
      img.style.height = '28px';
      img.style.cursor = 'pointer';

      el.appendChild(img);

      new mapboxgl.Marker(el)
        .setLngLat(loc.coords)
        .addTo(this.map);

      const popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false,
        offset: 10
      }).setHTML('<h3 class="m-0" style="color: #000;">'+loc.name+'</h3><p class="m-0" style="color: #000;">('+loc.coords+')</p>');;

      el.addEventListener('mouseenter', () => {
        popup.setLngLat(loc.coords).addTo(this.map);
      });

      el.addEventListener('mouseleave', () => {
        popup.remove();
      });

      el.addEventListener('click', () => {
        this.map.flyTo({
          center: loc.coords,
          zoom: 5,
          essential: true
        });
      });
    });
  }


  loadCoordinates() {

  }

  loadCountries() {
    if (!this.map.getSource('India')) {
      this.map.addSource('India', {
        type: 'geojson',
        data: 'assets/geojson/india.geojson'   // or a real GeoJSON object
      });
    }
    if (!this.map.getLayer('india-fill')) {
      this.map.addLayer({
        id: 'india-fill',
        type: 'fill',
        source: 'India',
        paint: {
          'fill-color': '#0080ff',
          'fill-opacity': 0.4
        }
      });
    }
    if (!this.map.getSource('Denmark')) {
      this.map.addSource('Denmark', {
        type: 'geojson',
        data: 'assets/geojson/denmark.geojson'   // or a real GeoJSON object
      });
    }
    if (!this.map.getLayer('denmark-fill')) {
      this.map.addLayer({
        id: 'denmark-fill',
        type: 'fill',
        source: 'Denmark',
        paint: {
          'fill-color': '#ff0000',
          'fill-opacity': 0.4
        }
      });
    }
    if (!this.map.getSource('Singapore')) {
      this.map.addSource('Singapore', {
        type: 'geojson',
        data: 'assets/geojson/singapore.geojson'   // or a real GeoJSON object
      });
    }
    if (!this.map.getLayer('singapore-fill')) {
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
