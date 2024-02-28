import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent {
  menuOpenClicked: boolean = false;

  constructor(private authService: AuthService,  private router: Router) { }

  signOut() {
    this.menuOpenClicked = false;
    this.authService.signOut();
    this.router.navigate(["/admin/signin"])
  }
}
