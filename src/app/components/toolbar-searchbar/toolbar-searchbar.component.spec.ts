import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ToolbarSearchbarComponent } from './toolbar-searchbar.component';

describe('ToolbarSearchbarComponent', () => {
  let component: ToolbarSearchbarComponent;
  let fixture: ComponentFixture<ToolbarSearchbarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarSearchbarComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ToolbarSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
