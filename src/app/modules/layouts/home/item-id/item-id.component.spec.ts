import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemIdComponent } from './item-id.component';

describe('ItemIdComponent', () => {
  let component: ItemIdComponent;
  let fixture: ComponentFixture<ItemIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
