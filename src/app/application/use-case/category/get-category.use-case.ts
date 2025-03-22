import { inject, Injectable } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { CategoryService } from '../../services/categories/category.service';

@Injectable()
export class GetCategoriesUseCase {
  private readonly categoryService = inject(CategoryService);

  public getCategiries = rxResource({
    loader: () => this.categoryService.getCategories(),
  });
}
