import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private players = [
    // Base (Point Guard - PG)
    { id: 1, name: 'Stephen Curry', height:'1,88', age: '37', position: 'Base', number: 30, team: 'Golden State Warriors', imageUrl: 'assets/fotos/curry.png', videoUrl: 'StephCurry.mp4'  },
    { id: 2, name: 'Damian Lillard', height:'1,88', age: '37', position: 'Base', number: 0, team: 'Milwaukee Bucks', imageUrl: 'assets/fotos/lillard.png', videoUrl: 'lillard.mp4' },
    { id: 3, name: 'Luka Dončić', height:'1,98', age: '26', position: 'Base', number: 77, team: 'Dallas Mavericks', imageUrl: 'assets/fotos/luka.png', videoUrl: 'doncic.mp4'  },
    { id: 4, name: 'Ja Morant', height:'1,88', age: '25', position: 'Base', number: 12, team: 'Memphis Grizzlies' , imageUrl: 'assets/fotos/morant.png', videoUrl: 'morant.mp4' },
    { id: 5, name: 'Trae Young', height:'1,85', age: '26', position: 'Base', number: 11, team: 'Atlanta Hawks' , imageUrl: 'assets/fotos/trae.png', videoUrl: 'young.mp4' },

    // Escolta (Shooting Guard - SG)
    { id: 6, name: 'Devin Booker', height:'1,98', age: '28', position: 'Escolta', number: 1, team: 'Phoenix Suns' , imageUrl: 'assets/fotos/booker.png', videoUrl: 'booker.mp4' },
    { id: 7, name: 'Donovan Mitchell', height:'1,91', age: '28', position: 'Escolta', number: 45, team: 'Cleveland Cavaliers', imageUrl: 'assets/fotos/donovan.png', videoUrl: 'donovan.mp4' },
    { id: 8, name: 'Anthony Edwards', height:'1,93', age: '23', position: 'Escolta', number: 5, team: 'Minnesota Timberwolves', imageUrl: 'assets/fotos/edwards.png', videoUrl: 'edwards.mp4' },
    { id: 9, name: 'Zach LaVine', height:'1,96', age: '30', position: 'Escolta', number: 8, team: 'Chicago Bulls' , imageUrl: 'assets/fotos/lavine.png', videoUrl: 'lavine.mp4' },
    { id: 10, name: 'Klay Thompson', height:'1,96', age: '35', position: 'Escolta', number: 11, team: 'Golden State Warriors', imageUrl: 'assets/fotos/klay.png', videoUrl: 'klay.mp4' },

    // Alero (Small Forward - SF)
    { id: 11, name: 'LeBron James', height:'2,06', age: '40', position: 'Alero', number: 23, team: 'Los Angeles Lakers', imageUrl: 'assets/fotos/lebron.png', videoUrl: 'lebron.mp4' },
    { id: 12, name: 'Kevin Durant', height:'2,11', age: '36', position: 'Alero', number: 35, team: 'Phoenix Suns', imageUrl: 'assets/fotos/durant.png', videoUrl: 'durant.mp4' },
    { id: 13, name: 'Jayson Tatum', height:'2,03', age: '27', position: 'Alero', number: 0, team: 'Boston Celtics', imageUrl: 'assets/fotos/tatum.png', videoUrl: 'tatum.mp4' },
    { id: 14, name: 'Jimmy Butler', height:'2,01', age: '35', position: 'Alero', number: 22, team: 'Miami Heat' , imageUrl: 'assets/fotos/butler.png', videoUrl: 'butler.mp4' },
    { id: 15, name: 'Paul George', height:'2,03', age: '34', position: 'Alero', number: 13, team: 'Los Angeles Clippers', imageUrl: 'assets/fotos/george.png', videoUrl: 'george.mp4'  },

    // Ala-Pívot (Power Forward - PF)
    { id: 16, name: 'Giannis Antetokounmpo', height:'2,11', age: '30', position: 'Ala-Pívot', number: 34, team: 'Milwaukee Bucks' , imageUrl: 'assets/fotos/anteto.png', videoUrl: 'anteto.mp4' },
    { id: 17, name: 'Zion Williamson', height:'1,98', age: '24', position: 'Ala-Pívot', number: 1, team: 'New Orleans Pelicans' , imageUrl: 'assets/fotos/zion.png', videoUrl: 'zion.mp4' },
    { id: 18, name: 'Julius Randle', height:'2,06', age: '30', position: 'Ala-Pívot', number: 30, team: 'New York Knicks', imageUrl: 'assets/fotos/randle.png', videoUrl: 'randle.mp4'  },
    { id: 19, name: 'Pascal Siakam', height:'2,03', age: '30', position: 'Ala-Pívot', number: 43, team: 'Toronto Raptors', imageUrl: 'assets/fotos/siakam.png', videoUrl: 'siakam.mp4'  },
    { id: 20, name: 'Evan Mobley', height:'2,11', age: '23', position: 'Ala-Pívot', number: 4, team: 'Cleveland Cavaliers', imageUrl: 'assets/fotos/mobley.jpg', videoUrl: 'mobley.mp4' },

    // Pívot (Center - C)
    { id: 21, name: 'Nikola Jokić', height:'2,11', age: '30', position: 'Pívot', number: 15, team: 'Denver Nuggets', imageUrl: 'assets/fotos/jokic.png', videoUrl: 'jokic.mp4'  },
    { id: 22, name: 'Joel Embiid', height:'2,13', age: '30', position: 'Pívot', number: 21, team: 'Philadelphia 76ers', imageUrl: 'assets/fotos/embid.png', videoUrl: 'embid.mp4' },
    { id: 23, name: 'Anthony Davis', height:'2,08', age: '32', position: 'Pívot', number: 3, team: 'Los Angeles Lakers', imageUrl: 'assets/fotos/davis.png', videoUrl: 'davis.mp4' },
    { id: 24, name: 'Bam Adebayo', height:'2,06', age: '27', position: 'Pívot', number: 13, team: 'Miami Heat', imageUrl: 'assets/fotos/adebayo.png', videoUrl: 'adebayo.mp4' },
    { id: 25, name: 'Rudy Gobert', height:'2,16', age: '32', position: 'Pívot', number: 27, team: 'Minnesota Timberwolves', imageUrl: 'assets/fotos/gobert.png', videoUrl: 'gobert.mp4'  },
  ];

  constructor() {}

  getPlayers() {
    return this.players;
  }

  getPlayerById(id: number) {
    return this.players.find((player) => player.id === id);
  }

  getPlayersByPosition(position: string) {
    return this.players.filter(player => player.position === position);
  }
}
