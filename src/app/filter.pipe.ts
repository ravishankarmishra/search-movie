import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string, language:string, country:string): any[] {
    if(!items) return [];


    if(searchText){
      if(language){
        if(country){
          return items.filter( it => {
            return it['movie_title'].toLowerCase().includes(searchText.toLowerCase())
            && it['language'].toLowerCase().includes(language.toLowerCase())
            && it['country'].toLowerCase().includes(country.toLowerCase());
          });
        }
        return items.filter( it => {
          return it['movie_title'].toLowerCase().includes(searchText.toLowerCase())
          && it['language'].toLowerCase().includes(language.toLowerCase());
        });
      }else if(country){
        return items.filter( it => {
          return it['movie_title'].toLowerCase().includes(searchText.toLowerCase())
          && it['country'].toLowerCase().includes(country.toLowerCase());
        });
      }
      return items.filter( it => {
        return it['movie_title'].toLowerCase().includes(searchText.toLowerCase());
      });
    }
    if(language){
      if(country){
        return items.filter( it => {
          return it['language'].toLowerCase().includes(language.toLowerCase())
          && it['country'].toLowerCase().includes(country.toLowerCase());
        });
      }
      return items.filter( it => {
        return it['language'].toLowerCase().includes(language.toLowerCase());
      });
    }
    if(country){
      return items.filter( it => {
        return it['country'].toLowerCase().includes(country.toLowerCase());
      });
    }
    
  }
}