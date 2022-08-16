import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { StoreModule } from '@ngrx/store'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzAvatarModule } from 'ng-zorro-antd/avatar'
import { NzDropDownModule } from 'ng-zorro-antd/dropdown'
import { NzMenuModule } from 'ng-zorro-antd/menu'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { IconDefinition } from '@ant-design/icons-angular'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzInputModule } from 'ng-zorro-antd/input'
import { NzStatisticModule } from 'ng-zorro-antd/statistic'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzDividerModule } from 'ng-zorro-antd/divider'
import { NzTableModule } from 'ng-zorro-antd/table'
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import { NzCollapseModule } from 'ng-zorro-antd/collapse'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { NzMessageModule } from 'ng-zorro-antd/message'
import {
    UserOutline,
    LogoutOutline,
    LoginOutline,
    TeamOutline,
    HomeOutline,
    ThunderboltOutline,
    LockOutline,
    DownOutline,
    FileTextOutline,
    SettingOutline,
    CheckOutline,
    PlusSquareOutline,
    DeleteOutline,
} from '@ant-design/icons-angular/icons'
import { HomeComponent } from './components/home/home.component'
import { LoginComponent } from './components/login/login.component'
import { NewsManagementComponent } from './components/news-management/news-management.component'
import { appReducer } from './app.store'

const icons: IconDefinition[] = [
    UserOutline,
    LogoutOutline,
    LoginOutline,
    TeamOutline,
    HomeOutline,
    ThunderboltOutline,
    LockOutline,
    DownOutline,
    FileTextOutline,
    SettingOutline,
    CheckOutline,
    PlusSquareOutline,
    DeleteOutline,
]

@NgModule({
    declarations: [AppComponent, HomeComponent, LoginComponent, NewsManagementComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        StoreModule.forRoot({ app: appReducer }),
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        NzIconModule.forRoot(icons),
        AppRoutingModule,
        NzButtonModule,
        NzAvatarModule,
        NzDropDownModule,
        NzMenuModule,
        NzSpaceModule,
        NzCardModule,
        NzFormModule,
        NzInputModule,
        NzStatisticModule,
        NzGridModule,
        NzDividerModule,
        NzTableModule,
        NzPopconfirmModule,
        NzTypographyModule,
        NzToolTipModule,
        NzCollapseModule,
        NzSelectModule,
        NzMessageModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
