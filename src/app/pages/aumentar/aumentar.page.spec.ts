import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AumentarPage } from './aumentar.page';

describe('AumentarPage', () => {
  let component: AumentarPage;
  let fixture: ComponentFixture<AumentarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AumentarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AumentarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
