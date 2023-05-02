import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './../../services/login/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });
  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  async login() {
    if (this.loginForm.valid) {
      const data = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      };
      try {
        const resp = await this.loginService.login(data);
        console.log(resp);
        if (resp.message === 'Login realizado com sucesso.')
          this.router.navigate(['/home'])
      } catch (error) {
        console.error(error);
      }
    }
  }



}
