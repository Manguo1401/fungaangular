import { trigger, state, style, transition, animate } from '@angular/animations';

export const fader = trigger('fader', [
    state('*', style({
        opacity: 0,
    })),
    state('active', style({
        opacity: 1,
    })),
    state('inactive', style({
        opacity: 0,
    })),
    transition('inactive => active', animate('300ms ease-in')),
    transition('active => inactive', animate('300ms ease-in'))
]);
