import { inject, Injectable } from '@angular/core';
import { IActivitiesResponse, IActivity } from '../interfaces/iactivity-interface.interface';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

interface ICategory {
  id: number,
  name: string,
  icon: string,
  expanded?: boolean
}

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  private httpClient = inject (HttpClient)
  private API_URL : string

  constructor() { 
    this.API_URL = environment.API_URL
  }

  getAllActivities (page: number, limit: number): Promise <IActivitiesResponse> {
    return lastValueFrom(
      this.httpClient.get <IActivitiesResponse> (`${this.API_URL}/activities?page=${page}&limit=${limit}`)
    )
  }

  getActivitiesByCategory(category_id: number, page: number, limit: number): Promise<IActivitiesResponse> {
    return lastValueFrom(
      this.httpClient.get <IActivitiesResponse> (`${this.API_URL}/activities/byCategory?category=${category_id}&page=${page}&limit=${limit}`)
    )
  }

  getAllCategories(): Promise<ICategory[]> {
    return lastValueFrom(
      this.httpClient.get <ICategory[]> (`${this.API_URL}/activities/categories`)
    )
  }

}
