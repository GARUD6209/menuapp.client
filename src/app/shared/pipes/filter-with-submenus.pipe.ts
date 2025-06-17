// filter-with-submenus.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
import { MainMenu } from '../../data/models/menu.model';

@Pipe({
  name: 'filterWithSubmenus',
  standalone: true
})
export class FilterWithSubmenusPipe implements PipeTransform {
  transform(menus: MainMenu[]): MainMenu[] {
    return menus.filter(menu => menu.subMenus && menu.subMenus.length > 0);
  }
}