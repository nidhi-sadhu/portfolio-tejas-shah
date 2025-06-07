import { Component, input, InputSignal } from '@angular/core';
import { EventItem } from '../../../../app.interface';

@Component({
  selector: 'app-table-list',
  imports: [],
  standalone: true,
  templateUrl: './table-list.component.html',
  styleUrl: './table-list.component.scss',
})
export class TableListComponent {
  events: InputSignal<EventItem[]> = input.required<EventItem[]>();

  openEventDetails(link?: string | undefined) {
    link !== null && link !== undefined ? window.open(link, '_blank') : null;
  }
}
