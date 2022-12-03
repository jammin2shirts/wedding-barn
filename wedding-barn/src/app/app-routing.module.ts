import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactPageComponent } from './component/contact-page/contact-page.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { PricingPageComponent } from './component/pricing-page/pricing-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch:'full' },
  { path: 'home', component: LandingPageComponent },
  { path: 'contact', component: ContactPageComponent },
  // { path: 'pricing', component: PricingPageComponent },
  { path: '**', redirectTo: '/home', pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', initialNavigation: 'enabledNonBlocking'})],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule { }
