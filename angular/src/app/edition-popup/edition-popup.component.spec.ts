import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionPopupComponent } from './edition-popup.component';

describe('EditionPopupComponent', () => {
  let component: EditionPopupComponent;
  let fixture: ComponentFixture<EditionPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditionPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditionPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
