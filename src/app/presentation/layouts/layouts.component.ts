import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideNavComponent } from '../shared/components';

@Component({
  selector: 'app-layouts',
  imports: [RouterOutlet, SideNavComponent],
  templateUrl: './layouts.component.html',
  styleUrl: './layouts.component.css',
})
export class LayoutsComponent {}
