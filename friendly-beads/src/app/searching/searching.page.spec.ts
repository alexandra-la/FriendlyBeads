import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchingPage } from './searching.page';

describe('SearchingPage', () => {
  let component: SearchingPage;
  let fixture: ComponentFixture<SearchingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SearchingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
