import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ListViewComponent } from './components/list-view/list-view.component';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './services/users.service';
import { UserDetailsComponent } from './components/user-details/user-details.component';

const appRoutes: Routes = [
  { path: 'user/:id', component: UserDetailsComponent },
  { path: 'users', component: ListViewComponent },

  { path: '',   redirectTo: '/users', pathMatch: 'full' },
  { path: '**', component: ListViewComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ListViewComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
