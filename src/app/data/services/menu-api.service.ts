import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { BaseApiService } from './base-api.service';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

export interface SubMenu {
  subMenuId: number;
  submenuName: string;
  subMenuStatus: string;
  subMenuActive: string;
}

export interface MainMenu {
  mainMenuId: number;
  menuName: string;
  module: string;
  mainMenuStatus: string;
  mainMenuActive: string;
  submenus: SubMenu[];
}

@Injectable()
export class MenuApiService extends BaseApiService {
  constructor(http: HttpClient) {
    super(http);
  }
  getMenus(): Observable<MainMenu[]> {
    return this.get<MainMenu[]>('/api/Menu').pipe(
      catchError(error => {
        console.error('[MenuApiService] Error fetching menus:', error);
        return throwError(() => error);
      })
    );
  }
}

