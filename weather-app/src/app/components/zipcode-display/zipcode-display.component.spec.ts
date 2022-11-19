import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipcodeDisplayComponent } from './zipcode-display.component';

describe('ZipcodeDisplayComponent', () => {
  let component: ZipcodeDisplayComponent;
  let fixture: ComponentFixture<ZipcodeDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZipcodeDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZipcodeDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
