import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { CartComponent } from './cart/cart.component'
import { AppComponent } from './app.component';

export const router: Routes = [
 { path: 'sign', component: SignupComponent},
 { path: 'log', component: LoginComponent},
 { path: 'profile', component: ProfileComponent},
 { path: 'edit_profile', component: EditProfileComponent},
 { path: 'dashboard', component: DashboardComponent},
 { path: 'logout', component: LoginComponent},
 { path: 'cart', component: CartComponent},

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
