import { Component, OnInit } from '@angular/core'
import { News, ApiResponse } from 'src/types'
import { NewsManagementService } from 'src/app/services/news-management.service'
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'app-news-page',
    templateUrl: './news-page.component.html',
    styleUrls: ['./news-page.component.css'],
})
export class NewsPageComponent implements OnInit {
    news: News = {
        id: '',
        cover: '',
        authorId: '',
        title: '',
        date: '',
        markdownText: '',
        edited: false,
        views: 0,
        likes: [],
        comments: [],
        tags: [],
    }

    likes = 0
    dislikes = 0

    commentContent: string = ''

    constructor(private newsManagementService: NewsManagementService, private route: ActivatedRoute) {
        const id: string | null = this.route.snapshot.paramMap.get('id')

        if (id != null) {
            this.newsManagementService.get(id).subscribe((res: ApiResponse) => {
                if (res.status == 200) {
                    this.news = res.result as News
                } else {
                    this.news = {
                        id: '',
                        cover: '',
                        authorId: '',
                        title: '',
                        date: '',
                        markdownText: '',
                        edited: false,
                        views: 0,
                        likes: [],
                        comments: [],
                        tags: [],
                    }
                }
            })
        }
    }

    ngOnInit(): void {}

    like(): void {
        this.likes = 1
        this.dislikes = 0
    }

    dislike(): void {
        this.likes = 0
        this.dislikes = 1
    }
}
