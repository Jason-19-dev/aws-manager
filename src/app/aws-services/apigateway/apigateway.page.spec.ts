import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApigatewayPage } from './apigateway.page';

describe('ApigatewayPage', () => {
  let component: ApigatewayPage;
  let fixture: ComponentFixture<ApigatewayPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ApigatewayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
