import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AchieverPage } from './achiever.page';

describe('AchieverPage', () => {
  let component: AchieverPage;
  let fixture: ComponentFixture<AchieverPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AchieverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
