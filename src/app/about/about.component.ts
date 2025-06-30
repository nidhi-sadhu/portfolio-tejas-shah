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
  standalone: true,
})
export class AboutComponent {
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
    { 
      key:'fa-brands fa-google-scholar',
      value: 'https://scholar.google.com/citations?user=f5-82KUAAAAJ&hl=en'
    }
  ];

  onSocialIcon(link: string) {
    window.open(link, '_blank');
  }
}
