import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from '../../services/player.service';
import { CommonModule } from '@angular/common';  // Agrega CommonModule
import { FormsModule } from '@angular/forms';    // Agrega FormsModule

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]  // Asegúrate de importar estos módulos
})
export class HomeComponent implements OnInit {
  searchText = '';
  selectedPosition = '';
  positions = ['Base', 'Escolta', 'Alero', 'Ala-Pívot', 'Pívot'];
  players: any[] = [];
  filteredPlayersList: any[] = [];

  constructor(private playerService: PlayerService, private router: Router) {}

  ngOnInit() {
    this.players = this.playerService.getPlayers(); // Obtén todos los jugadores
    this.filteredPlayersList = [...this.players]; // Copia la lista para mostrarla
  }

  filteredPlayers() {
    return this.filteredPlayersList.filter(player =>
      player.name.toLowerCase().includes(this.searchText.toLowerCase()) && 
      (this.selectedPosition ? player.position === this.selectedPosition : true)
    );
  }

  filterByPosition(position: string) {
    this.selectedPosition = position;
    if (position) {
      this.filteredPlayersList = this.players.filter(player => player.position === position);
    } else {
      this.filteredPlayersList = [...this.players];
    }
  }

  goToPlayers() {
    this.router.navigate(['/players']);
  }

  viewPlayer(playerId: string) {
    // Navegar a la página de detalles del jugador
    this.router.navigate(['/player', playerId]);
  }
}
