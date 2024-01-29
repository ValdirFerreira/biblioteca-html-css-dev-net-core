import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxResponsiveComponent } from './components/box-responsive/box-responsive.component';
import { ImgFiltersComponent } from './components/img-filters/img-filters.component';
import { LimitDivComponent } from './components/limit-div/limit-div.component';
import { ButtonAnimationComponent } from './components/button-animation/button-animation.component';
import { CardMenuAnimationComponent } from './components/card-menu-animation/card-menu-animation.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxResponsiveComponent,
    ImgFiltersComponent,
    LimitDivComponent,
    ButtonAnimationComponent,
    CardMenuAnimationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
