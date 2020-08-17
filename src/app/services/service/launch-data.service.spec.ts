import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { LaunchDataService } from './launch-data.service';

describe('LaunchDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [],
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: LaunchDataService = TestBed.get(LaunchDataService);
    expect(service).toBeTruthy();
  });
});
