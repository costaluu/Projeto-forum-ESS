import { Component, OnInit } from '@angular/core'
import { ApiResponse, News } from 'src/types'
import { NzMessageService } from 'ng-zorro-antd/message'
import { nanoid } from 'nanoid'
import { NewsManagementService } from 'src/app/services/news-management.service'
import { NzStatus } from 'ng-zorro-antd/core/types'

@Component({
    selector: 'app-news-management',
    templateUrl: './news-management.component.html',
    styleUrls: ['./news-management.component.css'],
})
export class NewsManagementComponent implements OnInit {
    newsList: News[] = []
    newsListFiltered: News[] = []

    isModalVisible: boolean = false

    creatingNewsInModal: Pick<News, 'title' | 'markdownText' | 'tags'> = {
        title: '',
        markdownText: '',
        tags: [],
    }

    statusInputTitleModal: NzStatus = ''
    statusInputContentModal: NzStatus = ''

    tagsOptions: string[] = ['Rap', 'Nacional']

    filterText: string = ''

    constructor(private message: NzMessageService, private newsManagementService: NewsManagementService) {
        this.getAllNews()
    }

    ngOnInit(): void {}

    validateModalInfo(): boolean {
        this.statusInputContentModal = ''
        this.statusInputTitleModal = ''

        var result: boolean = true

        if (this.creatingNewsInModal.markdownText == '') {
            this.statusInputContentModal = 'error'
            result = false
        }
        if (this.creatingNewsInModal.title == '') {
            this.statusInputTitleModal = 'error'
            result = false
        }

        return result
    }

    validateEditInfo(index: number): boolean {
        var result: boolean = true

        if (this.newsList[index].markdownText == '') {
            result = false
        }

        if (this.newsList[index].title == '') {
            result = false
        }

        return result
    }

    showModal() {
        this.isModalVisible = true
    }

    hideModal() {
        this.isModalVisible = false

        this.creatingNewsInModal = {
            title: '',
            markdownText: '',
            tags: [],
        }
    }

    findIndexFromFilteredList(id: string): number {
        let i: number = 0

        for (; i < this.newsList.length; i++) {
            if (this.newsList[i].id == id) {
                return i
            }
        }

        return i
    }

    filterNews(): void {
        const value: string = this.filterText.toLowerCase()

        if (value == '') {
            this.newsListFiltered = this.newsList

            return
        }

        this.newsListFiltered = []

        for (var i = 0; i < this.newsList.length; i++) {
            var titleLower = this.newsList[i].title.toLowerCase()
            var markdownLower = this.newsList[i].markdownText.toLowerCase()

            if (titleLower.includes(value) || markdownLower.includes(value)) {
                this.newsListFiltered.push(this.newsList[i])
            }
        }
    }

    private clearFilter() {
        this.filterText = ''
        this.newsListFiltered = this.newsList
    }

    onCreateNews(): void {
        var result: boolean = this.validateModalInfo()

        if (result == false) {
            this.message.create('error', `Please make sure that Title and Content are not empty!`)
            return
        }

        let currentDate = new Date()

        let date = currentDate.toLocaleDateString()
        let hour = currentDate.toLocaleTimeString()

        let temp: News = {
            id: nanoid(),
            authorId: '',
            title: this.creatingNewsInModal.title,
            date: date + ' ' + hour.slice(0, -3),
            markdownText: this.creatingNewsInModal.markdownText,
            edited: false,
            views: 0,
            likes: [],
            comments: [],
            tags: this.creatingNewsInModal.tags,
        }

        this.newsManagementService.create(temp).subscribe((res: ApiResponse) => {
            console.log(res)
            if (res.status == 200) {
                this.newsList.unshift(temp)

                this.clearFilter()
                this.message.create('success', `New news created successfully!`)

                this.hideModal()
            } else {
                this.message.create('error', `Failed to create the news!`)
            }
        })
    }

    onSaveNews(id: string, title: string, markdownText: string, tags: string[]): void {
        let find: number = this.findIndexFromFilteredList(id)

        var result: boolean = this.validateEditInfo(find)

        if (result == false) {
            this.message.create('error', `Please make sure that Title and Content are not empty!`)
            return
        }

        let currentDate = new Date()
        let date = currentDate.toLocaleDateString()
        let hour = currentDate.toLocaleTimeString()

        this.newsList[find].title = title
        this.newsList[find].date = date + ' ' + hour.slice(0, -3)
        this.newsList[find].markdownText = markdownText
        this.newsList[find].edited = true
        this.newsList[find].tags = tags

        this.newsManagementService.edit(this.newsList[find]).subscribe((res: ApiResponse) => {
            console.log(res)
            if (res.status == 200) {
                this.clearFilter()
                this.message.create('success', `Saved!`)
            } else {
                this.message.create('error', `Failed to save the news!`)
            }
        })
    }

    onDeleteNews(id: string): void {
        let find: number = this.findIndexFromFilteredList(id)

        this.newsManagementService.delete(id).subscribe((res: ApiResponse) => {
            if (res.status == 200) {
                this.newsList.splice(find, 1)
                this.clearFilter()
                this.message.create('success', `News deleted successfully!`)
            } else {
                this.message.create('error', `Failed to create the news!`)
            }
        })
    }

    getAllNews() {
        this.newsManagementService.getAll().subscribe((res: ApiResponse) => {
            if (res.status == 200) {
                this.message.create('success', `News loaded!`)

                this.newsList = res.result as News[]
                this.newsListFiltered = res.result as News[]
            } else {
                this.message.create('error', `Failed to load news!`)

                this.newsList = []
                this.newsListFiltered = []
            }
        })
    }
}
