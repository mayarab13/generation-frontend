import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarUsuarioComponent } from './alterar-usuario.component';

describe('AlterarUsuarioComponent', () => {
  let component: AlterarUsuarioComponent;
  let fixture: ComponentFixture<AlterarUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterarUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
