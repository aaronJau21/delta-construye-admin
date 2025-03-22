import { inject, Injectable } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { ILoginResponse, LoginDto } from '../../../core';
import { Router } from '@angular/router';

@Injectable()
export class LoginUseCase {
  private readonly loginService = inject(LoginService);
  private readonly router = inject(Router);

  public loginSubmit(data: LoginDto) {
    this.loginService.login(data).subscribe({
      next: (res: ILoginResponse) => {
        this.loginService.saveToken(res);
        this.router.navigateByUrl('/dashboard');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
