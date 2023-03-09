import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OddsConverterComponent } from './odds-converter.component';

describe('OddsConverterComponent', () => {
  let component: OddsConverterComponent;
  let fixture: ComponentFixture<OddsConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OddsConverterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OddsConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
