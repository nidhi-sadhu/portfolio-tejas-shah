import { Component } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skillEvents = [
    {
      title: 'Computational:',
      icon: PrimeIcons.FILTER_SLASH,
      skills: [
        {
          skillType: 'Molecular Dynamics Simulations:',
          skillValues: 'AMBER, CPPTRAJ, tLeap, Antechamber, Packmol, VMD',
        },
        {
          skillType: 'Force Field Development:',
          skillValues: 'Gaussian16, PyRED',
        },
        {
          skillType: 'Homology Modeling:',
          skillValues: 'Swiss Modeller, PyMOL',
        },
        {
          skillType: 'Programming Languages and Packages:',
          skillValues: `Bash, Python NumPy, Panda, Matplotlib, Seaborn, SciPy,
SciKit learn, GNUPLOT, MDTraj, MDAnalysis, knowledge of PyTorch, TensorFlow packages`,
        },
      ],
    },
    {
      title: 'Characterization Techniques:',
      skills: [
        {
          skillType: 'Advance Materials Characterization:',
          skillValues: 'DSC, TGA, and DLS',
        },
        {
          skillType: 'Spectroscopic Techniques:',
          skillValues:
            'NMR, UV-Vis, FT-IT, ATR-IR, MS, and Fluorescence Spectroscopy',
        },
        {
          skillType: 'Chromatography Techniques:',
          skillValues: 'Column chromatography, HPLC, GC and SEC',
        },
        {
          skillType: 'Microscopy Techniques:',
          skillValues: `TEM, SEM, CLSM, Optical Microscopy`,
        },
      ],
      icon: PrimeIcons.FILTER_SLASH,
    },
  ];

  getCategoryClass(title: string): string {
    if (title.toLowerCase().includes('computational')) {
      return 'computational';
    }
    if (title.toLowerCase().includes('characterization')) {
      return 'characterization';
    }
    return '';
  }

  getCategoryIcon(title: string): string {
    if (title.toLowerCase().includes('computational')) {
      return 'fas fa-laptop-code';
    }
    if (title.toLowerCase().includes('characterization')) {
      return 'fas fa-microscope';
    }
    return 'fas fa-cog';
  }

  getSkillTypeIcon(skillType: string): string {
    const iconMap: { [key: string]: string } = {
      'molecular dynamics simulations': 'fas fa-atom',
      'force field development': 'fas fa-calculator',
      'homology modeling': 'fas fa-project-diagram',
      'programming languages and packages': 'fas fa-code',
      'advance materials characterization': 'fas fa-chart-line',
      'advanced materials characterization': 'fas fa-chart-line',
      'spectroscopic techniques': 'fas fa-wave-square',
      'chromatography techniques': 'fas fa-filter',
      'microscopy techniques': 'fas fa-search',
    };

    const cleanSkillType = skillType.toLowerCase().replace(':', '').trim();
    return iconMap[cleanSkillType] || 'fas fa-cog';
  }

  getSkillArray(skillValues: string): string[] {
    return skillValues.split(',').map((skill) => skill.trim());
  }
}
