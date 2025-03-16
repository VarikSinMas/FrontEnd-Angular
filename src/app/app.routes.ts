import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PlayersComponent } from './pages/players/players.component';
import { DetailComponent } from './pages/detail/detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'player/:id', component: DetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Enrutamiento del lado del cliente
  exports: [RouterModule]  // Exportamos RouterModule para que esté disponible en toda la aplicación
})
export class AppRoutingModule {} 