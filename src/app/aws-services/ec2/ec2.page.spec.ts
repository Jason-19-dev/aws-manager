import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ec2Page } from './ec2.page';

describe('Ec2Page', () => {
  let component: Ec2Page;
  let fixture: ComponentFixture<Ec2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Ec2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
