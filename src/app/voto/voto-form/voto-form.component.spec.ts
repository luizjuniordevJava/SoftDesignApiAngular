import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotoFormComponent } from './voto-form.component';

describe('VotoFormComponent', () => {
  let component: VotoFormComponent;
  let fixture: ComponentFixture<VotoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VotoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
