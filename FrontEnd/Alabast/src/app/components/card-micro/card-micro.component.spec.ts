import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMicroComponent } from './card-micro.component';

describe('CardMicroComponent', () => {
  let component: CardMicroComponent;
  let fixture: ComponentFixture<CardMicroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardMicroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardMicroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
