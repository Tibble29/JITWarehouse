import { Component } from '@angular/core';
import { DarkModeService } from '../services/dark-mode.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor(private darkModeService: DarkModeService) {}

  sections: any = {
    masterFiles: true,
    deliveries: true,
    garage: true
  };

  showSubMenu: boolean = false;

  toggleSection(section: string) {
    this.sections[section] = !this.sections[section];
  }

  isDarkModeEnabled(): boolean {
    return this.darkModeService.isDarkModeEnabled();
  }



  toggleSubMenu(): void {
    this.showSubMenu = !this.showSubMenu;

  }
}


