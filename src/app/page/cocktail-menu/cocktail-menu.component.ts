import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CocktailServiceService } from 'src/app/services/cocktail-service.service';

@Component({
  selector: 'app-cocktail-menu',
  templateUrl: './cocktail-menu.component.html',
  styleUrls: ['./cocktail-menu.component.css']
})
export class CocktailMenuComponent implements OnInit{

  constructor(private router:Router, private service:CocktailServiceService) { }
  drinkList:any;
  filteredDrinkList:any[] = [];
  selectedOption: string = 'All';
  ngOnInit(){
    let drink = this.router.url.split('/').pop();
    if (drink) {
      drink = drink.replace(/\$/g,"/");
      this.service.getDrinkList(drink).subscribe((response)=> {
        if (!response) return;
        this.drinkList = response.drinks;
        this.filteredDrinkList = response.drinks;
      })
    } else {
      this.router.navigate(['']);
    }
  }

  updateList(val:any): void {
    if (this.selectedOption === "All") {
      this.showAll();
      return;
    }
    this.filteredDrinkList = this.drinkList.filter((list:any) => { return list.strAlcoholic===this.selectedOption});
  }

  showAll(): void {
    this.filteredDrinkList = [...this.drinkList];
  }

  showDetails(drink:any){
    this.router.navigate(['/ingredient/'+ drink.strDrink],{ state: drink });
  }
}
