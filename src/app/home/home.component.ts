import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ButtonModule } from 'primeng/button';
import { scrollAnimations } from '../shared/animations';
import { isPlatformBrowser } from '@angular/common';
import { AboutComponent } from '../about/about.component';
import { CvComponent } from '../cv/cv.component';
import { HeaderComponent } from '../header/header.component';
import { PublicationComponent } from '../publication/publication.component';

@Component({
  selector: 'home',
  imports: [
    MatButtonModule,
    ButtonModule,
    AboutComponent,
    CvComponent,
    HeaderComponent,
    PublicationComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: scrollAnimations,
  standalone: true,
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  isContentVisible: boolean = false;

  // Animation states for each section
  sectionStates: {
    home: string;
    about: string;
    publications: string;
    cv: string;
  } = {
    home: 'hidden',
    about: 'hidden',
    publications: 'hidden',
    cv: 'hidden',
  };
  isVisible: boolean = false;
  currentSection: string = 'home';
  sections: string[] = ['home', 'about', 'publications', 'cv'];
  isScrolling = false;

  private observer!: IntersectionObserver;

  private scrollTimeout?: number;

  constructor(
    private elementRef: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    setTimeout(() => {
      this.isContentVisible = true;
    }, 100);
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
          Object.keys(this.sectionStates).forEach((key: string) => {
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

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (!isPlatformBrowser(this.platformId)) return;
    if (this.isScrolling) return; // Don't detect during programmatic scroll

    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }

    this.scrollTimeout = setTimeout(() => {
      const scrollPosition = window.pageYOffset + 100;
      let currentSection = 'home';
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
      if (currentSection !== this.currentSection) {
        this.currentSection = currentSection;
      }
    }, 5) as unknown as number;
  }

  @HostListener('window:popstate', ['$event'])
  onPopState() {
    if (!isPlatformBrowser(this.platformId)) return;
    // Handle browser back/forward buttons
    const path = window.location.pathname.substring(1);
    console.log(window.location.pathname);
    if (this.sections.includes(path)) {
      this.currentSection = path;
      this.scrollToSection(path);
    }
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }

    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
  }

  downloadCV() {
    if (!isPlatformBrowser(this.platformId)) return;
    const link = document.createElement('a');
    link.href = 'assets/files/Tejas_CV.pdf';
    link.download = 'Tejas_Shah_CV.pdf';
    link.click();
  }

  onNavigate(section: string) {
    this.currentSection = section;
    if (isPlatformBrowser(this.platformId)) {
      window.history.pushState({}, '', `${section}`);
      const element = document.getElementById(`section-${section}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
      }
    }
  }
}
