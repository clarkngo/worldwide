import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PublicDealsComponent } from './public-deals/public-deals.component';
import { PrivateDealsComponent } from './private-deals/private-deals.component';
import { CallbackComponent } from './callback.component';
import { AuthService } from './auth/auth.service';
import { DealService } from './deal.service';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { MaterialModule } from './material.module';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchByNamePipe } from './search-by-name-pipe';
import { SearchFormComponent } from './search-form/search-form.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { DatabasePageComponent } from './database-page/database-page.component';
import { UserListComponent } from './user-list/user-list.component';


@NgModule({
  declarations: [
    AppComponent,
    PublicDealsComponent,
    PrivateDealsComponent,
    CallbackComponent,
    ProfileComponent,
    TopBarComponent,
    FooterComponent,
    SearchByNamePipe,
    SearchFormComponent,
    AboutPageComponent,
    HomePageComponent,
    ProfilePageComponent,
    UserDetailsComponent,
    DatabasePageComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [
    AuthService,
    DealService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
