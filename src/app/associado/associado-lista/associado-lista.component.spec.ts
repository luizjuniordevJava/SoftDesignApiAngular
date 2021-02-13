import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociadoListaComponent } from './associado-lista.component';

describe('AssociadoListaComponent', () => {
  let component: AssociadoListaComponent;
  let fixture: ComponentFixture<AssociadoListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssociadoListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociadoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
