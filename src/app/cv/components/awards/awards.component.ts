import { Component } from '@angular/core';
import { TableListComponent } from '../../shared/components/table-list/table-list.component';
import { EventItem } from '../../../app.interface';

@Component({
  selector: 'app-awards',
  imports: [TableListComponent],
  templateUrl: './awards.component.html',
  styleUrl: './awards.component.scss',
  standalone: true,
})
export class AwardsComponent {
  awardEvents: EventItem[] = [
    {
      title:
        'PROM Fellow, National Academy of Academic Exchange (NAWA), Poland',
      year: '2025',
    },
    {
      title:
        'Finalist, NVIDIA GPU Poster Award - American Chemical Society National Meeting Fall 2024',
      year: '2024',
    },
    {
      title: 'Research and Travel Grant Award - Royal Society of Chemistry',
      year: '2023',
    },
    {
      title: 'School of Natural Science and Mathematics Travel Award – UTD',
      year: '2023',
    },
    {
      title:
        'Graduate Research and Cancer Research Fellowship – Office of Research and Innovation, UTD',
      year: '2023',
    },
    {
      title:
        'Awarded third prize for oral presentations 55th meeting in miniature – ACS DFW section',
      year: '2023',
    },
    {
      title:
        'Betty and Gifford Johnson Travel Grant Award – Office of Graduate Education, UTD',
      year: '2023',
    },
    {
      title:
        'Orator 2020 award on departmental seminar talk – Department of Chemistry, UTD',
      year: '2020',
    },
    {
      title:
        'Financial support to apply for admission for PhD in chemistry at USA – Dr. Rohitkumar Vora',
      year: '2019',
    },
    {
      title:
        'Gold Medal for highest marks among all the students – Bhavan’s Sheth R. A. College of Science',
      year: '2016',
    },
    {
      title:
        'Awarded second prize for the presentation at the Science Excellence Symposium',
      year: '2015',
    },
    {
      title:
        'Monetary support for graduate education – Shree Modasa Ekda Dasha Khadayta Kelvani Mandal',
      year: '2014',
    },
    {
      title:
        'Scholarship for Undergraduate Education – Shree Modasa Ekda Dasha Khadayta Kelvani Mandal',
      year: '2012',
    },
  ];
}
