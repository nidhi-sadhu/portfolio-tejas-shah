import { Component } from '@angular/core';
import { EventItem } from '../../../app.interface';
import { TableListComponent } from '../../shared/components/table-list/table-list.component';

@Component({
  selector: 'app-presentation',
  imports: [TableListComponent],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss',
})
export class PresentationComponent {
  presentationEvents: EventItem[] = [
    {
      title: `<b>Shah, T.</b>, Torabifard, H., Investigating trans-histone pathway of H3K36 methylation by histone-Nmethyltransferase
from Molecular Dynamics Simulations. (Under Preparation).`,
      link: '',
    },
    {
      title: `<b>Shah, T.</b>, Stefan, M. C., Torabifard, H., Contributed poster at The American Chemical Society national
meeting, San Diego, CA. Mar 22-27, 2025. (Finalist NVIDIA GPU Poster Award).`,
      link: '',
    },
    {
      title: `<b>Shah, T.</b>, Torabifard, H., Contributed poster at The American Chemical Society national meeting,
Denver, CO. Aug 18-22, 2024. (Sci-Mix, Finalist NVIDIA GPU Poster Award).`,
      link: '',
    },
    {
      title: `<b>Shah, T.</b>, Polara, H., Babanyinah, G., Bhadran A., Wang, H., Biewer, M., Stefan, M. C., Contributed
poster at The American Chemical Society national meeting, Denver, CO. Aug 18-22, 2024. (Sci-Mix).`,
      link: 'https://pubs.rsc.org/en/content/articlelanding/2025/tb/d4tb02789b/unauth',
    },
    {
      title: `AMBER Free Energy Workshop, San Diego Supercomputer Center, San Diego, CA. Aug 11-16, 2024.
(Selected through a competitive application process).`,
      link: 'https://www.biorxiv.org/content/10.1101/2024.04.09.588726v1.abstract',
    },
    {
      title: `<b>Shah, T.</b>, Torabifard, H., Contributed poster at The American Chemical Society national meeting, New
Orleans, LA. Mar 16-21, 2024.`,
      link: 'https://pubs.rsc.org/en/content/articlehtml/2024/sc/d4sc01625d',
    },
    {
      title: `<b>Shah, T.</b>, Torabifard, H., Contributed Poster at ACS Southwest regional meeting, Oklahoma City, OK.
Nov 15 - 18, 2023.`,
      link: 'https://pubs.rsc.org/en/content/articlelanding/2024/ce/d4ce00592a/unauth',
    },
    {
      title: `<b>Shah, T.</b>, Stefan, M. C., Torabifard, Hedieh, Contributed lecture at Annual Meeting-in-Miniature, The
American Chemical Society, DFW section, Stephenville, TX. Apr 23, 2023. (Awarded 3rd prize in polymer
section).`,
      link: 'https://pubs.rsc.org/en/content/articlehtml/2024/sc/d4sc01625d',
    },
    {
      title: `<b>Shah, T.</b>, Stefan, M. C., Torabifard, Hedieh, at The American Chemical Society national meeting,
Indianapolis, IN. Mar 26 - 30, 2023.`,
      link: 'https://www.frontiersin.org/journals/pharmacology/articles/10.3389/fphar.2024.1356639/full',
    },
    {
      title: `<b>Shah, T.</b>, Stefan, M. C., Contributed Poster at ACS Southwest regional meeting, Baton Rouge, LA.
Nov 06 - 09, 2022.`,
      link: 'https://pubs.acs.org/doi/abs/10.1021/acs.biomac.3c00832',
    },
    {
      title: `National Workshop on Characterization Techniques for Materials, Sardar Patel University, V. V. Nagar,
INDIA. Mar 06 - 07, 2017.`,
      link: 'https://www.sciencedirect.com/science/article/abs/pii/B9780443154577000022',
    },
    {
      title: `<b>Shah, T.</b>, Vasava, D. V., Review Poster at International Science Symposium on Recent Trends in Science
& Technology, Rajkot, INDIA. Feb 26 - 27, 2017.`,
      link: 'https://www.mdpi.com/1999-4923/15/7/1977',
    },
    {
      title: `<b>Shah, T.</b>, Contributed talk at Gujarat University Science Excellence Symposium, Ahmedabad, GJ,
INDIA. Sep 26, 2015.`,
      link: 'https://link.springer.com/referenceworkentry/10.1007/978-3-031-35529-5_79',
    },
  ];

  openPublication(link: string) {
    window.open(link, '_blank');
  }
}
