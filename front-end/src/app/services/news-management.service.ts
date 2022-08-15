import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { HttpResponse, News } from 'src/types'

@Injectable({
    providedIn: 'root',
})
export class NewsManagementService {
    private baseUrl: string = 'http://localhost:3000/news'

    constructor(private httpClient: HttpClient) {}

    create(news: News): Observable<HttpResponse> {
        return this.httpClient.post<HttpResponse>(this.baseUrl, news)
    }

    delete(id: string): Observable<HttpResponse> {
        return this.httpClient.delete<HttpResponse>(this.baseUrl, { body: { id: id } })
    }

    edit(news: News): Observable<HttpResponse> {
        return this.httpClient.put<HttpResponse>(this.baseUrl, {
            body: { id: news.id, title: news.title, date: news.date, markdownText: news.markdownText, edited: news.edited },
        })
    }

    getAll(): Observable<HttpResponse> {
        return this.httpClient.get<HttpResponse>(this.baseUrl + 'All')
    }
}
