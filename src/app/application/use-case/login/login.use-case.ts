import { inject, Injectable } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { LoginDto } from '../../../core';

@Injectable()
export class LoginUseCase {
  private readonly loginService = inject(LoginService);

  public loginSubmit(data: LoginDto) {
    this.loginService.login(data).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
