import {
  Component,
  input,
  InputSignal,
  output,
  OutputEmitterRef,
} from '@angular/core';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
})
export class HeaderComponent {
  homePage: string = 'TEJAS SHAH';
  navLinks: { path: string; label: string }[] = [
    { path: 'about', label: 'ABOUT' },
    { path: 'publications', label: 'PUBLICATIONS' },
    { path: 'cv', label: 'CV' },
  ];

  isMenuOpen = false;

  currentSection: InputSignal<string> = input<string>('home');
  navigate: OutputEmitterRef<string> = output<string>();

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onNavigate(section: string, event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.navigate.emit(section);
    this.isMenuOpen = false;
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
