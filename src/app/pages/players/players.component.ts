<<<<<<< HEAD
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
  positions = ['Todos','Base', 'Escolta', 'Alero', 'Ala-Pívot', 'Pívot'];
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

  filterByPosition(position: string) {
    this.players = this.playerService.getPlayers().filter(p => p.position === position);

    if (position === 'Todos'){
      this.players = this.playerService.getPlayers();
    }
  }

  viewPlayer(id: number) {
    this.router.navigate(['/player', id]);
  }
}
=======
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
>>>>>>> a6f9468530a3d91f3989422301d458515ee6a53d
