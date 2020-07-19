/*
 * @Description: 
 * @Version: 0.0.1
 * @Autor: hao wang
 * @Date: 2020-07-07 20:15:20
 * @LastEditors: hao wang
 * @LastEditTime: 2020-07-19 16:52:50
 */ 
// Angular组件放置区域↓↓↓↓↓↓↓↓↓↓↓START↓↓↓↓↓↓↓↓↓↓↓↓↓↓添加angula组件区域
import { NgModule } from '@angular/core';
import zh from '@angular/common/locales/zh';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Angular组件放置区域↑↑↑↑↑↑↑↑↑END↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

// 程序加载进入组件放置区域↓↓↓↓↓↓↓↓↓↓↓START↓↓↓↓↓↓↓↓↓↓↓↓↓↓添加程序加载区域
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
    // 登录模块组件
    import { LoginComponent } from './components/login/login.component';
    // 用户模块组件
    import { UserComponent } from './components/user/userInfo/user.component';
    import { UserListComponent } from './components/user/userList/user-list.component';
    import { UserRateComponent } from './components/user/userRate/userRate.component';
    // 404模块组件
    import { ErrorPageComponent } from './components/error/errorPage/errorPage.component';
    // success模块组件
    import { SuccessComponent } from './components/error/success/success.component';
    // 文件设置界面组件
    import { FileSettingComponent } from './components/file/fileSetting/fileSetting.component';
    // 文件一览组件
    import { FileInfoComponent } from './components/file/fileInfo/fileInfo.component';
    // 项目一览信息
    import { ProjectInfoComponent } from './components/project/projectInfo/projectInfo.component';
    // 成员一览
    import { ProjectTeamComponent } from './components/project/projectTeam/projectTeam.component';
    // 计划一览
    import { PlanInfoComponent } from './components/plan/planInfo/planInfo.component';
    // 计划时间
    import { PlanTimeComponent } from './components/plan/planTime/planTime.component';
    // 计划总结界面
    import { PlanSummaryComponent } from './components/plan/planSummary/planSummary.component';
// 程序加载进入组件放置区域↑↑↑↑↑↑↑↑↑END↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

// 引入NG-ZERRO-ANTD组件↓↓↓↓↓↓↓↓↓↓↓START↓↓↓↓↓↓↓↓↓↓↓↓↓↓添加nz组件区域
import { zh_CN } from 'ng-zorro-antd/i18n';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { IconsProviderModule } from './icons-provider.module';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzLayoutModule, NzButtonModule } from 'ng-zorro-antd';
import { NzUploadModule } from 'ng-zorro-antd/upload';

// 引入NG-ZERRO-ANTD组件↑↑↑↑↑↑↑↑↑END↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

// 数据可视化第三方Echarts
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';


registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    UserListComponent,
    UserRateComponent,
    FileInfoComponent,
    FileSettingComponent,
    ProjectInfoComponent,
    ProjectTeamComponent,
    PlanInfoComponent,
    PlanTimeComponent,
    PlanSummaryComponent,
    ErrorPageComponent,
    SuccessComponent,

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    // 引入的第三方module全部在下面配置
    NzIconModule,
    NzMenuModule,
    NzLayoutModule,
    NzButtonModule,
    NgZorroAntdModule,
    NzBreadCrumbModule,
    IconsProviderModule,
    NzUploadModule,
    // 数据可视化模块
    NgxEchartsModule.forRoot({
      echarts,
    }),
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
