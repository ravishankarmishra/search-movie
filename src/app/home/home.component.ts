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
  language: string;
  country: string;
  countries: string[];
  languages: string[];
  page: number;
  pages: number[];
  tableView: boolean=true;
  darkTheme: boolean=true;

  constructor(private moviesService: MoviesService) {
    this.pages=[];
   }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.moviesService.getConfig()
      .subscribe((data) => {
        this.moviesDetail = data;
        const language = this.moviesDetail.map(data => data.language);
        this.languages = language.filter((x, i, a) => x && a.indexOf(x) === i);
        const country = this.moviesDetail.map(data => data.country);
        this.countries = country.filter((x, i, a) => x && a.indexOf(x) === i);
        this.page = Math.ceil(this.moviesDetail.length/10);
        console.log("pages"+this.moviesDetail.length)
        for(let i=0; i<this.page; i++){
          this.pages.push(i);
        }
      });
  }

  updateView(value){
    this.tableView=value;
  }
  updateTheme(value){
    this.darkTheme=value;
  }

}
