import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

export const scrollAnimations = [
  // Slide in from bottom
  trigger('slideInUp', [
    state(
      'hidden',
      style({
        opacity: 0,
        transform: 'translateY(50px)',
      })
    ),
    state(
      'visible',
      style({
        opacity: 1,
        transform: 'translateY(0)',
      })
    ),
    transition('hidden => visible', [animate('0.6s ease-out')]),
  ]),

  // Fade in
  trigger('fadeIn', [
    state(
      'hidden',
      style({
        opacity: 0,
      })
    ),
    state(
      'visible',
      style({
        opacity: 1,
      })
    ),
    transition('hidden => visible', [animate('0.8s ease-in-out')]),
  ]),

  // Slide in from left
  trigger('slideInLeft', [
    state(
      'hidden',
      style({
        opacity: 0,
        transform: 'translateX(-50px)',
      })
    ),
    state(
      'visible',
      style({
        opacity: 1,
        transform: 'translateX(0)',
      })
    ),
    transition('hidden => visible', [animate('800ms ease-out')]),
  ]),

  // Slide in from right
  trigger('slideInRight', [
    state(
      'hidden',
      style({
        opacity: 0,
        transform: 'translateX(50px)',
      })
    ),
    state(
      'visible',
      style({
        opacity: 1,
        transform: 'translateX(0)',
      })
    ),
    transition('hidden => visible', [animate('0.7s ease-out')]),
  ]),

  // Scale animation
  trigger('scaleIn', [
    state(
      'hidden',
      style({
        opacity: 0,
        transform: 'scale(0.8)',
      })
    ),
    state(
      'visible',
      style({
        opacity: 1,
        transform: 'scale(1)',
      })
    ),
    transition('hidden => visible', [animate('0.5s ease-out')]),
  ]),
];
