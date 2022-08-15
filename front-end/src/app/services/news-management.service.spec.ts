import { TestBed } from '@angular/core/testing';

import { NewsManagementService } from './news-management.service';

describe('NewsManagementService', () => {
  let service: NewsManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
