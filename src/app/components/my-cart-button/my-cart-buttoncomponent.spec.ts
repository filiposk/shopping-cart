import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCartButtonComponent } from './my-cart-button.component';

describe('InventoryStoreContainerComponent', () => {
  let component: MyCartButtonComponent;
  let fixture: ComponentFixture<MyCartButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCartButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCartButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
