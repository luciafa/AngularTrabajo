import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurClientesComponent } from './our-clientes.component';

describe('OurClientesComponent', () => {
  let component: OurClientesComponent;
  let fixture: ComponentFixture<OurClientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurClientesComponent]
    });
    fixture = TestBed.createComponent(OurClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
