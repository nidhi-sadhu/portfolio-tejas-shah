import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
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
    event.stopPropagation();
    this.navigate.emit(section);
  }

  scrollToSection(section: string, event?: Event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    // Direct scroll without routing
    const element = document.getElementById(`section-${section}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState({}, '', `#section-${section}`);
    }
  }
}
