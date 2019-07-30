import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertPage } from './expert.page';

describe('ExpertPage', () => {
  let component: ExpertPage;
  let fixture: ComponentFixture<ExpertPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
