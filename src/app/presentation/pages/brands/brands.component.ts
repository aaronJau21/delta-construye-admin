import { Component, inject, OnInit, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

import { TitleComponent } from '../../shared/components/ui/title/title.component';
import { BrandsService } from '../../../application/services/brands/brands.service';
import { LoadingComponent } from '../../shared/components/ui/loading/loading.component';
import { CreatBrandComponent } from './components/creat-brand/creat-brand.component';

@Component({
  selector: 'app-brands',
  imports: [TitleComponent, LoadingComponent, CreatBrandComponent],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css',
  host: {
    class: 'flex-1',
  },
})
export default class BrandsComponent {
  private readonly brandService = inject(BrandsService);
  private pages = signal<number>(1);
  public showFormCreate = signal<boolean>(false);

  // Show Modal
  public showModal() {
    this.showFormCreate.update((value) => !value);
  }

  // Pages and get brans
  public nextPage() {
    this.pages.update((page) => page + 1);
  }

  public previousPage() {
    this.pages.update((page) => page - 1);
  }

  getBrands = rxResource({
    request: () => ({ page: this.pages() }),
    loader: ({ request }) => this.brandService.getBrands(request.page),
  });
}
