import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginUtentiComponent } from './login-utenti.component';

describe('LoginUtentiComponent', () => {
  let component: LoginUtentiComponent;
  let fixture: ComponentFixture<LoginUtentiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginUtentiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginUtentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
