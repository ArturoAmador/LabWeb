import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResconsolaComponent } from './resconsola.component';

describe('ResconsolaComponent', () => {
  let component: ResconsolaComponent;
  let fixture: ComponentFixture<ResconsolaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResconsolaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResconsolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
