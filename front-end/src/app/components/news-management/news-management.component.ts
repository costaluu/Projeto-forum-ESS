import { Component, OnInit } from '@angular/core';

export interface News {
  readonly id: string;
  title: string;
  date: string;
  markdownText: string;
}

@Component({
  selector: 'app-news-management',
  templateUrl: './news-management.component.html',
  styleUrls: ['./news-management.component.css'],
})
export class NewsManagementComponent implements OnInit {
  editCache: { [key: string]: { edit: boolean; data: News } } = {};
  listOfData: News[] = [];

  startEdit(id: string): void {
    this.editCache[id].edit = true;
  }

  cancelEdit(id: string): void {
    const index = this.listOfData.findIndex((item) => item.id === id);
    this.editCache[id] = {
      data: { ...this.listOfData[index] },
      edit: false,
    };
  }

  saveEdit(id: string): void {
    const index = this.listOfData.findIndex((item) => item.id === id);
    Object.assign(this.listOfData[index], this.editCache[id].data);
    this.editCache[id].edit = false;
  }

  updateEditCache(): void {
    this.listOfData.forEach((item) => {
      this.editCache[item.id] = {
        edit: false,
        data: { ...item },
      };
    });
  }

  ngOnInit(): void {
    const data: News[] = [];

    for (let i = 0; i < 10; i++) {
      data.push({
        id: `${i}`,
        title: `Titulo ${i}`,
        date: `${i}/${i}/${i}`,
        markdownText:
          'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos',
      });
    }

    this.listOfData = data;

    this.updateEditCache();
  }
}
