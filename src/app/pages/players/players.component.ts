import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from '../../services/player.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]  // 🔥 Añadimos los módulos aquí
})
export class PlayersComponent implements OnInit {
  searchText = '';
  positions = ['Base', 'Escolta', 'Alero', 'Ala-Pívot', 'Pívot'];
  players: any[] = [];

  constructor(private playerService: PlayerService, private router: Router) {}

  ngOnInit() {
    this.players = this.playerService.getPlayers();
  }

  filteredPlayers() {
    return this.players.filter(player =>
      player.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  filterByPosition(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const position = selectElement.value;
  
    if (position) {
      this.players = this.playerService.getPlayers().filter(p => p.position === position);
    } else {
      this.players = this.playerService.getPlayers(); // Si no se selecciona una posición, mostrar todos los jugadores
    }
  }

  viewPlayer(id: number) {
    this.router.navigate(['/player', id]);
  }

  goHome() {
    this.router.navigate(['/']); // Redirige al inicio (ruta principal)
  }
}