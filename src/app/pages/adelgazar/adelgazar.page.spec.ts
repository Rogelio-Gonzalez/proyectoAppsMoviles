import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdelgazarPage } from './adelgazar.page';

describe('AdelgazarPage', () => {
  let component: AdelgazarPage;
  let fixture: ComponentFixture<AdelgazarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdelgazarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdelgazarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
