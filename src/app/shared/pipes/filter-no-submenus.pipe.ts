import { Pipe, PipeTransform } from '@angular/core';
import { MainMenu } from '../../data/models/menu.model';

@Pipe({
  name: 'filterNoSubmenus',
  standalone: true
})
export class FilterNoSubmenusPipe implements PipeTransform {
  transform(menus: MainMenu[]): MainMenu[] {
    return menus.filter(menu => !menu.submenus || menu.submenus.length === 0);
  }
}
