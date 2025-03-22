import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { CreateBrandDto, ICreateBrand, IGetBrands } from '../../../core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BrandsService {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly baseUrl: string = environment.API_URL;

  getBrands(page: number): Observable<IGetBrands> {
    return this.http.get<IGetBrands>(`${this.baseUrl}/brands?page=${page}`);
  }

  createBrand(data: CreateBrandDto): Observable<ICreateBrand> {
    return this.http.post<ICreateBrand>(`${this.baseUrl}/brands/create`, data);
  }
}
