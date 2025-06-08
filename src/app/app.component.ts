import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { scrollAnimations } from './shared/animations';
import { isPlatformBrowser } from '@angular/common';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: scrollAnimations,
  standalone: true,
})
export class AppComponent implements OnInit {
  currentSection = 'home';
  sections: string[] = ['home', 'about', 'skills', 'cv'];
  isScrolling: boolean = false;

  // Animation states for each section
  sectionStates: {
    home: string;
    about: string;
    skills: string;
    cv: string;
  } = {
    home: 'hidden',
    about: 'hidden',
    skills: 'hidden',
    cv: 'hidden',
  };

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
    this.currentSection = section;
    if (isPlatformBrowser(this.platformId)) {
      window.dispatchEvent(
        new CustomEvent('navigate-to-section', {
          detail: { section },
        })
      );
    }
  }
}
