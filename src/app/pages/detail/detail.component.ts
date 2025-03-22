import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  player: any;

  constructor(
    private route: ActivatedRoute,
    private playerService: PlayerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.player = this.playerService.getPlayerById(id);
  }

  // Navegar al jugador anterior
  changePlayer(direction: 'previous' | 'next'): void {
    const currentId = this.player?.id;
    let nextPlayer;

    if (direction === 'previous') {
      nextPlayer = this.playerService.getPreviousPlayer(currentId);
      if (nextPlayer) {
        this.router.navigate(['/player', nextPlayer.id]);
      }
    } else if (direction === 'next') {
      nextPlayer = this.playerService.getNextPlayer(currentId);
      if (nextPlayer) {
        this.router.navigate(['/player', nextPlayer.id]);
      }
    }
  }

  // Volver a la lista de jugadores
  goToPlayers(): void {
    this.router.navigate(['/players']);
  }
}
