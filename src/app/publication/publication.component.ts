import { Component } from '@angular/core';
import { TableListComponent } from '../cv/shared/components/table-list/table-list.component';
import { EventItem } from '../app.interface';

@Component({
  selector: 'app-publication',
  imports: [TableListComponent],
  templateUrl: './publication.component.html',
  styleUrl: './publication.component.scss',
  standalone: true,
})
export class PublicationComponent {
  publicationEvents: EventItem[] = [
//     {
//       title: `<b>Shah, T.</b>, Torabifard, H., Investigating trans-histone pathway of H3K36 methylation by histone-Nmethyltransferase
// from Molecular Dynamics Simulations. (Under Preparation)`,
//       year: '-',
//       link: '',
//     },
    {
      title: `Polara, H., <b>Shah, T.</b>, Babanyinah, G., Wang, H., Bhadran, A., Biewer, M. C., Torabifard, H., Stefan,
M. C., Effect of amide disubstituted caprolactones hydrophobic functional groups on doxorubicin loading
capacity and its release. Biomacromolecules, 2025.`,
      year: '2025',
      link: '',
    },
    {
      title: `Babanyinah, G., Bhadran, A., Polara, H., <b>Shah, T.</b>, Biewer, M. C., Stefan, M. C., Fluorescent Poly(εCaprolactone)s Micelles for Anticancer Drug Delivery and Bioimaging, <i>Biomacromolecules</i>, 2025, 26,
      3213–3223.`,
      year: '2025',
      link: '',
    },
    {
      title: `<b>Shah, T.</b>,† Polara, H.,† Bhadran, A., Babanyinah, G., Wang, H., Gerik, G., Biewer, M. C., Torabifard, H.,
Stefan, M. C., Computational Design to Experimental Validation: Molecular Dynamics-assisted Development
of Polycaprolactone Micelles for Drug Delivery. Journal of Materials Chemistry B, 2025. (Accepted, †equally
contributed)`,
      year: '2025',
      link: 'https://pubs.rsc.org/en/content/articlelanding/2025/tb/d4tb02789b/unauth',
    },
    {
      title: `Goldman, A., <b>Shah, T.</b>, Torabifard, H., Histone H3 orchestrates the ubiquitination of nucleosomal H2A
by BRCA1/BARD1-UbcH5c complex, BioRxiv, 2024.`,
      year: '2024',
      link: 'https://www.biorxiv.org/content/10.1101/2024.04.09.588726v1.abstract',
    },
    {
      title: `<b>Shah, T.</b>, Stefan, M. C., Torabifard, H., Dynamics of amphiphilic poly(ε-caprolactone) micelles with
doxorubicin and transition temperature predictions using all-atom molecular dynamics simulation, Journal
of Physical Chemistry B, 2024, 128, 11981–11991.`,
      year: '2024',
      link: 'https://pubs.rsc.org/en/content/articlehtml/2024/sc/d4sc01625d',
    },
    {
      title: `Abbas, M., Murtaza, D., Joy, M., Sheybani, S., <b>Shah, T.</b>, Balkus, K., Synthesis and Characterization of
Two New Holmium Metal-Organic Frameworks, CrystEngComm, 2024. 26, 5567-5573`,
      year: '2024',
      link: 'https://pubs.rsc.org/en/content/articlelanding/2024/ce/d4ce00592a/unauth',
    },
    {
      title: `Babanyinah, G., Bhadran, A., Wang, H., Polara, H., <b>Shah, T.</b>, Biewer, M., Stefan, M., Maleimide functionalized
polycaprolactone micelles for glutathione quenching and doxorubicin delivery, Chemical Science,
2024,, 15, 9987-10001. (Featured on Journal Cover)`,
      year: '2024',
      link: 'https://pubs.rsc.org/en/content/articlehtml/2024/sc/d4sc01625d',
    },
    {
      title: `Wang, H., Polara, H., Bhadran, A., <b>Shah, T.</b>, Babanyinah, G., Ma, Z., Miller, J., Biewer, M., Stefan,
M., Effect of aromatic substituents on thermoresponsive functional polycaprolactone micellar carriers for
doxorubicin delivery, Frontiers in Pharmacology, 2024, 15, 1356639.`,
      year: '2024',
      link: 'https://www.frontiersin.org/journals/pharmacology/articles/10.3389/fphar.2024.1356639/full',
    },
    {
      title: `Bhadran, A., Polara, H., Calubaquib, E., Wang, H., Babniyinah, G., <b>Shah, T.</b>, Anderson, P., Saleh,
M. Biewer, M., Stefan, M., Reversible cross-linked thermoresponsive polycaprolactone micelles for enhanced
stability and controlled release, Biomacromolecules, 2023, 24, 12, 5823-5835.`,
      year: '2023',
      link: 'https://pubs.acs.org/doi/abs/10.1021/acs.biomac.3c00832',
    },
    {
      title: `Mistry, H., Thakor, R., Polara, H., <b>Shah, T.</b>, Bariya, H., Biogenically efficient production and characterization
of silver nanoparticles using the marine fungus Hamigera Terricola along with their antimicrobial
and antioxidative efficacy. Nanotechnology and In Silico Tools, 2024, 89–96.`,
      year: '2024',
      link: 'https://www.sciencedirect.com/science/article/abs/pii/B9780443154577000022',
    },
    {
      title: `Bhadran, A., Polara, H., <b>Shah, T.</b>, Babanyinah, K, G., Taslimy, S., Biewer, M, C., Stefan, M, C.,
Functional polycaprolactones for drug delivery applications, Pharmaceutics, 2023, 15, 7, 1977. (Invited
Perspective)`,
      year: '2023',
      link: 'https://www.mdpi.com/1999-4923/15/7/1977',
    },
    {
      title: `Stefan, M. C., Soltantabar, P., Wang, H., Bhadran, A., Polara, H., <b>Shah, T.</b>, Organ Chips in Safety
Pharmacology Springer Nature, Accepted December 2022. (Corresponding Author, Invited Book Chapter)`,
      year: '2022',
      link: 'https://link.springer.com/referenceworkentry/10.1007/978-3-031-35529-5_79',
    },
    {
      title: `<b>Shah, T.</b>, Vasava, D. V., A glimpse of biodegradable polymers and their biomedical applications. e-
Polymers, 2019, 19, 1, 385-410.`,
      year: '2019',
      link: 'https://www.degruyter.com/document/doi/10.1515/epoly-2019-0041/html',
    },
  ];

  openPublication(link: string) {
    console.log(link);
    // if(!isNil())
    window.open(link, '_blank');
  }
}
