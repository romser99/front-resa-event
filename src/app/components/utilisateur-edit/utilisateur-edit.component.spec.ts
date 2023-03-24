import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateurEditComponent } from './utilisateur-edit.component';

describe('UtilisateurEditComponent', () => {
  let component: UtilisateurEditComponent;
  let fixture: ComponentFixture<UtilisateurEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilisateurEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilisateurEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
