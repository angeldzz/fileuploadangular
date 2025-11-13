import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosequipoComponent } from './datosequipo.component';

describe('DatosequipoComponent', () => {
  let component: DatosequipoComponent;
  let fixture: ComponentFixture<DatosequipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatosequipoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosequipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
