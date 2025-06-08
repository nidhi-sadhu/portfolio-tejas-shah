import { Component, signal } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { FieldsetModule } from 'primeng/fieldset';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { EducationComponent } from './components/education/education.component';
import { AwardsComponent } from './components/awards/awards.component';
import { PublicationComponent } from './components/publication/publication.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { CvPaths } from './cv.constants';
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'cv',
  imports: [
    FieldsetModule,
    AvatarModule,
    CardModule,
    ButtonModule,
    AvatarModule,
    EducationComponent,
    AwardsComponent,
    ExperienceComponent,
    PresentationComponent,
    PublicationComponent,
    StepsModule,
    ToastModule,
  ],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss',
  standalone: true,
})
export class CvComponent {
  protected readonly CvPaths = CvPaths;
  currentPath = signal<string>('/education');
  activeIndex = signal<number>(0);

  items: MenuItem[] = [
    {
      label: 'Education',
      command: () => this.setCurrentPath(CvPaths.Education),
    },
    {
      label: 'Experience',
      command: () => this.setCurrentPath(CvPaths.Experience),
    },
    {
      label: 'Awards',
      command: () => this.setCurrentPath(CvPaths.Award),
    },
    {
      label: 'Publications',
      command: () => this.setCurrentPath(CvPaths.Publication),
    },
    {
      label: 'Presentation',
      command: () => this.setCurrentPath(CvPaths.Presentation),
    },
  ];

  constructor() {
    this.currentPath.set('/education');
  }

  setCurrentPath(currentPath: string) {
    this.currentPath.set(currentPath);
  }

  onActiveIndexChange(event: number) {
    this.activeIndex.set(event);
  }
}
