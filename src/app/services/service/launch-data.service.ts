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

  public getYearLaunchData(a): Observable<any> {
    return this.http.get(`${this.basePath}${'&launch_year='}${a}`);
  }

  public successfulLaunchSpaceX(b): Observable<any> {
    return this.http.get(`${this.basePath}${'&launch_success='}${b}`);
  }

  public notLaunchSpaceX(c): Observable<any> {
    return this.http.get(`${this.basePath}${'&launch_success='}${c}`);
  }

  public getLanuchandLand(d): Observable<any> {
    
    return this.http.get(`${this.basePath}${'&launch_success=true&land_success='}${d}`);
  }
  
}


