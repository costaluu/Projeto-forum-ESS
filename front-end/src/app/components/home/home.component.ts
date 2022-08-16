import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { AppState } from '../../app.store'
import { map, Observable } from 'rxjs'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    isAdmin: Observable<boolean> = this.store.select('app').pipe(
        map((state) => {
            return (state.user.type == 2) as boolean
        })
    )

    constructor(private store: Store<{ app: AppState }>) {}

    ngOnInit(): void {}
}
