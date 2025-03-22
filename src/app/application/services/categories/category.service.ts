import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';
import { IGetCategories } from '../../../core';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private readonly http = inject(HttpClient);
  private readonly api = environment.API_URL;

  getCategories(): Observable<IGetCategories[]> {
    return this.http.get<IGetCategories[]>(`${this.api}/sistema/cateogory`);
  }
}
