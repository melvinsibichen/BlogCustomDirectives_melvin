import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WildcardComponent } from './wildcard/wildcard.component';
import { AboutComponent } from './about/about.component';

import { CustomDirectiveDirective } from './custom-directive.directive';

import { AuthorComponent } from './author/author.component';
import { LocationsComponent } from './locations/locations.component';
import { HoverdirectiveDirective } from './hoverdirective.directive';
import { AlertdirectiveDirective } from './alertdirective.directive';
import { AutofocusDirective } from './autofocus.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    NavbarComponent,
    WildcardComponent,
    AboutComponent,
    CustomDirectiveDirective, 
    AuthorComponent,
    LocationsComponent,
    HoverdirectiveDirective,
    AlertdirectiveDirective,
    AutofocusDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
