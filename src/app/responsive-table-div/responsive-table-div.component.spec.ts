import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveTableDivComponent } from './responsive-table-div.component';

describe('ResponsiveTableDivComponent', () => {
  let component: ResponsiveTableDivComponent;
  let fixture: ComponentFixture<ResponsiveTableDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsiveTableDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveTableDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
