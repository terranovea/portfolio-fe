import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AchievementSearchPage } from './achievement-search.page';

describe('AchievementSearchPage', () => {
  let component: AchievementSearchPage;
  let fixture: ComponentFixture<AchievementSearchPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AchievementSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
