import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { PricingPageComponent } from './component/pricing-page/pricing-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch:'full' },
  { path: 'home', component: LandingPageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'packages', component: PricingPageComponent },
  { path: '**', redirectTo: '/home', pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule { }
