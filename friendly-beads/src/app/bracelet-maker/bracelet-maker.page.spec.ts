import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BraceletMakerPage } from './bracelet-maker.page';

describe('BraceletMakerPage', () => {
  let component: BraceletMakerPage;
  let fixture: ComponentFixture<BraceletMakerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BraceletMakerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
