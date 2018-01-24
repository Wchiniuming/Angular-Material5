import { trigger, state, style, animate, keyframes, transition } from '@angular/animations';

export const taskItemAnim = trigger('taskItem', [
    state('out', style({'border-left-width': '3px'})),
    state('hover', style({'border-left-width': '8px', 'background-color': '#ccc'})),
    transition('out => hover', animate('100ms ease-in')),
    transition('hover => out', animate('100ms ease-out')),
]);
