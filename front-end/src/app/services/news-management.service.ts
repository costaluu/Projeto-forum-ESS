import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { ApiResponse, News } from '../../../../common/types'

@Injectable({
    providedIn: 'root',
})
export class NewsManagementService {
    private baseUrl: string = 'http://localhost:3000/news'

    constructor(private httpClient: HttpClient) {}

    create(news: News): Observable<ApiResponse> {
        return this.httpClient.post<ApiResponse>(this.baseUrl, news)
    }

    delete(id: string): Observable<ApiResponse> {
        return this.httpClient.delete<ApiResponse>(this.baseUrl, { body: { id: id } })
    }

    edit(news: News): Observable<ApiResponse> {
        return this.httpClient.put<ApiResponse>(this.baseUrl, news)
    }

    get(id: string): Observable<ApiResponse> {
        return this.httpClient.get<ApiResponse>(this.baseUrl + `/${id}`)
    }

    getAll(): Observable<ApiResponse> {
        return this.httpClient.get<ApiResponse>(this.baseUrl + 'all')
    }

    getPage(pageId: number, newsPerPage: number): Observable<ApiResponse> {
        return this.httpClient.get<ApiResponse>(this.baseUrl + `page/${pageId}/${newsPerPage}`)
    }

    getNewsSize(): Observable<ApiResponse> {
        return this.httpClient.get<ApiResponse>(this.baseUrl + 'size')
    }
}
