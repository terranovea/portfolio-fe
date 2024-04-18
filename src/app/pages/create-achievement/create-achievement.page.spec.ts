import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateAchievementPage } from './create-achievement.page';

describe('CreateAchievementPage', () => {
  let component: CreateAchievementPage;
  let fixture: ComponentFixture<CreateAchievementPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreateAchievementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
