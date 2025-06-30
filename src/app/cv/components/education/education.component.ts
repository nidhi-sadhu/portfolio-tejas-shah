import { Component } from '@angular/core';
import { PrimeIcons } from 'primeng/api';
import { EducationEvent } from '../../../app.interface';

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
  standalone: true,
})
export class EducationComponent {
  educationEvents: EducationEvent[] = [
    {
      title:
        'Doctor of Philosophy (Ph.D.), Computational and Organic Chemistry',
      schoolName: 'The University of Texas at Dallas',
      year: 'Aug 2019 - Jul 2025',
      advisor: 'Dr. Mihaela C. Stefan, Co-advisor: Dr. Hedieh Torabifard',
      researchInterest: 'test',
      icon: PrimeIcons.LINKEDIN,
      degreeLevel: 'Ph.D.',
      status: 'Expected',
    },
    {
      title: 'Master of Science (M.Sc.), Organic Chemistry',
      schoolName: 'Gujarat University, INDIA',
      year: 'Jul 2014 - May 2016',
      advisor: 'test',
      researchInterest: 'test',
      icon: PrimeIcons.LINKEDIN,
      degreeLevel: 'M.Sc.',
      status: 'Completed',
    },
    {
      title: 'Bachelor of Science (B.Sc.), Chemistry',
      schoolName: 'Gujarat University, INDIA',
      advisor: 'test',
      researchInterest: 'test',
      year: 'Aug 2011 - May 2014',
      icon: PrimeIcons.LINKEDIN,
      degreeLevel: 'B.Sc.',
      status: 'Completed',
    },
  ];

  getDegreeIcon(degreeLevel: string): string {
    switch (degreeLevel) {
      case 'Ph.D.':
        return 'fas fa-graduation-cap';
      case 'M.Sc.':
        return 'fas fa-atom';
      case 'B.Sc.':
        return 'fas fa-vial';
      default:
        return 'fas fa-school';
    }
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Expected':
        return 'status-expected';
      case 'Completed':
        return 'status-completed';
      default:
        return 'status-completed';
    }
  }
}
