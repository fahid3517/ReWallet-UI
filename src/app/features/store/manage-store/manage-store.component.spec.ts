import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageStoreComponent } from './manage-store.component';

describe('ManageStoreComponent', () => {
  let component: ManageStoreComponent;
  let fixture: ComponentFixture<ManageStoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageStoreComponent]
    });
    fixture = TestBed.createComponent(ManageStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
