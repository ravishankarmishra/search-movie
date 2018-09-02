import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { FilterPipe} from '../filter.pipe';

export interface Skills {
  name: string;
  description: string;
}

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ FilterPipe ]
})
export class HomeComponent implements OnInit {


  moviesDetail:any;
  order:any;
  ascending:any;
  searchText:any;

  options = [
    { name: "English", value: 'English' },
    { name: "Japanese", value: 'Japanese' },
    { name: "French", value: 'French' },
    { name: "Mandarin", value: 'Mandarin' },
    { name: "Aboriginal", value: 'Aboriginal' },
    { name: "Spanish", value: 'Spanish' },
    { name: "French", value: 'French' }
  ]

  countries = [
    { name: "USA", value: 'USA' },
    { name: "UK", value: 'UK' },
    { name: "New Zealand", value: 'New Zealand' },
    { name: "Canada", value: 'Canada' },
    { name: "Australia", value: 'Australia' },
    { name: "Belgium", value: 'Belgium' },
    { name: "Germany", value: 'Germany' },
    { name: "China", value: 'China' },
    { name: "France", value: 'France' },
    { name: "New Line", value: 'New Line' },
    { name: "Japan", value: 'Japan' }
  ]

  constructor(private moviesService: MoviesService) {
   }

  ngOnInit() {
    this.getData();
  }


  getData() {
    this.moviesService.getConfig()
      .subscribe((data) => {
        this.moviesDetail = data;
      });
  }


}
