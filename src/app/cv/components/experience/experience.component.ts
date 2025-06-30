import { Component } from '@angular/core';
import { ExperienceEvent } from '../../../app.interface';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
  standalone: true,
})
export class ExperienceComponent {
  experienceEvents: ExperienceEvent[] = [
    {
      title: 'Graduate Assistant (Teaching/Research Assistant)',
      type: 'assistant',
      location: 'The University of Texas at Dallas',
      year: 'Aug 2019 - Present',
      // description:
      //   'Optimized monomer formulation, polymerization, and post-polymer modification conditions to modul',
    },
    {
      title: 'PROM Fellow',
      type: 'fellowship',
      location: 'Nicolaus Copernicus University, Torun, Poland',
      year: 'Feb 2025 - Mar 2025',
      // description:
      //   'Optimized monomer formulation, polymerization, and post-polymer modification conditions to modul, Optimized monomer formulation, polymerization, and post-polymer modification conditions to modul',
    },
    {
      title: 'Intern, R&D Materials Engineering',
      type: 'intern',
      location: 'Alcon Laboratories Ltd',
      year: 'May 2023 - Aug 2023',
      // description:
      //   'Optimized monomer formulation, polymerization, and post-polymer modification conditions to modul',
    },
    {
      title: 'Teaching Assistant',
      type: 'teaching',
      location: 'Gujarat University, India',
      year: 'Jan 2017 - Jun 2019',
      // description:
      //   'Optimized monomer formulation, polymerization, and post-polymer modification conditions to modul',
    },
    {
      title: 'Trainee, Analytical Development Laboratory',
      type: 'trainee',
      location: 'Dishman Pharmaceuticals and Chemicals Ltd, India',
      year: 'Jul 2016 - Sept 2016',
      // description:
      //   'Optimized monomer formulation, polymerization, and post-polymer modification conditions to modul',
    },
  ];

  getIconClass(type: string): string {
    const iconMap = {
      fellowship: 'fas fa-user-graduate',
      assistant: 'fas fa-chalkboard-teacher',
      intern: 'fas fa-flask',
      teaching: 'fas fa-user-tie',
      trainee: 'fas fa-microscope',
    };
    return type in iconMap
      ? iconMap[type as keyof typeof iconMap]
      : 'fas fa-briefcase';
  }
}
