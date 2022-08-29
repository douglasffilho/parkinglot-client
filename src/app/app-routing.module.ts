import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsPageComponent } from './pages/cars-page/cars-page.component';
import { VagasPageComponent } from './pages/vagas-page/vagas-page.component';

const routes: Routes = [
  { path: '', component: VagasPageComponent, pathMatch: 'full' },
  { path: 'cars', component: CarsPageComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
