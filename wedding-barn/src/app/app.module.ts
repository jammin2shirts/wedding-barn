import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { MatDividerModule} from '@angular/material/divider';
import { MatIconModule} from '@angular/material/icon';
import { MatMenuModule} from '@angular/material/menu';
import { MatButtonModule} from '@angular/material/button';
import { PricingPageComponent } from './component/pricing-page/pricing-page.component';
import { UnderConstructionComponent } from './component/under-construction/under-construction.component';
import { LocationStrategy, PathLocationStrategy, NgOptimizedImage, provideImageKitLoader } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingPageComponent,
    PricingPageComponent,
    UnderConstructionComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AppRoutingModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    NgOptimizedImage
  ],
  providers: [{provide: LocationStrategy, useClass: PathLocationStrategy},provideImageKitLoader("https://ik.imagekit.io/arungudelli/")
],
  bootstrap: [AppComponent]
})
export class AppModule { }
