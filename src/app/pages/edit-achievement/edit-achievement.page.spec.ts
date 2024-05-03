import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditAchievementPage } from './edit-achievement.page';

describe('EditAchievementPage', () => {
  let component: EditAchievementPage;
  let fixture: ComponentFixture<EditAchievementPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditAchievementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
