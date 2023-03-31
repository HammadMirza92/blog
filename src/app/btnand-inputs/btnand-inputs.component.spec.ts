import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnandInputsComponent } from './btnand-inputs.component';

describe('BtnandInputsComponent', () => {
  let component: BtnandInputsComponent;
  let fixture: ComponentFixture<BtnandInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnandInputsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnandInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
