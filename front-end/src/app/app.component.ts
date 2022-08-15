import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    title = 'front-end'
    logged: Boolean = false

    userInfo: any = {}

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(() => {
            this.logged = this.isUserLogged()

            if (this.logged) {
                this.userInfo = JSON.parse(localStorage.getItem('userInfo') as string)
            }
        })
    }

    isUserLogged(): Boolean {
        if (localStorage.getItem('userInfo') == null) {
            return false
        } else {
            return true
        }
    }
}
