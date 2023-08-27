import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit{
 drinkData: any=[];
 ingredientArray:any=[];
 measureArray:any=[];
 constructor(private location: Location){
  this.drinkData=this.location.getState();
 }

 ngOnInit(){
  this.ingredientArray = Object.keys(this.drinkData)
  .filter(key => key.startsWith("strIngredient")&& this.drinkData[key] !== null)
  .map(key => this.drinkData[key]);
  this.measureArray = Object.keys(this.drinkData)
  .filter(key => key.startsWith("strMeasure")&& this.drinkData[key] !== null)
  .map(key => this.drinkData[key]);
}
}
