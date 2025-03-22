import { Component, EventEmitter, inject, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CreateBrandUseCase } from '../../../../../application/use-case/brands/create-brand.use-case';

@Component({
  selector: 'product-creat-brand',
  imports: [ReactiveFormsModule],
  templateUrl: './creat-brand.component.html',
  styleUrl: './creat-brand.component.css',
  host: {
    class: 'absolute top-0 ',
  },
  providers: [CreateBrandUseCase],
})
export class CreatBrandComponent {
  private readonly fb = inject(FormBuilder);
  private readonly CreateBrandUseCase = inject(CreateBrandUseCase);

  // Envio de datos al padre
  @Output() close = new EventEmitter<void>();
  onClose() {
    this.close.emit();
  }

  // Reactive Form
  public formCreateBrand: FormGroup = this.fb.group({
    name: ['', Validators.required],
  });

  public submitCreateBrand() {
    return this.CreateBrandUseCase.createBrand(
      this.formCreateBrand.value,
      this.onClose()
    );
  }
}
