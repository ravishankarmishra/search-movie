import { Component, OnInit, OnChanges } from '@angular/core';
import { MoviesService } from '../movies.service';
import { FilterPipe} from '../filter.pipe';
import {PageEvent} from '@angular/material';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ FilterPipe ]
})
export class HomeComponent implements OnInit, OnChanges {

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
  tableView: boolean=false;
  darkTheme: boolean=true;
  length: number;
  from:number=0;
  to:number=10;
  diff:number=10;
  pageSize = 10;

  constructor(private moviesService: MoviesService) {
    this.pages=[];
   }

  ngOnInit() {
    this.getData();
    if(window.innerWidth<1024){
      this.tableView=false;
    }
  }
  ngOnChanges(){
    if(window.innerWidth<1024){
      this.tableView=false;
    }
  }

  onResize(event) {
    if(window.innerWidth<1024){
      this.tableView=false;
    }
  }

  pageEvent: PageEvent;

  getData() {
    this.moviesService.getConfig()
      .subscribe((data) => {
        this.moviesDetail = data;
        const language = this.moviesDetail.map(data => data.language);
        this.languages = language.filter((x, i, a) => x && a.indexOf(x) === i);
        const country = this.moviesDetail.map(data => data.country);
        this.countries = country.filter((x, i, a) => x && a.indexOf(x) === i);
        this.length = this.moviesDetail.length;
        this.page = Math.ceil(this.length/10);
        for(let i=0; i<this.page; i++){
          this.pages.push(i);
        }
      });
  }

  updateView(value){
    this.tableView=value;
    if(window.innerWidth<1024){
      this.tableView=false;
    }
  }
  updateTheme(value){
    this.darkTheme=value;
  }
  changePage(e){
    this.diff=e.pageSize;
    this.from=e.pageIndex*this.diff;
    this.to=this.from + this.diff;
  }
  sort(){
    
  }

}
