import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  email: string = "";
  password: string = "";
  displayErrorMessage: boolean = false;
  errorMessage:string = "";

  constructor(private authService: AuthService) { }

  signin() {

    if (!this.validateInputs(this.email, this.password)) {
      this.displayErrorMessage = true;
      this.errorMessage = "Please Enter Valid Input";
      return;
    }
    this.displayErrorMessage = false;

    this.authService.authenticate(this.email.trim(), this.password.trim()).subscribe((res: any) => {
      console.log(res);
      
    },
      (error: Error) => {
        this.displayErrorMessage = true;
        this.errorMessage = "Please Enter Valid Email or Password";
      }
    )
  }


  validateInputs(email: string, password: string): boolean {

    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    if (trimmedEmail.length === 0 || trimmedPassword.length === 0) {
      return false;
    }

    // Check email length and password length
    if (trimmedEmail.length > 250 || trimmedPassword.length > 100) {
      return false; // Email or password exceeds 250 characters
    }

    // Check email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      return false;
    }

    return true;
  }

}
