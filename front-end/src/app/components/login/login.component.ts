import { Component, OnInit, OnDestroy } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
    validateForm!: FormGroup

    submitForm(): void {
        if (this.validateForm.valid) {
            console.log('submit', this.validateForm.value)
            localStorage.setItem('userInfo', `{"name":"${this.validateForm.value.userName}","type":${2}}`)
            this.router.navigateByUrl('/home', { skipLocationChange: true, replaceUrl: true })
        } else {
            Object.values(this.validateForm.controls).forEach((control) => {
                if (control.invalid) {
                    control.markAsDirty()
                    control.updateValueAndValidity({ onlySelf: true })
                }
            })
        }
    }

    constructor(private fb: FormBuilder, private router: Router) {}

    ngOnInit(): void {
        this.router.routeReuseStrategy.shouldReuseRoute = () => false
        this.validateForm = this.fb.group({
            userName: [null, [Validators.required]],
            password: [null, [Validators.required]],
        })
    }
}
