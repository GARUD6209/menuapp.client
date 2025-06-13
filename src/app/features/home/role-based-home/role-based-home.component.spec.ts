import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleBasedHomeComponent } from './role-based-home.component';

describe('RoleBasedHomeComponent', () => {
  let component: RoleBasedHomeComponent;
  let fixture: ComponentFixture<RoleBasedHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoleBasedHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoleBasedHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
