import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsPageComponent } from './pages/cars-page/cars-page.component';
import { ParkingPageComponent } from './pages/parking-page/parking-page.component';
import { VagasPageComponent } from './pages/vagas-page/vagas-page.component';

const routes: Routes = [
  { path: '', component: VagasPageComponent, pathMatch: 'full' },
  { path: 'cars', component: CarsPageComponent, pathMatch: 'full' },
  { path: 'park', component: ParkingPageComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
