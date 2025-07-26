import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pizza-card',
  templateUrl: './pizza-card.component.html',
  styleUrls: ['./pizza-card.component.scss'],
  standalone: false
})
export class PizzaCardComponent {
  @Input() image!: string;
  @Input() description!: string;

  flipped: boolean = false;

  toggleFlip() {
    this.flipped = !this.flipped;
  }

  resetFlip() {
    this.flipped = false;
  }
}
