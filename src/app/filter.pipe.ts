import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string, language:string, country:string,  director:string, actor:string, genre:string, budget:string, year:string, from:number, to:number): any[] {
    if(!items) return [];
    if(!searchText && !language && !country && !director && !actor && !genre && !budget && !year) return items.slice(from,to);


    if(searchText){
      if(language){
        if(country){
          return items.filter( it => {
            return it['movie_title'].toLowerCase().includes(searchText.toLowerCase())
            && it['language'].toLowerCase().includes(language.toLowerCase())
            && it['country'].toLowerCase().includes(country.toLowerCase());
          }).slice(from,to);
        }
        return items.filter( it => {
          return it['movie_title'].toLowerCase().includes(searchText.toLowerCase())
          && it['language'].toLowerCase().includes(language.toLowerCase());
        }).slice(from,to);
      }else if(country){
        return items.filter( it => {
          return it['movie_title'].toLowerCase().includes(searchText.toLowerCase())
          && it['country'].toLowerCase().includes(country.toLowerCase());
        }).slice(from,to);
      }
      return items.filter( it => {
        return it['movie_title'].toLowerCase().includes(searchText.toLowerCase());
      }).slice(from,to);
    }
    if(language){
      if(country){
        return items.filter( it => {
          return it['language'].toLowerCase().includes(language.toLowerCase())
          && it['country'].toLowerCase().includes(country.toLowerCase());
        }).slice(from,to);
      }
      return items.filter( it => {
        return it['language'].toLowerCase().includes(language.toLowerCase());
      }).slice(from,to);
    }
    if(country){
      return items.filter( it => {
        return it['country'].toLowerCase().includes(country.toLowerCase());
      }).slice(from,to);
    }
    if(director){
      return items.filter( it => {
        return it['director_name'].toLowerCase().includes(director.toLowerCase());
      }).slice(from,to);
    }
    if(actor){
      return items.filter( it => {
        return it['actor_1_name'].toLowerCase().includes(actor.toLowerCase())
        || it['actor_2_name'].toLowerCase().includes(actor.toLowerCase());
      }).slice(from,to);
    }
    if(genre){
      return items.filter( it => {
        return it['genres'].toLowerCase().includes(genre.toLowerCase());
      }).slice(from,to);
    }
    if(budget){
      return items.filter( it => {
        return it['budget'].toLowerCase().includes(budget.toLowerCase());
      }).slice(from,to);
    }
    if(year){
      return items.filter( it => {
        return it['title_year'].toLowerCase().includes(year.toLowerCase());
      }).slice(from,to);
    }
  }
}