import { inject, Injectable } from '@angular/core';
import { BrandsService } from '../../services/brands/brands.service';
import { CreateBrandDto } from '../../../core';

@Injectable()
export class CreateBrandUseCase {
  private readonly brandsService = inject(BrandsService);

  public createBrand(data: CreateBrandDto, onClose: any) {
    return this.brandsService.createBrand(data).subscribe({
      next: (res) => {
        onClose();
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
