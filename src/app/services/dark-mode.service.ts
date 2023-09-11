import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  private readonly storageKey = 'darkMode';

  constructor() {
    this.initializeDarkMode();
  }

  isDarkModeEnabled(): boolean {
    return localStorage.getItem(this.storageKey) === 'true';
  }

  toggleDarkMode(): void {
    const darkModeEnabled = this.isDarkModeEnabled();
    localStorage.setItem(this.storageKey, String(!darkModeEnabled));
    this.applyDarkMode();
  }

  private initializeDarkMode(): void {
    if (this.isDarkModeEnabled()) {
      this.applyDarkMode();
    }
  }

  private applyDarkMode(): void {
    if (this.isDarkModeEnabled()) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }
}
