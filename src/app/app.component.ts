import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { scrollAnimations } from './shared/animations';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: scrollAnimations,
  standalone: true,
})
export class AppComponent implements OnInit {
  currentSection = 'home';
  sections: string[] = ['home', 'about', 'skills', 'cv'];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const path = window.location.pathname.substring(1);
      if (this.sections.includes(path)) {
        this.currentSection = path;
      }
    }
  }

  onNavigate(section: string) {
    console.log('App navigation called:', section);
    this.currentSection = section;
    if (isPlatformBrowser(this.platformId)) {
      // Don't dispatch custom event, just update URL
      window.history.pushState({}, '', `#section-${section}`);

      // Direct scroll
      const element = document.getElementById(`section-${section}`);
      console.log('Element found, scrolling to:', element);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        console.log('Element NOT found for section:', section);
      }
    }
  }
}
