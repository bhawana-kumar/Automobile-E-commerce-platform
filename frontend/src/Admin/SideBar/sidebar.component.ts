import { Component } from "@angular/core";

@Component({
    selector: 'sidebar-component',
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.css'
}) export class sidebarComponent {
    name:string = 'Admin';
    profileUrl = "https://api.dicebear.com/7.x/initials/svg?seed="+this.name;

    
    
}