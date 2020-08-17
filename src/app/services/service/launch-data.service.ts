import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LaunchDataService {
  basePath = 'https://api.spaceXdata.com/v3/launches?limit=100';
  constructor(private http: HttpClient) { }
 public getAllLaunchData(): Observable<any> {
    return this.http.get(this.basePath);
  }

  public getYearLaunchData(year:number): Observable<any> {
    return this.http.get(`${this.basePath}${'&launch_year='}${year}`);
  }

  public successfulLaunchSpaceX(successfulLunchFlag:boolean): Observable<any> {
    return this.http.get(`${this.basePath}${'&launch_success='}${successfulLunchFlag}`);
  }

  public notLaunchSpaceX(successfulLunchFlag:boolean): Observable<any> {
    return this.http.get(`${this.basePath}${'&launch_success='}${successfulLunchFlag}`);
  }

  public getLanuchandLand(successfulLandFlag): Observable<any> {

    return this.http.get(`${this.basePath}${'&launch_success=true&land_success='}${successfulLandFlag}`);
  }
  
}


