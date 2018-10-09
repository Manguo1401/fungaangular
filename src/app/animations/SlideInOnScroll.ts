import { style, animate, trigger, state, transition, stagger, query } from '@angular/animations';

export let slideOnScroll = trigger('slideOnScroll', [
    transition('hide => show', [
        query('@ourServiceAnimation', style({
            opacity: 0,
            transform: 'translateX(-40px)'
        })),
        query('@ourServiceAnimation', stagger('300ms', [
            animate('800ms ease-out', style({
                opacity: 1,
                transform: 'translateX(0)'
            }))
        ]))
    ])
]
);

export let ourServiceAnimation = trigger('ourServiceAnimation', [
    state('hide', style({
        opacity: 0,
        transform: 'translateX(-40px)'
    }))
]);
