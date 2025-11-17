import { Injectable } from '@angular/core';
import * as Highcharts from 'highcharts';
import { BehaviorSubject } from 'rxjs';
import { darkTheme, lightTheme } from '../shared/highchart-theme'; 

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme = new BehaviorSubject<'light' | 'dark'>('light');
  theme$ = this.currentTheme.asObservable();

  private themeLinks = {
    light: 'assets/themes/viva-light/theme.css',
    dark: 'assets/themes/viva-dark/theme.css',
  };
  
  constructor() {
    const saved = localStorage.getItem('app-theme') as 'light' | 'dark' | null;
    this.setTheme(saved || 'light');
  }

  toggleTheme(): void {
    const newTheme = this.currentTheme.value === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  setTheme(theme: 'light' | 'dark'): void {
    localStorage.setItem('app-theme', theme);
    this.currentTheme.next(theme);
    this.applyPrimeNgTheme(theme);
    Highcharts.setOptions(theme === 'dark' ? darkTheme : lightTheme);
  }

  private applyPrimeNgTheme(theme: 'light' | 'dark') {
    let themeLink = document.getElementById('app-theme') as HTMLLinkElement;

    if (!themeLink) {
      themeLink = document.createElement('link');
      themeLink.rel = 'stylesheet';
      themeLink.id = 'app-theme';
      document.head.appendChild(themeLink);
    }

    themeLink.href = this.themeLinks[theme];
  }

  getTheme(){
    return localStorage.getItem('app-theme') as 'light' | 'dark' || 'light';
  }

}
