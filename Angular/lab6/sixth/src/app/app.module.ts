import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { UserComponent } from './Components/users/users.component';
import { UserDetailsComponent } from './Components/user-details/user-details.component';
import { ErrorComponent } from './Components/error/error.component';
import { RouterModule ,Routes } from '@angular/router';
import { UserPipe } from './pipes/user.pipe';

let routes:Routes = [
  {path:"", component:UserComponent},
  {path:"users", component:UserComponent},
  {path:"users/:id", component:UserDetailsComponent},
  {path:"**", component:ErrorComponent}]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    UserDetailsComponent,
    ErrorComponent,
    UserPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
