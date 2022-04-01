import { Component, OnInit } from '@angular/core';

import Restaurants from '../interfaces/restaurants';
import { RestaurantsService } from '../service/restaurants.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  restaurantsArr!: Restaurants[];
  constructor(private restaurantSvc: RestaurantsService) {}

  ngOnInit(): void {
    this.restaurantSvc.getRestaurant().subscribe((response) => {
      this.restaurantsArr = response;
    });
  }
  onItemHandle(restaurant: Restaurants) {
    this.restaurantSvc.getResItem(restaurant);
  }
}
