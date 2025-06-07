import { Component } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';
import { AvatarModule } from 'primeng/avatar';
import { KeyValue } from '@angular/common';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'about',
  imports: [FieldsetModule, AvatarModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  userDetails: KeyValue<string, string>[] = [
    { key: 'Email', value: 't.shah002@gmail.com' },
    { key: 'LinkedIn', value: 'linkedin.com/in/tejas-shah02' },
  ];

  socialIcons: KeyValue<string, string>[] = [
    {
      key: PrimeIcons.LINKEDIN,
      value: 'https://www.linkedin.com/in/tejas-shah02/',
    },
    { key: PrimeIcons.ENVELOPE, value: 'mailto:t.shah002@gmail.com' },
    {
      key: PrimeIcons.TWITTER,
      value: 'https://www.linkedin.com/in/tejas-shah02/',
    },
  ];

  onSocialIcon(link: string) {
    window.open(link, '_blank');
  }
}
