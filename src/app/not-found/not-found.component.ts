import { trigger, transition, style, animate, keyframes, state } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
  standalone: true,
  animations: [
    trigger('slideInUp', [
      transition(':enter', [
        style({ transform: 'translateY(100px)', opacity: 0 }),
        animate('600ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ]),
    trigger('bounce', [
      transition(':enter', [
        animate('1000ms ease-in-out', keyframes([
          style({ transform: 'scale(0.3)', opacity: 0, offset: 0 }),
          style({ transform: 'scale(1.05)', opacity: 0.8, offset: 0.5 }),
          style({ transform: 'scale(0.95)', opacity: 0.9, offset: 0.7 }),
          style({ transform: 'scale(1)', opacity: 1, offset: 1 })
        ]))
      ])
    ]),
    trigger('shake', [
      state('normal', style({ transform: 'translateX(0)' })),
      state('shaking', style({ transform: 'translateX(0)' })),
      transition('normal => shaking', [
        animate('500ms ease-in-out', keyframes([
          style({ transform: 'translateX(0)', offset: 0 }),
          style({ transform: 'translateX(-10px)', offset: 0.1 }),
          style({ transform: 'translateX(10px)', offset: 0.2 }),
          style({ transform: 'translateX(-10px)', offset: 0.3 }),
          style({ transform: 'translateX(10px)', offset: 0.4 }),
          style({ transform: 'translateX(-10px)', offset: 0.5 }),
          style({ transform: 'translateX(10px)', offset: 0.6 }),
          style({ transform: 'translateX(-10px)', offset: 0.7 }),
          style({ transform: 'translateX(10px)', offset: 0.8 }),
          style({ transform: 'translateX(-10px)', offset: 0.9 }),
          style({ transform: 'translateX(0)', offset: 1 })
        ]))
      ]),
      transition('shaking => normal', [
        animate('200ms ease-out', style({ transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class NotFoundComponent{
  countdown: number = 10;
  isShaking: boolean = false;
  currentMessage: string = "This page went on vacation and forgot to come back!";

  constructor(private router: Router) {}

  navigateHome(): void {
    this.router.navigate(['/']);
  }

  shakeMinion(): void {
    this.isShaking = true;
    setTimeout(() => {
      this.isShaking = false;
    }, 500);
  }

  refreshPage(): void {
    window.location.reload();
  }
}
