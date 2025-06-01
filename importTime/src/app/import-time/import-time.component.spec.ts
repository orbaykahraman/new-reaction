import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportTimeComponent } from './import-time.component';

describe('ImportTimeComponent', () => {
  let component: ImportTimeComponent;
  let fixture: ComponentFixture<ImportTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
