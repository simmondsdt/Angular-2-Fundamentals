import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { SessionListComponent } from './session-list.component';
import { UpvoteComponent } from './upvote.component';
import { CollapsibleWellComponent } from '../../common/collapsible-well.component';
import { DurationPipe } from '../shared/duration.pipe';
import { ISession } from '../shared/event.model';
import { AuthService } from '../../user/auth.service';
import { VoterService } from './voter.service';

describe('SessionListComponent', () => {
	let fixture: ComponentFixture<SessionListComponent>,
		component: SessionListComponent,
		element: HTMLElement,
		debugEl: DebugElement

	beforeEach(async(() => {
		let mockAuthService = {
			isAuthenticated: () => true,
			currentUser: {userName: 'Joe'}
		};
		let mockVoterService = {
			userHasVoted: () => true
		};

		TestBed.configureTestingModule({
			declarations: [
				SessionListComponent,
				UpvoteComponent,
				DurationPipe,
				CollapsibleWellComponent
			],
			imports: [],
			providers: [
				{ provide: AuthService, useValue: mockAuthService },
				{ provide: VoterService, useValue: mockVoterService },
			],
			schemas: []
		}).compileComponents();
	}))

	beforeEach(() => {
		fixture = TestBed.createComponent(SessionListComponent);
		component = fixture.componentInstance;
		debugEl = fixture.debugElement;
		element = fixture.nativeElement;
	})

	describe('initial display', () => {
		it('should have the correct session title', () => {
			component.sessions = [{id: 3, name: 'Session 1', presenter: 'Joe', duration: 1, level: 'beginner', abstract: 'abstract', voters: ['john', 'bob'] }];
			component.filterBy = 'all';
			component.sortBy = 'name';
			component.eventId = 4;

			component.ngOnChanges();
			fixture.detectChanges();

			// Can use element or debugElement to select html
			// expect(element.querySelector('[well-title]').textContent).toContain('Session 1');
			expect(debugEl.query(By.css('[well-title]')).nativeElement.textContent).toContain('Session 1');
		})
	})
})