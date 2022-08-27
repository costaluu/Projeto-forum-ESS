import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
    constructor() {}

    radioValue: string = 'B'
    newsPerPage: number = 5

    ngOnInit(): void {}
}
