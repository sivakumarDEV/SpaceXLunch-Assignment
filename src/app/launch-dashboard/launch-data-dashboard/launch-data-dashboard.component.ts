
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LaunchDataService } from '../../services/service/launch-data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-launch-data-dashboard',
  templateUrl: './launch-data-dashboard.component.html',
  styleUrls: ['./launch-data-dashboard.component.css'],
})
export class LaunchDataDashboardComponent implements OnInit {
  navigator: any;
  public launchResponseData: any;
  public years = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
  public selectedYear = 2006;
  public isMobile = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  public yearValue;
  public developerName;

  constructor(public launchDataService: LaunchDataService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.developerName="Sivakumar K"

    this.getInitialLaunchDetails();
    this.yearValue = this.route.snapshot.params['id'];
  }

  getInitialLaunchDetails() {
    this.launchDataService.getAllLaunchData().subscribe((res) => {
      this.launchResponseData = res;
    });
  }

  yearBasedSpaceX(year:number) {
    this.router.navigate(['/year', year]);
    this.launchDataService.getYearLaunchData(year).subscribe((res) => {
      this.launchResponseData = res;
    });
  }

  successfulLunch(successfulLunchFlag: boolean) {
    this.launchDataService.successfulLaunchSpaceX(successfulLunchFlag).subscribe((res) => {
      this.launchResponseData = res;
    });
  }

  notSuccessfulLunch(successfulLunchFlag: boolean) {
    this.launchDataService.notLaunchSpaceX(successfulLunchFlag).subscribe((res) => {
      this.launchResponseData = res;
    });
  }

  lunchSucessAndLandSucess(successfulLandFlag: boolean) {
    this.launchDataService.getLanuchandLand(successfulLandFlag).subscribe((res) => {
      this.launchResponseData = res;
    });
  }

  notlunchSucessAndLandSucess(successfulLandFlag:boolean) {
    this.launchDataService.getLanuchandLand(successfulLandFlag).subscribe((res) => {
      this.launchResponseData = res;
    });
  }

}