import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NuevalistaPage } from './nuevalista.page';

describe('NuevalistaPage', () => {
  let component: NuevalistaPage;
  let fixture: ComponentFixture<NuevalistaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevalistaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NuevalistaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
