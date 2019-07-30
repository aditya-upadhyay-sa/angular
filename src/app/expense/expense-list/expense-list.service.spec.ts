import { TestBed } from '@angular/core/testing';

import { ExpenseListService } from './expense-list.service';

describe('ExpenseListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExpenseListService = TestBed.get(ExpenseListService);
    expect(service).toBeTruthy();
  });
});
