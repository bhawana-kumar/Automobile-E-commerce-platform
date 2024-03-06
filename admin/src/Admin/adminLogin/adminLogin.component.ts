import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'admin-login',
    templateUrl: './adminLogin.component.html',
    styleUrl: './adminLogin.component.css'
}) export class adminLoginComponent{
    loginForm!: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    // Convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // Stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        // Form is valid, do your login logic here
        console.log('Login successful');
    }
}