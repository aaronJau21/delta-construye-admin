import { Component, inject } from '@angular/core';
import { GetCategoriesUseCase } from '../../../application/use-case/category/get-category.use-case';
import { LoadingComponent } from "../../shared/components/ui/loading/loading.component";

@Component({
  selector: 'app-categories',
  imports: [LoadingComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
  providers: [GetCategoriesUseCase],
})
export default class CategoriesComponent {
  private readonly getCategoriesUseCase = inject(GetCategoriesUseCase);

  getCategories = this.getCategoriesUseCase.getCategiries;
}
