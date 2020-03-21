import { Pipe, PipeTransform } from '@angular/core';
import { AppComponent } from './app.component';
 
@Pipe({ name: 'searchByName' })
export class SearchByNamePipe implements PipeTransform {
  transform(users: any, searchText: string) {
    return users.filter(user => user.name.indexOf(searchText) !== -1);
  }
}
