import { Component, Input, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css']
})
export class ProfileSettingsComponent {
  @Input() user1: any;

  editingUsername: boolean = false;
  addingAddress: boolean = false;
  newAddress: string = '';
  currentPassword: string = '';
  newPassword: string = '';
  confirmNewPassword: string = '';

  @ViewChild('notificationArea') notificationArea!: ElementRef;


  constructor(private http: HttpClient) {}

  toggleEditingUsername(): void {
    this.editingUsername = !this.editingUsername;
  }

  toggleAddingAddress(): void {
    this.addingAddress = !this.addingAddress;
    if (!this.addingAddress) {
      this.newAddress = '';
    }
  }


  updatePassword(): void {
    // a PUT request to update the user's password
    this.http.put('http://localhost:8080/api/auth/updatePassword', {
      currentPassword: this.currentPassword,
      newPassword: this.newPassword,
      confirmNewPassword: this.confirmNewPassword
    })
      .subscribe((response: any) => {
        console.log(response);
        this.showNotification('Password updated successfully!', 'success');
        this.currentPassword = '';
        this.newPassword = '';
        this.confirmNewPassword = '';
      }, (error: any) => {
        console.error(error);
        this.showNotification('Invalid Input. Failed to update password. ', 'error');
      });
  }

  updateAddress(): void {
    // Make a PUT request to update the user's address
    this.http.put('/api/auth/updateAddress', { address: this.newAddress })
      .subscribe((response: any) => {
        console.log(response);
        // You can add further logic here if needed
      }, (error: any) => {
        console.error(error);
      });
  }

  showNotification(message: string, type: 'success' | 'error'): void {
    const notificationDiv = this.notificationArea.nativeElement;
    notificationDiv.innerHTML = `<div class="notification ${type}">${message}</div>`;
    setTimeout(() => {
      notificationDiv.innerHTML = '';
    }, 5000);
  }
}
