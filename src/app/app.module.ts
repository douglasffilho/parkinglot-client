import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { VagaComponent } from './components/vaga/vaga.component';
import { VagasComponent } from './components/vagas/vagas.component';
import { ModalOptionsComponent } from './components/modal-options/modal-options.component';
import { ModalOptionComponent } from './components/modal-options/modal-option/modal-option.component';
import { VagasPageComponent } from './pages/vagas-page/vagas-page.component';
import { CarsPageComponent } from './pages/cars-page/cars-page.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuLinkComponent } from './components/menu/menu-link/menu-link.component';

@NgModule({
  declarations: [
    AppComponent,
    VagaComponent,
    VagasComponent,
    ModalOptionsComponent,
    ModalOptionComponent,
    VagasPageComponent,
    CarsPageComponent,
    MenuComponent,
    MenuLinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
