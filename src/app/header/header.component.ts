import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DarkModeService } from '../services/dark-mode.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  constructor(private darkModeService: DarkModeService, private route: Router) {}
theme: string = 'Light';
isDropdownOpen = false;


ngOnInit() {
  const isDarkMode = this.darkModeService.isDarkModeEnabled();
  this.theme = isDarkMode ? 'Light' : 'Dark';
}

@HostListener('document:click', ['$event'])
onClick(event: MouseEvent) {
  const targetElement = event.target as HTMLElement;
  if (!targetElement.closest('.user-dropdown')) {
    this.isDropdownOpen = false;
  }
}

toggleDropdown() {
  this.isDropdownOpen = !this.isDropdownOpen;
}

logout() {
  this.route.navigateByUrl('/login')
}

  isDarkModeEnabled(): boolean {
    return this.darkModeService.isDarkModeEnabled();
  }
  
  toggleDarkMode(): void {
    this.darkModeService.toggleDarkMode();
    const isDarkMode = this.darkModeService.isDarkModeEnabled();
    this.theme = isDarkMode ? 'Light' : 'Dark';

  }
}
