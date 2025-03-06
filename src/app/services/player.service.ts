import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private players = [
    // Base (Point Guard - PG)
    { id: 1, name: 'Stephen Curry', position: 'Base', number: 30, team: 'Golden State Warriors' },
    { id: 2, name: 'Damian Lillard', position: 'Base', number: 0, team: 'Milwaukee Bucks' },
    { id: 3, name: 'Luka Dončić', position: 'Base', number: 77, team: 'Dallas Mavericks' },
    { id: 4, name: 'Ja Morant', position: 'Base', number: 12, team: 'Memphis Grizzlies' },
    { id: 5, name: 'Trae Young', position: 'Base', number: 11, team: 'Atlanta Hawks' },

    // Escolta (Shooting Guard - SG)
    { id: 6, name: 'Devin Booker', position: 'Escolta', number: 1, team: 'Phoenix Suns' },
    { id: 7, name: 'Donovan Mitchell', position: 'Escolta', number: 45, team: 'Cleveland Cavaliers' },
    { id: 8, name: 'Anthony Edwards', position: 'Escolta', number: 5, team: 'Minnesota Timberwolves' },
    { id: 9, name: 'Zach LaVine', position: 'Escolta', number: 8, team: 'Chicago Bulls' },
    { id: 10, name: 'Klay Thompson', position: 'Escolta', number: 11, team: 'Golden State Warriors' },

    // Alero (Small Forward - SF)
    { id: 11, name: 'LeBron James', position: 'Alero', number: 23, team: 'Los Angeles Lakers' },
    { id: 12, name: 'Kevin Durant', position: 'Alero', number: 35, team: 'Phoenix Suns' },
    { id: 13, name: 'Jayson Tatum', position: 'Alero', number: 0, team: 'Boston Celtics' },
    { id: 14, name: 'Jimmy Butler', position: 'Alero', number: 22, team: 'Miami Heat' },
    { id: 15, name: 'Paul George', position: 'Alero', number: 13, team: 'Los Angeles Clippers' },

    // Ala-Pívot (Power Forward - PF)
    { id: 16, name: 'Giannis Antetokounmpo', position: 'Ala-Pívot', number: 34, team: 'Milwaukee Bucks' },
    { id: 17, name: 'Zion Williamson', position: 'Ala-Pívot', number: 1, team: 'New Orleans Pelicans' },
    { id: 18, name: 'Julius Randle', position: 'Ala-Pívot', number: 30, team: 'New York Knicks' },
    { id: 19, name: 'Pascal Siakam', position: 'Ala-Pívot', number: 43, team: 'Toronto Raptors' },
    { id: 20, name: 'Evan Mobley', position: 'Ala-Pívot', number: 4, team: 'Cleveland Cavaliers' },

    // Pívot (Center - C)
    { id: 21, name: 'Nikola Jokić', position: 'Pívot', number: 15, team: 'Denver Nuggets' },
    { id: 22, name: 'Joel Embiid', position: 'Pívot', number: 21, team: 'Philadelphia 76ers' },
    { id: 23, name: 'Anthony Davis', position: 'Pívot', number: 3, team: 'Los Angeles Lakers' },
    { id: 24, name: 'Bam Adebayo', position: 'Pívot', number: 13, team: 'Miami Heat' },
    { id: 25, name: 'Rudy Gobert', position: 'Pívot', number: 27, team: 'Minnesota Timberwolves' },
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
