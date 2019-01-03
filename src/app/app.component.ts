import { Component } from '@angular/core';
import { Configuration } from './models/configuration';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title:string;
  public description:string;
  public show_videogame:boolean = true;
  public config;

  constructor()
  {
    this.config = Configuration;
    this.title = Configuration.title;
    this.description = Configuration.description;
  }

  hide_videogame(bool)
  {
    this.show_videogame = bool;
  }

}

