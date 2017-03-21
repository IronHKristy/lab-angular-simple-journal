import { TestBed, inject } from '@angular/core/testing';

import { JournalEntriesService } from './journal-entries.service';

describe('JournalEntriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JournalEntriesService]
    });
  });

  it('should ...', inject([JournalEntriesService], (service: JournalEntriesService) => {
    expect(service).toBeTruthy();
  }));
});
