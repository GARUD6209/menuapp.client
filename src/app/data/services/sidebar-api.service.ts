import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BaseApiService } from './base-api.service';
import { MainMenu } from '../models/menu.model';

@Injectable({ providedIn: 'root' })
export class SidebarApiService extends BaseApiService {

  constructor(http: HttpClient) {
    super(http);
  }



  getSidebarForUser(): Observable<MainMenu[]> {
    return this.get<MainMenu[]>('/Menu');
  }

  // Additional methods for menu management
  getMenuById(id: number): Observable<MainMenu> {
    return this.get<MainMenu>(`/Menu/${id}`);
  }

  createMenu(menu: MainMenu): Observable<MainMenu> {
    return this.post<MainMenu>('/Menu', menu);
  }

  updateMenu(id: number, menu: MainMenu): Observable<MainMenu> {
    return this.put<MainMenu>(`/Menu/${id}`, menu);
  }

  deleteMenu(id: number): Observable<void> {
    return this.delete<void>(`/Menu/${id}`);
  }
}


