import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
    searchText = searchText.toLowerCase();

    return items.filter( it => {
      return it['movie_title'].toLowerCase().includes(searchText) 
      || it['genres'].toLowerCase().includes(searchText)
      || it['country'].toLowerCase().includes(searchText)
      || it['language'].toLowerCase().includes(searchText);
    });
  }
}