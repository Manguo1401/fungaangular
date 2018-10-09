import { ContactFormService } from './services/contact-form.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ProjectsComponent } from './projects/projects.component';
import { AppRoutingModule } from './/app-routing.module';
import { NavbarComponent } from './parts/navbar/navbar.component';
import { ExamplesComponent } from './examples/examples.component';
import { ContactComponent } from './contact/contact.component';
import { ContactFormComponent } from './forms/contact-form/contact-form.component';
import { environment } from './../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PresentationComponent,
    ProjectsComponent,
    NavbarComponent,
    ExamplesComponent,
    ContactComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    ContactFormService
  ],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
