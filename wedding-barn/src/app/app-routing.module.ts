import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { PricingPageComponent } from './component/pricing-page/pricing-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch:'full' },
  { path: 'home', component: LandingPageComponent },
  // { path: 'pricing', component: PricingPageComponent },
  { path: '**', redirectTo: '/home', pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule { }
