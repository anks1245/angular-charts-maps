import { Component, NgZone, ViewChild } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { Tab3Component } from './tabs/tab-3/tab-3.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular-Highcharts';
  isDarkMode: boolean = false
  @ViewChild(Tab3Component) tab3!: Tab3Component;
  constructor(public themeService: ThemeService, private zone: NgZone){
    this.themeService.theme$.subscribe(theme => {
      this.isDarkMode = theme == 'dark'
    });
  }

  onTabChange(event: any) {
    if (event.index === 2) { // 3rd tab (Map)
      this.tab3.loadMap()
      // setTimeout(() => {
      //   this.tab3.forceResize();
      // }, 300); // wait for PrimeNG tab animation + DOM update

    } else {
      this.tab3.destroyMap()
    }
  }
}
