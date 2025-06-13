import { Pipe, PipeTransform } from '@angular/core';
import { MainMenu } from '../../data/models/menu.model';

// Filter pipe for menus with submenus
@Pipe({
  name: 'filterWithSubmenus',
  standalone: true
})
export class FilterWithSubmenusPipe implements PipeTransform {
  transform(menus: MainMenu[]): MainMenu[] {
    return menus.filter(menu => menu.submenus && menu.submenus.length > 0);
  }
}
