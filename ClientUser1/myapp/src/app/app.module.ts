import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { TasksComponent } from './tasks/tasks.component';
import { PostsComponent } from './posts/posts.component';

const appRoutes: Routes = [{ path: '', component: UsersComponent }]

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    UsersComponent,
    UserComponent,
    TasksComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
