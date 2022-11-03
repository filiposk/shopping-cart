import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryStoreContainerComponent } from './inventory-store-container.component';

describe('InventoryStoreContainerComponent', () => {
  let component: InventoryStoreContainerComponent;
  let fixture: ComponentFixture<InventoryStoreContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryStoreContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryStoreContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
