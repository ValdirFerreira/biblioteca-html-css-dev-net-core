import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxResponsiveComponent } from './components/box-responsive/box-responsive.component';
import { ImgFiltersComponent } from './components/img-filters/img-filters.component';
import { LimitDivComponent } from './components/limit-div/limit-div.component';
import { ButtonAnimationComponent } from './components/button-animation/button-animation.component';
import { CardMenuAnimationComponent } from './components/card-menu-animation/card-menu-animation.component';
import { CardProComponent } from './components/card-pro/card-pro.component';
import { CardPerspectiveComponent } from './components/card-perspective/card-perspective.component';
import { CardAnimationComponent } from './components/card-animation/card-animation.component';
import { LayoutResponsivoComponent } from './components/layout-responsivo/layout-responsivo.component';
import { MenuFotoComponent } from './components/menu-foto/menu-foto.component';
import { ComponenteBtnComponent } from './components/componente-btn/componente-btn.component';
import { MsnAutoComponent } from './components/msn-auto/msn-auto.component';
import { GraficoColunasComponent } from './components/grafico-colunas/grafico-colunas.component';
import { MenuPositionComponent } from './components/menu-position/menu-position.component';


@NgModule({
  declarations: [
    AppComponent,
    BoxResponsiveComponent,
    ImgFiltersComponent,
    LimitDivComponent,
    ButtonAnimationComponent,
    CardMenuAnimationComponent,
    CardProComponent,
    CardPerspectiveComponent,
    CardAnimationComponent,
    LayoutResponsivoComponent,
    MenuFotoComponent,
    ComponenteBtnComponent,
    MsnAutoComponent,
    GraficoColunasComponent,
    MenuPositionComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
