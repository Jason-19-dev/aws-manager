import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LambdaPage } from './lambda.page';

describe('LambdaPage', () => {
  let component: LambdaPage;
  let fixture: ComponentFixture<LambdaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LambdaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
