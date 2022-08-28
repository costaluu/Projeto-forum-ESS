import { Component, Input, OnInit } from '@angular/core'
import { imageFallBack } from 'src/util'

@Component({
    selector: 'app-news-shower',
    templateUrl: './news-shower.component.html',
    styleUrls: ['./news-shower.component.css'],
})
export class NewsShowerComponent implements OnInit {
    imageFall: string = imageFallBack

    constructor() {}

    @Input() title: string = ''
    @Input() content: string = ''

    @Input() subtitle: string = ''
    @Input() comments: number = 0
    @Input() likes: number = 0
    @Input() views: number = 0

    ngOnInit(): void {}
}
