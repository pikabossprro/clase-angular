import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryNotificationComponent } from './query-notification.component';

describe('QueryNotificationComponent', () => {
  let component: QueryNotificationComponent;
  let fixture: ComponentFixture<QueryNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueryNotificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QueryNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
