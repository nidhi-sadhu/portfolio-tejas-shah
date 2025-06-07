import { Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  homePage: string = 'TEJAS SHAH';
  navLinks: { path: string; label: string }[] = [
    { path: 'about', label: 'ABOUT' },
    { path: 'skills', label: 'SKILLS' },
    { path: 'cv', label: 'CV' },
  ];

  isMenuOpen = false;

  currentSection = input<string>('home');
  navigate = output<string>();

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onNavigate(section: string, event: Event) {
    event.preventDefault();
    this.navigate.emit(section);
  }
}
