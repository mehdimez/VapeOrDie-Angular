import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProuditByCategoryComponent } from './proudit-by-category.component';

describe('ProuditByCategoryComponent', () => {
  let component: ProuditByCategoryComponent;
  let fixture: ComponentFixture<ProuditByCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProuditByCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProuditByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
