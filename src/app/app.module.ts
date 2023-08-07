import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IntroSectionComponent } from './intro-section/intro-section.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { ServiceSectionComponent } from './service-section/service-section.component';
import { WhyUsSectionComponent } from './why-us-section/why-us-section.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TeamComponent } from './team/team.component';
import { OurClientesComponent } from './our-clientes/our-clientes.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroSectionComponent,
    AboutSectionComponent,
    ServiceSectionComponent,
    WhyUsSectionComponent,
    PortfolioComponent,
    TeamComponent,
    OurClientesComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
