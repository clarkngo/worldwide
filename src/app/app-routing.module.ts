import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallbackComponent } from './callback.component';
import { PublicDealsComponent } from './public-deals/public-deals.component';
import { PrivateDealsComponent } from './private-deals/private-deals.component';
import { AuthGuard } from './auth/auth.guard';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';

import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { DatabasePageComponent } from './database-page/database-page.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'database',
    component: DatabasePageComponent
  },
  {
    path: 'profiles',
    component: UserListComponent
  },
  {
    path: 'profiles/:userId',
    component: UserDetailsComponent
  },
  {
    path: 'profile/:userId',
    component: ProfilePageComponent
  },
  {
    path: 'deals',
    component: PublicDealsComponent
  },
  // {
  //   path: 'profile',
  //   component: ProfileComponent,
  //   canActivate: [ AuthGuard ]
  // },
  {
    path: 'callback',
    component: CallbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
