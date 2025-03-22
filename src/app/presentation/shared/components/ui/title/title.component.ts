import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-title',
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css',
})
export class TitleComponent {
  @Input() title: string = '';
}
