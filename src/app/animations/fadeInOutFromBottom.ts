import { style, animate, trigger, state, transition } from '@angular/animations';

export let snackbarAnimation = trigger('snackbarAnimation', [
    state('hide', style({
        display: 'none',
        opacity: 0,
        transform: 'translateY(20px)'
    })),
    transition('hide => show', [
        animate('800ms ease-out')
    ]),
    transition('show => hide', [
        animate('800ms ease-in')
    ])
]);
