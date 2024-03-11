import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { StorageService } from '../service/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  role: string = '';
  userId: string = '';

  constructor(private authService: AuthService, private storageService: StorageService,private router: Router) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.role = this.storageService.getUser().role;
      this.userId = this.storageService.getUser().id;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;
  
    this.authService.login(username, password).subscribe({
      next: data => {
        console.log(data);
        
        if (data && data.status === "active" || data.role === 'admin') {
          this.storageService.saveUser(data);
  
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.role = this.storageService.getUser().role;
          this.userId = this.storageService.getUser().id;
          console.log(this.role)
          if(this.role === 'buyer'){
            const  url= '';
            this.router.navigateByUrl(url);
          }else if(this.role === 'seller'){
            console.log("hello");
            const  url= `/getSellers/${this.userId}`;
            this.router.navigateByUrl(url);
          }else if(this.role === 'admin'){
            const  url=  '/admin';
            this.router.navigateByUrl(url);
          }

        } else {
          this.errorMessage = 'User is not active.';
          this.isLoginFailed = true;
          this.isLoggedIn = false;
        }
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }
  

  reloadPage(): void {
    window.location.reload();
  }
}
