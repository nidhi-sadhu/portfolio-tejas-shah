import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'home',
  imports: [MatButtonModule, ButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('mainPageText', [
      state(
        'hidden',
        style({
          transform: 'translate(-50%, -100%)' /* Start far above */,
          opacity: 0,
        })
      ),
      state(
        'visible',
        style({
          transform: 'translate(-50%, -50%)' /* Move to center */,
          opacity: 1,
        })
      ),
      transition('hidden => visible', [animate('1000ms ease-out')]),
    ]),
    trigger('downloadPdfUp', [
      state(
        'hidden',
        style({
          transform: 'translate(-50%, 800%)' /* Start way below */,
          opacity: 0,
        })
      ),
      state(
        'visible',
        style({
          transform: 'translate(-50%, 450%)' /* End at Orina Pos */,
          opacity: 1,
        })
      ),
      transition('hidden => visible', [animate('800ms ease-out')]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  isContentVisible = false;
  displayText = '';
  private titles = ['COMPUTATIONAL CHEMIST', 'RESEARCHER'];
  private currentTitleIndex = 0;
  private typingSpeed = 150;
  private deletingSpeed = 50;
  private pauseTime = 1000;
  private timeoutId: any = null;
  private isDeleting = false;
  private charIndex = 0;

  ngOnInit() {
    setTimeout(() => {
      this.isContentVisible = true;
    }, 100);
    var options = {
      strings: ['', 'Full-Stack', 'WEB', 'Mobile'],
      typeSpeed: 120,
      backSpeed: 100,
      loop: true,
    };
  }

  downloadResume() {
    const link = document.createElement('a');
    link.href = 'assets/files/Tejas_Resume.pdf';
    link.download = 'Tejas_Shah_Resume.pdf';
    link.click();
  }
}
