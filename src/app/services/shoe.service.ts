import { Injectable } from '@angular/core';
import { Shoe } from '../models/sneakers';

@Injectable()

export class ShoeService{

    public sneakers: Array<Shoe>;

    constructor(){
        this.sneakers = [
            new Shoe ("Reebok Asian", "Reebok", "red", 200, true ),
            new Shoe ("Adidas Black", "Adidas", "black", 50, false ),
            new Shoe ("Nike White", "Nike", "white", 120, true ),
            new Shoe ("Adidas Big", "Adidas", "red", 80, false ),
            new Shoe ("Chanchita Fashion", "Chanchita", "yellow", 20, true ),
        ];
    }

    getText(){
        return "I am in a service";
    }
    getSneakers():Array<Shoe> {
        return this.sneakers;
    }
}