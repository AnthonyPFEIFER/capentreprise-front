import { Injectable } from '@angular/core';
import { Game } from 'src/app/models/game';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  games: Game[];
  game: Game;

  listGamesUrl = 'http://localhost:8080/jeu/jeux';

  constructor(private httpClient: HttpClient) { }

  getAllGames(): Observable<Game[]> {
    return this.httpClient.get<Game[]>(this.listGamesUrl) // , {observe: 'response'}
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }



  handleError(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
