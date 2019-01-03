import { Component, OnInit } from '@angular/core';
import { Shoe } from '../models/sneakers'


@Component ({
    selector: 'sneakers',
    templateUrl: './sneakers.component.html',
    providers:[]
})

export class SneakersComponent implements OnInit{
    public title:string = "Componente de Shoe";
    public sneakers: Array<Shoe>;
    public brands:String[];
    public color:string;
    public my_brand:string;

    constructor( ) {
        this.my_brand;
        this.color = "blue";
        this.brands = [];       
    }
    ngOnInit(){
    }
    show_word(){
        alert(this.my_brand);
    }
    getBrand(){
        alert(this.my_brand);
    }
    addBrands(){
        this.brands.push(this.my_brand);
        this.my_brand = null;        
    }
    removebrand(index){
        this.brands.splice(index,1);
    }

}
