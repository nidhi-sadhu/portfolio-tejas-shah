import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { scrollAnimations } from './shared/animations';
import { isPlatformBrowser } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TestComponent } from '../test.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, RouterOutlet, TestComponent],
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
