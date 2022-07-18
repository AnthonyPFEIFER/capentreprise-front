import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game';
import { GameService } from 'src/app/services/game.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  games: Game[];
  id: number;

  constructor(private route: ActivatedRoute, private gameService: GameService, private router: Router) { }

  ngOnInit(): void {

    this.gameService.getAllGames().subscribe((data: Game[]) => {
      this.games = data;
    })    

  }

}
