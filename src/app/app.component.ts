import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Inject,
  inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
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
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'port-folio';
  isVisible = false;
  currentSection = 'home';
  sections = ['home', 'about', 'skills', 'cv'];
  isScrolling = false;

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

  router = inject(Router);
  private observer!: IntersectionObserver;

  constructor(
    private elementRef: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const path = window.location.pathname.substring(1);
      if (this.sections.includes(path)) {
        this.currentSection = path;
      }
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.setupIntersectionObserver();

      // Initial scroll to current section if URL has a section
      if (this.currentSection !== 'home') {
        setTimeout(() => {
          this.scrollToSection(this.currentSection, false);
        }, 100);
      }
    }
  }

  private setupIntersectionObserver() {
    // Double check that IntersectionObserver is available
    if (typeof IntersectionObserver === 'undefined') {
      console.warn('IntersectionObserver not supported');
      return;
    }

    const options = {
      root: null,
      rootMargin: '-20% 0px -20% 0px', // Trigger when 20% of element is visible
      threshold: 0.3,
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const sectionId = entry.target.id.replace('section-', '');

        if (entry.isIntersecting) {
          // Set current section
          this.currentSection = sectionId;
          // Trigger animation
          // Loop through all sections and set visibility
          Object.keys(this.sectionStates).forEach((key) => {
            if (key === this.currentSection) {
              this.sectionStates[key as keyof typeof this.sectionStates] =
                'visible';
            } else {
              this.sectionStates[key as keyof typeof this.sectionStates] =
                'hidden';
            }
          });
        }
      });
    }, options);

    // Observe all sections after view init
    setTimeout(() => {
      const sections =
        this.elementRef.nativeElement.querySelectorAll('.section');
      sections.forEach((section: Element) => {
        this.observer.observe(section);
      });
    }, 100);
  }

  onNavigate(section: string) {
    this.currentSection = section;
    this.updateURL(section);
    this.scrollToSection(section);
  }

  private scrollToSection(section: string, smooth: boolean = true) {
    if (!isPlatformBrowser(this.platformId)) return;
    const element = document.getElementById(`section-${section}`);
    if (element) {
      this.isScrolling = true;
      element.scrollIntoView({
        behavior: smooth ? 'smooth' : 'auto',
        block: 'start',
      });
      setTimeout(() => {
        this.isScrolling = false;
      }, 1000);
    }
  }

  private updateURL(section: string) {
    if (!isPlatformBrowser(this.platformId)) return;
    window.history.pushState({}, '', `/${section}`);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (!isPlatformBrowser(this.platformId)) return;
    if (this.isScrolling) return; // Don't detect during programmatic scroll

    const scrollPosition = window.pageYOffset + 100; // Offset for header
    let currentSection = 'home';

    // Check which section is currently in view
    for (const section of this.sections) {
      const element = document.getElementById(`section-${section}`);
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + window.pageYOffset;

        if (scrollPosition >= elementTop) {
          currentSection = section;
        }
      }
    }

    // Update current section and URL if changed
    if (currentSection !== this.currentSection) {
      this.currentSection = currentSection;
      this.updateURL(currentSection);
    }
  }

  @HostListener('window:popstate', ['$event'])
  onPopState() {
    if (!isPlatformBrowser(this.platformId)) return;
    // Handle browser back/forward buttons
    const path = window.location.pathname.substring(1);
    if (this.sections.includes(path)) {
      this.currentSection = path;
      this.scrollToSection(path);
    }
  }

  ngOnDestroy() {
    // Clean up observer
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
