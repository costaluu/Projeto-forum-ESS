import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { map, Observable } from 'rxjs'
import { User } from 'src/types'
import { AppState } from './app.store'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    title = 'front-end'

    logged: Observable<Boolean> = this.store.select('app').pipe(
        map((state) => {
            return state.logged
        })
    )

    userInfo: Observable<User> = this.store.select('app').pipe(
        map((state) => {
            return state.user
        })
    )

    constructor(private store: Store<{ app: AppState }>) {}

    ngOnInit() {}

    isUserLogged(): Boolean {
        if (localStorage.getItem('userInfo') == null) {
            return false
        } else {
            return true
        }
    }
}
