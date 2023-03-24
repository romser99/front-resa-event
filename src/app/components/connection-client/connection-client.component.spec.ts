import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionClientComponent } from './connection-client.component';

describe('ConnectionClientComponent', () => {
  let component: ConnectionClientComponent;
  let fixture: ComponentFixture<ConnectionClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectionClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnectionClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
