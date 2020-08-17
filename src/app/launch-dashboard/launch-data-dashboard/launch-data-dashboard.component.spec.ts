import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule, MatToolbarModule, MatButtonModule } from '@angular/material';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { LaunchDataDashboardComponent } from './launch-data-dashboard.component';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('LaunchDataDashboardComponent', () => {
  let component: LaunchDataDashboardComponent;
  let fixture: ComponentFixture<LaunchDataDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchDataDashboardComponent ],
      imports: [MatCardModule, MatToolbarModule, MatButtonModule,
         ScrollingModule, HttpClientModule,RouterModule,RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchDataDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
