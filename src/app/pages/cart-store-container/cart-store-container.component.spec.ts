import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartStoreContainerComponent } from './cart-store-container.component';

describe('InventoryStoreContainerComponent', () => {
  let component: CartStoreContainerComponent;
  let fixture: ComponentFixture<CartStoreContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartStoreContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartStoreContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
