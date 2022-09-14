import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CarsEditComponent } from './components/cars/cars-edit/cars-edit.component';
import { CarsListComponent } from './components/cars/cars-list/cars-list.component';
import { MenuLinkComponent } from './components/menu/menu-link/menu-link.component';
import { MenuComponent } from './components/menu/menu.component';
import { MessageComponent } from './components/message/message.component';
import { ModalOptionComponent } from './components/modal-options/modal-option/modal-option.component';
import { ModalOptionsComponent } from './components/modal-options/modal-options.component';
import { VagaComponent } from './components/vaga/vaga.component';
import { VagasComponent } from './components/vagas/vagas.component';
import { CarsPageComponent } from './pages/cars-page/cars-page.component';
import { VagasPageComponent } from './pages/vagas-page/vagas-page.component';
import { ParkingPageComponent } from './pages/parking-page/parking-page.component';

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
    MenuLinkComponent,
    CarsListComponent,
    CarsEditComponent,
    MessageComponent,
    ParkingPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    CalendarModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
