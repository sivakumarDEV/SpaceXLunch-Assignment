
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

  constructor(public launchDataService: LaunchDataService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getInitialLaunchDetails();
    this.yearValue = this.route.snapshot.params['id'];
  }

  getInitialLaunchDetails() {
    this.launchDataService.getAllLaunchData().subscribe((res) => {
      this.launchResponseData = res;
    });
  }

  yearBasedSpaceX(year) {
    this.router.navigate(['/year', year]);
    this.launchDataService.getYearLaunchData(year).subscribe((res) => {
      this.launchResponseData = res;
    });
  }

  successfulLunch(a: boolean) {
    this.launchDataService.successfulLaunchSpaceX(a).subscribe((res) => {
      this.launchResponseData = res;
    });
  }

  notSuccessfulLunch(b: boolean) {
    this.launchDataService.notLaunchSpaceX(b).subscribe((res) => {
      this.launchResponseData = res;
    });
  }

  lunchSucessAndLandSucess(p: boolean) {
    this.launchDataService.getLanuchandLand(p).subscribe((res) => {
      this.launchResponseData = res;
    });
  }

  notlunchSucessAndLandSucess(q) {
    this.launchDataService.getLanuchandLand(q).subscribe((res) => {
      this.launchResponseData = res;
    });
  }

}