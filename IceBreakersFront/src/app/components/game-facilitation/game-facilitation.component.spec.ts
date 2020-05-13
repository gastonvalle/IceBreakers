/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GameFacilitationComponent } from './game-facilitation.component';

describe('GameFacilitationComponent', () => {
  let component: GameFacilitationComponent;
  let fixture: ComponentFixture<GameFacilitationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameFacilitationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameFacilitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
