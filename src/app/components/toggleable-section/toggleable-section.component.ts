import { Component, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-toggleable-section',
  templateUrl: './toggleable-section.component.html',
  standalone: false,
  animations: [
    trigger('toggle', [
      state('closed', style({
        height: '0',
        opacity: 0,
        paddingTop: '0',
        paddingBottom: '0',
      })),
      state('open', style({
        height: '*',
        opacity: 1,
        paddingTop: '*',
        paddingBottom: '*',
      })),
      transition('closed <=> open', animate('300ms ease-in-out')),
    ])
  ]
})
export class ToggleableSectionComponent {
  @Input() title = '';
  @Input() initiallyOpen = true;

  isOpen = true;

  ngOnInit() {
    this.isOpen = this.initiallyOpen;
  }

  toggle(): void {
    this.isOpen = !this.isOpen;
  }
}
