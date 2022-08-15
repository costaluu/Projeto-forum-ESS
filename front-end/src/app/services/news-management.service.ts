import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { ApiResponse, News } from 'src/types'

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

    getAll(): Observable<ApiResponse> {
        let corsHeader = new HttpHeaders()

        return this.httpClient.get<ApiResponse>(this.baseUrl + 'all', { headers: corsHeader })
    }
}
