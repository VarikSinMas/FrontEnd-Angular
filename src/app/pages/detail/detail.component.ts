import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from '../../services/player.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  player: any;

  constructor(private route: ActivatedRoute, private playerService: PlayerService, private router: Router) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.player = this.playerService.getPlayerById(id);
  }

  goToPlayers(){
    this.router.navigate(['/players']);
  }
}
