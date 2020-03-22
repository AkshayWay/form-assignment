import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import {
  HttpClientModule,
  HttpHeaders,
  HttpClient
} from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CreateMessageComponent } from "./create-message/create-message.component";
import { HomeComponent } from "./home/home.component";
import { UpdateMessageComponent } from "./update-message/update-message.component";
// import { AngularFontAwesomeModule } from "angular-font-awesome";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NavbarComponent } from './navbar/navbar.component';
const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "create", component: CreateMessageComponent },
  { path: "update/:id", component: UpdateMessageComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    CreateMessageComponent,
    HomeComponent,
    UpdateMessageComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
