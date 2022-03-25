import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ContactComponent} from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AuComponent } from './au/au.component';
import { JntuComponent } from './jntu/jntu.component';
import { AboutComponent } from './about/about.component';
import { RegistrationComponent } from './registration/registration.component';
import { ApplyComponent } from './apply/apply.component';
@NgModule({
  declarations: [
    AppComponent,RegistrationComponent,  LoginComponent,ContactComponent,
    AuComponent,JntuComponent,AboutComponent,HomeComponent,ApplyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
