import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { PricingPageComponent } from './component/pricing-page/pricing-page.component';


const routes: Routes = [
  { path: 'pricing', component: PricingPageComponent },
  { path: 'home', component: LandingPageComponent },
  { path: '', redirectTo: '/home', pathMatch:'full' },
  { path: '**', component: LandingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
