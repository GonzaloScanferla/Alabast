import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonImportantComponent } from './button-important.component';

describe('ButtonImportantComponent', () => {
  let component: ButtonImportantComponent;
  let fixture: ComponentFixture<ButtonImportantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonImportantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonImportantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
