import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from '../../services/player.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  
})
export class DetailComponent implements OnInit {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;

  player: any;
  players: any[] = [];
  playerIndex: number = 0;
  timeStamp: number = Date.now();

  constructor(private route: ActivatedRoute, private playerService: PlayerService, private router: Router) { }

  ngOnInit(): void {
    this.players = this.playerService.getPlayers();

    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.playerIndex = this.players.findIndex(p => p.id === id);
    
      if (this.playerIndex !== -1) {
        this.player = this.players[this.playerIndex];
        this.timeStamp = Date.now(); // evitar caché
    
        // Esto fuerza la recarga del video.
        setTimeout(() => {
          if (this.videoPlayer?.nativeElement) {
            this.videoPlayer.nativeElement.pause();
            this.videoPlayer.nativeElement.load();
            this.videoPlayer.nativeElement.currentTime = 0;
          }
        }, 50);
      } else {
        this.router.navigate(['/players']);
      }
    });
  }
  

  goToHome() {
    this.router.navigate(['/players']); // Redirige al inicio (ruta principal)
  }

  goToPrevious() {
    if (this.playerIndex > 0) {
      const prevPlayer = this.players[this.playerIndex - 1];
      this.router.navigate(['/player', prevPlayer.id]);
    }
  }
  
  goToNext() {
    if (this.playerIndex < this.players.length - 1) {
      const nextPlayer = this.players[this.playerIndex + 1];
      this.router.navigate(['/player', nextPlayer.id]);
    }
  }
  

}
